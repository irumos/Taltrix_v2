/**
 * Builds the execution datasets consumed by the Taltrix workspace.
 * Run with: node scripts/generate-programs.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/execution");
mkdirSync(OUT, { recursive: true });

const fmt = (v) => {
  if (v === null || v === undefined) return "None";
  if (typeof v === "string") return `'${v}'`;
  if (typeof v === "boolean") return v ? "True" : "False";
  if (Array.isArray(v)) return `[${v.map(fmt).join(", ")}]`;
  if (typeof v === "object") return `{${Object.entries(v).map(([k, x]) => `'${k}': ${fmt(x)}`).join(", ")}}`;
  return String(v);
};
const typeOf = (v) => {
  if (v === null || v === undefined) return "None";
  if (typeof v === "boolean") return "bool";
  if (typeof v === "number") return Number.isInteger(v) ? "int" : "float";
  if (typeof v === "string") return "str";
  if (Array.isArray(v)) return "list";
  if (v instanceof Set) return "set";
  return "dict";
};

class Tracer {
  constructor(meta) {
    this.meta = meta;
    this.lines = meta.code.split("\n");
    this.steps = [];
    this.stack = [{ name: "<module>", line: 1, locals: {} }];
    this.globals = {};
    this.heap = new Map();
    this.allocs = 0;
    this.peak = 0;
    this.time = 0;
    this.prev = new Map();
  }
  /** Resolve a 1-based line number from a unique code fragment. */
  L(fragment) {
    const i = this.lines.findIndex((l) => l.includes(fragment));
    if (i < 0) throw new Error(`line not found: ${fragment} in ${this.meta.fileName}`);
    return i + 1;
  }
  push(name, line) {
    this.stack.push({ name, line, locals: {} });
  }
  pop() {
    this.stack.pop();
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  set(name, value) {
    this.top.locals[name] = value;
  }
  global(name, value) {
    this.globals[name] = value;
  }
  alloc(id, type, label, value, refs = []) {
    this.allocs += 1;
    this.heap.set(id, { id, type, label, value, refs });
  }
  update(id, value, refs) {
    const o = this.heap.get(id);
    if (!o) return;
    o.value = value;
    if (refs) o.refs = refs;
    o.touched = true;
  }
  free(id) {
    this.heap.delete(id);
  }
  step(lineFragment, label, note, opts = {}) {
    const line = typeof lineFragment === "number" ? lineFragment : this.L(lineFragment);
    this.top.line = line;
    this.time += 0.4 + Math.random() * 0.9;

    const vars = [];
    const add = (name, value, scope) =>
      vars.push({ name, type: typeOf(value), value: fmt(value), scope });
    for (const [k, v] of Object.entries(this.globals)) add(k, v, "global");
    for (const f of this.stack.slice(1)) {
      for (const [k, v] of Object.entries(f.locals)) add(k, v, f.name);
    }

    const changed = [];
    const seen = new Map();
    for (const v of vars) {
      const key = `${v.scope}:${v.name}`;
      seen.set(key, v.value);
      if (this.prev.has(key) ? this.prev.get(key) !== v.value : true) {
        v.changed = true;
        changed.push(key);
      }
    }
    this.prev = seen;

    const heap = [...this.heap.values()].map((o) => ({
      id: o.id,
      type: o.type,
      label: o.label,
      value: o.value,
      refs: [...o.refs],
    }));
    const highlightHeap = [...this.heap.values()].filter((o) => o.touched).map((o) => o.id);
    for (const o of this.heap.values()) o.touched = false;

    const heapBytes = heap.reduce((n, o) => n + 32 + o.value.length * 2, 0);
    this.peak = Math.max(this.peak, heapBytes);

    this.steps.push({
      line,
      label,
      note,
      status: opts.status ?? "running",
      currentFunction: this.top.name,
      returnValue: opts.returnValue ?? null,
      executionTimeMs: Number(this.time.toFixed(2)),
      variables: vars,
      changed,
      highlightedVariables: opts.highlight ?? changed,
      highlightedMemory: opts.highlightMemory ?? highlightHeap,
      stack: this.stack.map((f) => ({ name: f.name, line: f.line, locals: Object.fromEntries(Object.entries(f.locals).map(([k, v]) => [k, fmt(v)])) })),
      heap,
      stdout: opts.stdout ?? [],
      metrics: {
        stackBytes: this.stack.length * 96,
        heapBytes,
        objects: heap.length,
        allocations: this.allocs,
        peakBytes: this.peak,
      },
    });
  }
  out(text) {
    return [{ stream: "stdout", text }];
  }
  err(text) {
    return [{ stream: "stderr", text }];
  }
  build() {
    const last = this.steps[this.steps.length - 1];
    return {
      ...this.meta,
      steps: this.steps,
      totalTimeMs: last.executionTimeMs,
      finalStatus: last.status,
    };
  }
}

const programs = [];
const define = (meta, body) => {
  const t = new Tracer(meta);
  body(t);
  programs.push(t.build());
};

/* ------------------------------------------------------------------ 1. factorial */
define(
  {
    id: "factorial",
    title: "Recursive Factorial",
    category: "Recursion",
    description: "Classic recursion: each call adds a frame until the base case unwinds.",
    language: "python",
    monacoLanguage: "python",
    fileName: "factorial.py",
    entry: "factorial(4)",
    complexity: { time: "O(n)", space: "O(n)", maxDepth: 5 },
    code: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)


result = factorial(4)
print("factorial(4) =", result)
`,
  },
  (t) => {
    t.alloc("fn@0x1a", "function", "factorial", "code object");
    t.global("result", null);
    t.step("result = factorial(4)", "call factorial(4)", "The module frame requests factorial(4). Control transfers into a new frame.");
    for (const n of [4, 3, 2]) {
      t.push(`factorial(${n})`, 1);
      t.set("n", n);
      t.alloc(`int@0x${(0x40 + n).toString(16)}`, "int", `n = ${n}`, String(n));
      t.step("def factorial(n):", `enter factorial(${n})`, `A new frame binds n = ${n} and evaluation begins.`);
      t.step("if n <= 1:", `guard n <= 1 is False`, `${n} > 1, so the recursive branch is taken.`);
      t.step("return n * factorial(n - 1)", `recurse factorial(${n - 1})`, `The multiplication waits while factorial(${n - 1}) is evaluated.`);
    }
    t.push("factorial(1)", 1);
    t.set("n", 1);
    t.alloc("int@0x41", "int", "n = 1", "1");
    t.step("if n <= 1:", "base case reached", "n reaches 1 — the guard holds and recursion stops.");
    t.step("return 1", "return 1", "The deepest frame returns 1 and is popped from the stack.", { returnValue: "1" });
    let acc = 1;
    for (const n of [1, 2, 3, 4]) {
      acc = n === 1 ? 1 : acc * n;
      t.pop();
      if (n > 1) {
        t.top.locals.__result = acc;
        delete t.top.locals.__result;
        t.step("return n * factorial(n - 1)", `unwind → ${acc}`, `factorial(${n}) multiplies its pending value and returns ${acc}.`, { returnValue: String(acc) });
      }
      t.free(`int@0x${(0x40 + n).toString(16)}`);
    }
    t.global("result", 24);
    t.alloc("int@0x7d", "int", "result", "24");
    t.step("result = factorial(4)", "bind result", "The final value 24 is bound to result in the module scope.", { returnValue: "24" });
    t.step("print(\"factorial(4) =\", result)", "print result", "Execution completes and the interpreter flushes stdout.", {
      status: "completed",
      stdout: t.out("factorial(4) = 24"),
    });
  },
);

/* ------------------------------------------------------------------ 2. bubble sort */
define(
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    category: "Sorting",
    description: "Adjacent comparisons bubble the largest value to the end on every pass.",
    language: "python",
    monacoLanguage: "python",
    fileName: "bubble_sort.py",
    entry: "bubble_sort([5, 1, 4, 2])",
    complexity: { time: "O(n²)", space: "O(1)", maxDepth: 2 },
    code: `def bubble_sort(items):
    n = len(items)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
    return items


data = [5, 1, 4, 2]
print(bubble_sort(data))
`,
  },
  (t) => {
    const data = [5, 1, 4, 2];
    t.global("data", [...data]);
    t.alloc("list@0x2c", "list", "data", fmt(data));
    t.step("data = [5, 1, 4, 2]", "allocate list", "A four element list is allocated on the heap.");
    t.push("bubble_sort", 1);
    t.set("items", [...data]);
    t.step("def bubble_sort(items):", "call bubble_sort", "items is bound to the same heap object — Python passes the reference.");
    t.set("n", 4);
    t.step("n = len(items)", "read length", "len(items) is 4, so the outer pass runs three times.");
    let swaps = 0;
    for (let i = 0; i < 3; i += 1) {
      t.set("i", i);
      t.step("for i in range(n - 1):", `pass ${i + 1}`, `Pass ${i + 1} of 3 begins; the tail ${i} element(s) are already sorted.`);
      for (let j = 0; j < 3 - i; j += 1) {
        t.set("j", j);
        const swap = data[j] > data[j + 1];
        t.step("if items[j] > items[j + 1]:", `compare ${data[j]} / ${data[j + 1]}`, swap ? `${data[j]} > ${data[j + 1]} — the pair is out of order.` : `${data[j]} ≤ ${data[j + 1]} — the pair already holds.`);
        if (swap) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
          swaps += 1;
          t.set("items", [...data]);
          t.global("data", [...data]);
          t.update("list@0x2c", fmt(data));
          t.step("items[j], items[j + 1] = items[j + 1], items[j]", `swap → ${fmt(data)}`, "The list object is mutated in place, so data sees the change too.");
        }
      }
    }
    t.step("return items", "return sorted list", `Sorting finished after ${swaps} swaps.`, { returnValue: fmt(data) });
    t.pop();
    t.step("print(bubble_sort(data))", "print result", "The sorted list is written to stdout.", {
      status: "completed",
      stdout: t.out(fmt(data)),
    });
  },
);

/* ------------------------------------------------------------------ 3. binary search */
define(
  {
    id: "binary-search",
    title: "Binary Search",
    category: "Searching",
    description: "Halve the search window until the target is isolated.",
    language: "python",
    monacoLanguage: "python",
    fileName: "binary_search.py",
    entry: "binary_search(data, 23)",
    complexity: { time: "O(log n)", space: "O(1)", maxDepth: 2 },
    code: `def binary_search(items, target):
    low, high = 0, len(items) - 1
    while low <= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        if items[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1


data = [2, 5, 8, 12, 16, 23, 38, 56]
print(binary_search(data, 23))
`,
  },
  (t) => {
    const items = [2, 5, 8, 12, 16, 23, 38, 56];
    const target = 23;
    t.global("data", items);
    t.alloc("list@0x3f", "list", "data", fmt(items));
    t.step("data = [2, 5, 8, 12, 16, 23, 38, 56]", "allocate list", "A sorted list of eight integers is allocated.");
    t.push("binary_search", 1);
    t.set("items", items);
    t.set("target", target);
    t.step("def binary_search(items, target):", "call binary_search", "The frame binds the list reference and the target value.");
    let low = 0;
    let high = items.length - 1;
    t.set("low", low);
    t.set("high", high);
    t.step("low, high = 0, len(items) - 1", "init window", "The search window covers the whole list.");
    let found = -1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      t.set("mid", mid);
      t.step("mid = (low + high) // 2", `probe index ${mid}`, `The midpoint of [${low}, ${high}] is ${mid} → value ${items[mid]}.`);
      if (items[mid] === target) {
        found = mid;
        t.step("return mid", `match at ${mid}`, `items[${mid}] equals the target, so the index is returned.`, { returnValue: String(mid) });
        break;
      }
      if (items[mid] < target) {
        low = mid + 1;
        t.set("low", low);
        t.step("low = mid + 1", "search right half", `${items[mid]} < ${target} — discard the lower half.`);
      } else {
        high = mid - 1;
        t.set("high", high);
        t.step("high = mid - 1", "search left half", `${items[mid]} > ${target} — discard the upper half.`);
      }
    }
    t.pop();
    t.step("print(binary_search(data, 23))", "print index", "Four probes were enough for eight elements.", {
      status: "completed",
      stdout: t.out(String(found)),
    });
  },
);

/* ------------------------------------------------------------------ 4. dfs */
define(
  {
    id: "dfs",
    title: "Depth First Search",
    category: "Graphs",
    description: "An explicit stack drives the traversal deep before it goes wide.",
    language: "python",
    monacoLanguage: "python",
    fileName: "dfs.py",
    entry: "dfs(graph, 'A')",
    complexity: { time: "O(V + E)", space: "O(V)", maxDepth: 2 },
    code: `graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["D"],
    "D": [],
}


def dfs(graph, start):
    seen, stack, order = set(), [start], []
    while stack:
        node = stack.pop()
        if node in seen:
            continue
        seen.add(node)
        order.append(node)
        for nxt in reversed(graph[node]):
            stack.append(nxt)
    return order


print(dfs(graph, "A"))
`,
  },
  (t) => {
    const graph = { A: ["B", "C"], B: ["D"], C: ["D"], D: [] };
    t.global("graph", graph);
    t.alloc("dict@0x11", "dict", "graph", "4 keys");
    for (const k of Object.keys(graph)) t.alloc(`node@${k}`, "list", `graph['${k}']`, fmt(graph[k]));
    t.step('graph = {', "allocate graph", "The adjacency map and its four edge lists are allocated.");
    t.push("dfs", 1);
    t.set("graph", "<dict>");
    t.set("start", "A");
    t.step("def dfs(graph, start):", "call dfs", "The traversal frame receives the graph reference and the start node.");
    const seen = [];
    const stack = ["A"];
    const order = [];
    t.set("seen", new Set());
    t.set("stack", [...stack]);
    t.set("order", []);
    t.alloc("set@0x21", "set", "seen", "set()");
    t.alloc("list@0x22", "list", "stack", fmt(stack));
    t.alloc("list@0x23", "list", "order", "[]");
    t.step("seen, stack, order = set(), [start], []", "init frontier", "The frontier starts with a single node.");
    while (stack.length) {
      const node = stack.pop();
      t.set("node", node);
      t.set("stack", [...stack]);
      t.update("list@0x22", fmt(stack));
      t.step("node = stack.pop()", `pop ${node}`, `${node} leaves the frontier and becomes the active node.`);
      if (seen.includes(node)) {
        t.step("continue", `skip ${node}`, `${node} was already visited — the branch is pruned.`);
        continue;
      }
      seen.push(node);
      order.push(node);
      t.set("seen", new Set(seen));
      t.set("order", [...order]);
      t.update("set@0x21", `{${seen.map((s) => `'${s}'`).join(", ")}}`);
      t.update("list@0x23", fmt(order));
      t.step("order.append(node)", `visit ${node}`, `${node} is recorded; the visit order is now ${fmt(order)}.`);
      const next = [...graph[node]].reverse();
      if (next.length) {
        stack.push(...next);
        t.set("stack", [...stack]);
        t.update("list@0x22", fmt(stack));
        t.step("stack.append(nxt)", `queue ${next.join(", ")}`, `Neighbours of ${node} are pushed for later exploration.`);
      }
    }
    t.step("return order", "return order", "Every reachable node has been visited.", { returnValue: fmt(order) });
    t.pop();
    t.step('print(dfs(graph, "A"))', "print order", "Depth first order is written to stdout.", {
      status: "completed",
      stdout: t.out(fmt(order)),
    });
  },
);

/* ------------------------------------------------------------------ 5. bfs */
define(
  {
    id: "bfs",
    title: "Breadth First Search",
    category: "Graphs",
    description: "A FIFO queue expands the graph level by level.",
    language: "python",
    monacoLanguage: "python",
    fileName: "bfs.py",
    entry: "bfs(graph, 'A')",
    complexity: { time: "O(V + E)", space: "O(V)", maxDepth: 2 },
    code: `from collections import deque

graph = {"A": ["B", "C"], "B": ["D"], "C": ["D"], "D": []}


def bfs(graph, start):
    seen = {start}
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for nxt in graph[node]:
            if nxt not in seen:
                seen.add(nxt)
                queue.append(nxt)
    return order


print(bfs(graph, "A"))
`,
  },
  (t) => {
    const graph = { A: ["B", "C"], B: ["D"], C: ["D"], D: [] };
    t.global("graph", graph);
    t.alloc("dict@0x31", "dict", "graph", "4 keys");
    t.step('graph = {"A"', "allocate graph", "The adjacency map is allocated once and shared by every frame.");
    t.push("bfs", 1);
    t.set("start", "A");
    t.step("def bfs(graph, start):", "call bfs", "The traversal frame is pushed onto the call stack.");
    const seen = ["A"];
    const queue = ["A"];
    const order = [];
    t.set("seen", new Set(seen));
    t.set("queue", [...queue]);
    t.set("order", []);
    t.alloc("set@0x32", "set", "seen", "{'A'}");
    t.alloc("deque@0x33", "deque", "queue", "deque(['A'])");
    t.alloc("list@0x34", "list", "order", "[]");
    t.step("queue = deque([start])", "seed queue", "The queue is seeded with the start node.");
    while (queue.length) {
      const node = queue.shift();
      order.push(node);
      t.set("node", node);
      t.set("queue", [...queue]);
      t.set("order", [...order]);
      t.update("deque@0x33", `deque(${fmt(queue)})`);
      t.update("list@0x34", fmt(order));
      t.step("node = queue.popleft()", `dequeue ${node}`, `${node} is removed from the front of the queue and visited.`);
      const fresh = graph[node].filter((n) => !seen.includes(n));
      if (fresh.length) {
        seen.push(...fresh);
        queue.push(...fresh);
        t.set("seen", new Set(seen));
        t.set("queue", [...queue]);
        t.update("set@0x32", `{${seen.map((s) => `'${s}'`).join(", ")}}`);
        t.update("deque@0x33", `deque(${fmt(queue)})`);
        t.step("queue.append(nxt)", `enqueue ${fresh.join(", ")}`, `Unseen neighbours of ${node} join the back of the queue.`);
      }
    }
    t.step("return order", "return order", "The queue is empty, so every level has been expanded.", { returnValue: fmt(order) });
    t.pop();
    t.step('print(bfs(graph, "A"))', "print order", "Breadth first order is written to stdout.", {
      status: "completed",
      stdout: t.out(fmt(order)),
    });
  },
);

/* ------------------------------------------------------------------ 6. linked list */
define(
  {
    id: "linked-list",
    title: "Linked List",
    category: "Data Structures",
    description: "Nodes are allocated separately and chained by reference.",
    language: "python",
    monacoLanguage: "python",
    fileName: "linked_list.py",
    entry: "build([10, 20, 30])",
    complexity: { time: "O(n)", space: "O(n)", maxDepth: 2 },
    code: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


def build(values):
    head = Node(values[0])
    cursor = head
    for value in values[1:]:
        cursor.next = Node(value)
        cursor = cursor.next
    return head


def walk(head):
    while head:
        print(head.value)
        head = head.next


walk(build([10, 20, 30]))
`,
  },
  (t) => {
    t.alloc("cls@0x01", "type", "Node", "class object");
    t.step("class Node:", "define Node", "The class object is created and bound in the module scope.");
    t.push("build", 1);
    t.set("values", [10, 20, 30]);
    t.step("def build(values):", "call build", "build receives the source values.");
    const ids = ["node@0xa1", "node@0xa2", "node@0xa3"];
    t.alloc(ids[0], "Node", "value = 10", "next → None");
    t.set("head", "<Node 10>");
    t.set("cursor", "<Node 10>");
    t.step("head = Node(values[0])", "allocate head", "The first node is allocated; head and cursor point at it.");
    for (let i = 1; i < 3; i += 1) {
      t.alloc(ids[i], "Node", `value = ${(i + 1) * 10}`, "next → None");
      t.update(ids[i - 1], `next → ${ids[i]}`, [ids[i]]);
      t.set("value", (i + 1) * 10);
      t.step("cursor.next = Node(value)", `link node ${(i + 1) * 10}`, "A fresh node is allocated and linked from the current tail.");
      t.set("cursor", `<Node ${(i + 1) * 10}>`);
      t.step("cursor = cursor.next", "advance cursor", "The cursor moves to the node it just created.");
    }
    t.step("return head", "return head", "The chain is complete and the head reference is returned.", { returnValue: "<Node 10>" });
    t.pop();
    t.push("walk", 1);
    for (let i = 0; i < 3; i += 1) {
      t.set("head", `<Node ${(i + 1) * 10}>`);
      t.update(ids[i], `next → ${ids[i + 1] ?? "None"}`, ids[i + 1] ? [ids[i + 1]] : []);
      t.step("print(head.value)", `emit ${(i + 1) * 10}`, "The current node's value is printed and the walk follows next.", {
        stdout: t.out(String((i + 1) * 10)),
        highlightMemory: [ids[i]],
      });
    }
    t.pop();
    t.step("walk(build([10, 20, 30]))", "traversal done", "head becomes None, so the loop and the program finish.", {
      status: "completed",
    });
  },
);

/* ------------------------------------------------------------------ 7. queue */
define(
  {
    id: "queue",
    title: "Queue (FIFO)",
    category: "Data Structures",
    description: "Enqueue at the back, dequeue from the front.",
    language: "python",
    monacoLanguage: "python",
    fileName: "queue_demo.py",
    entry: "run()",
    complexity: { time: "O(1) per op", space: "O(n)", maxDepth: 2 },
    code: `from collections import deque


def run():
    queue = deque()
    for job in ["build", "test", "deploy"]:
        queue.append(job)
    while queue:
        job = queue.popleft()
        print("running", job)
    return "drained"


print(run())
`,
  },
  (t) => {
    t.push("run", 1);
    const q = [];
    t.set("queue", []);
    t.alloc("deque@0x51", "deque", "queue", "deque([])");
    t.step("queue = deque()", "allocate queue", "An empty double ended queue is allocated.");
    for (const job of ["build", "test", "deploy"]) {
      q.push(job);
      t.set("job", job);
      t.set("queue", [...q]);
      t.update("deque@0x51", `deque(${fmt(q)})`);
      t.step("queue.append(job)", `enqueue ${job}`, `'${job}' is appended to the back of the queue.`);
    }
    while (q.length) {
      const job = q.shift();
      t.set("job", job);
      t.set("queue", [...q]);
      t.update("deque@0x51", `deque(${fmt(q)})`);
      t.step("job = queue.popleft()", `dequeue ${job}`, `The oldest entry '${job}' leaves the front — FIFO order holds.`, {
        stdout: t.out(`running ${job}`),
      });
    }
    t.step("return \"drained\"", "queue drained", "No entries remain, so the loop exits.", { returnValue: "'drained'" });
    t.pop();
    t.step("print(run())", "print result", "The return value is written to stdout.", {
      status: "completed",
      stdout: t.out("drained"),
    });
  },
);

/* ------------------------------------------------------------------ 8. stack */
define(
  {
    id: "stack",
    title: "Stack (LIFO)",
    category: "Data Structures",
    description: "Balanced bracket checking with an explicit stack.",
    language: "python",
    monacoLanguage: "python",
    fileName: "stack_demo.py",
    entry: "balanced('([])')",
    complexity: { time: "O(n)", space: "O(n)", maxDepth: 2 },
    code: `PAIRS = {")": "(", "]": "["}


def balanced(text):
    stack = []
    for char in text:
        if char in "([":
            stack.append(char)
        else:
            if not stack or stack.pop() != PAIRS[char]:
                return False
    return not stack


print(balanced("([])"))
`,
  },
  (t) => {
    t.push("balanced", 1);
    t.set("text", "([])");
    const st = [];
    t.set("stack", []);
    t.alloc("list@0x61", "list", "stack", "[]");
    t.step("stack = []", "allocate stack", "An empty list acts as the LIFO stack.");
    for (const char of "([])") {
      t.set("char", char);
      if (char === "(" || char === "[") {
        st.push(char);
        t.set("stack", [...st]);
        t.update("list@0x61", fmt(st));
        t.step("stack.append(char)", `push '${char}'`, `An opening bracket is pushed; depth is now ${st.length}.`);
      } else {
        const popped = st.pop();
        t.set("stack", [...st]);
        t.update("list@0x61", fmt(st));
        t.step("if not stack or stack.pop() != PAIRS[char]:", `pop '${popped}'`, `'${char}' matches '${popped}' — the pair is balanced.`);
      }
    }
    t.step("return not stack", "stack empty", "Every opening bracket was closed in order.", { returnValue: "True" });
    t.pop();
    t.step('print(balanced("([])"))', "print result", "The verdict is written to stdout.", {
      status: "completed",
      stdout: t.out("True"),
    });
  },
);

/* ------------------------------------------------------------------ 9. tree traversal */
define(
  {
    id: "tree-traversal",
    title: "Tree Traversal",
    category: "Trees",
    description: "In-order traversal of a binary tree, one recursive frame per node.",
    language: "python",
    monacoLanguage: "python",
    fileName: "tree_traversal.py",
    entry: "inorder(root)",
    complexity: { time: "O(n)", space: "O(h)", maxDepth: 4 },
    code: `class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


root = Node(8, Node(3), Node(12))


def inorder(node):
    if node is None:
        return []
    return inorder(node.left) + [node.value] + inorder(node.right)


print(inorder(root))
`,
  },
  (t) => {
    t.alloc("node@0x8", "Node", "value = 8", "root");
    t.alloc("node@0x3", "Node", "value = 3", "leaf");
    t.alloc("node@0xc", "Node", "value = 12", "leaf");
    t.update("node@0x8", "root", ["node@0x3", "node@0xc"]);
    t.global("root", "<Node 8>");
    t.step("root = Node(8, Node(3), Node(12))", "build tree", "Three nodes are allocated and linked into a balanced tree.");
    t.push("inorder(8)", 1);
    t.set("node", "<Node 8>");
    t.step("def inorder(node):", "visit root 8", "The traversal begins at the root frame.", { highlightMemory: ["node@0x8"] });
    t.push("inorder(3)", 1);
    t.set("node", "<Node 3>");
    t.step("return inorder(node.left)", "descend left → 3", "The left subtree must be fully traversed before the root is emitted.", { highlightMemory: ["node@0x3"] });
    t.push("inorder(None)", 1);
    t.set("node", null);
    t.step("if node is None:", "empty child", "A missing child returns an empty list immediately.", { returnValue: "[]" });
    t.pop();
    t.pop();
    t.step("return inorder(node.left) + [node.value] + inorder(node.right)", "emit 3", "The left leaf contributes [3].", { returnValue: "[3]", highlightMemory: ["node@0x3"] });
    t.step("return inorder(node.left) + [node.value] + inorder(node.right)", "emit 8", "The root value is appended after its left subtree.", { returnValue: "[3, 8]", highlightMemory: ["node@0x8"] });
    t.push("inorder(12)", 1);
    t.set("node", "<Node 12>");
    t.step("return inorder(node.left) + [node.value] + inorder(node.right)", "descend right → 12", "The right subtree is traversed last.", { highlightMemory: ["node@0xc"] });
    t.pop();
    t.step("return inorder(node.left) + [node.value] + inorder(node.right)", "emit 12", "The right leaf contributes [12] and the frame unwinds.", { returnValue: "[3, 8, 12]", highlightMemory: ["node@0xc"] });
    t.pop();
    t.step("print(inorder(root))", "print traversal", "In-order traversal of a binary search tree yields sorted values.", {
      status: "completed",
      stdout: t.out("[3, 8, 12]"),
    });
  },
);

/* ------------------------------------------------------------------ 10. runtime error */
define(
  {
    id: "runtime-error",
    title: "Runtime Error",
    category: "Diagnostics",
    description: "An out of range index surfaces as a runtime error with a traceback.",
    language: "python",
    monacoLanguage: "python",
    fileName: "runtime_error.py",
    entry: "average(scores)",
    complexity: { time: "O(n)", space: "O(1)", maxDepth: 2 },
    code: `def average(values):
    total = 0
    for i in range(len(values) + 1):
        total += values[i]
    return total / len(values)


scores = [90, 72, 88]
print(average(scores))
`,
  },
  (t) => {
    const scores = [90, 72, 88];
    t.global("scores", scores);
    t.alloc("list@0x71", "list", "scores", fmt(scores));
    t.step("scores = [90, 72, 88]", "allocate list", "Three scores are stored in a list.");
    t.push("average", 1);
    t.set("values", scores);
    t.set("total", 0);
    t.step("total = 0", "call average", "The accumulator starts at zero.");
    let total = 0;
    for (let i = 0; i < 3; i += 1) {
      total += scores[i];
      t.set("i", i);
      t.set("total", total);
      t.step("total += values[i]", `accumulate ${scores[i]}`, `values[${i}] is added — the running total is ${total}.`);
    }
    t.set("i", 3);
    t.step("for i in range(len(values) + 1):", "index 3 requested", "The loop bound is one too large, so index 3 is about to be read.", {
      status: "running",
    });
    t.step("total += values[i]", "IndexError", "values has three elements, so index 3 is out of range and the frame raises.", {
      status: "runtime-error",
      stdout: [
        { stream: "stderr", text: "Traceback (most recent call last):" },
        { stream: "stderr", text: '  File "runtime_error.py", line 8, in <module>' },
        { stream: "stderr", text: '  File "runtime_error.py", line 4, in average' },
        { stream: "stderr", text: "IndexError: list index out of range" },
      ],
    });
  },
);

for (const p of programs) {
  writeFileSync(`${OUT}/${p.id}.json`, `${JSON.stringify(p, null, 2)}\n`);
}
writeFileSync(
  `${OUT}/manifest.json`,
  `${JSON.stringify(
    programs.map((p) => ({ id: p.id, title: p.title, category: p.category, language: p.language, fileName: p.fileName, steps: p.steps.length })),
    null,
    2,
  )}\n`,
);
console.log(programs.map((p) => `${p.id}: ${p.steps.length} steps`).join("\n"));
