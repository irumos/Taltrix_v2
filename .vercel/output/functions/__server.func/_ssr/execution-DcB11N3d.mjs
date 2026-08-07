//#region node_modules/.nitro/vite/services/ssr/assets/execution-DcB11N3d.js
var python_default = {
	id: "python",
	label: "Python",
	monacoLanguage: "python",
	fileName: "factorial.py",
	entry: "factorial(4)",
	code: "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\n\nresult = factorial(4)\nprint(\"factorial(4) =\", result)\n",
	complexity: {
		"time": "O(n)",
		"space": "O(n)",
		"maxDepth": 5
	},
	steps: [
		{
			"line": 7,
			"label": "call factorial(4)",
			"note": "The module frame requests factorial(4). Control transfers into a new frame.",
			"variables": [{
				"name": "result",
				"value": "<pending>",
				"scope": "global",
				"changed": true,
				"type": "ref"
			}],
			"stack": [{
				"name": "<module>",
				"line": 7,
				"locals": {}
			}],
			"heap": [{
				"id": "fn@0x1a",
				"type": "function",
				"label": "factorial",
				"value": "code object",
				"refs": []
			}],
			"stdout": []
		},
		{
			"line": 2,
			"label": "evaluate guard n <= 1",
			"note": "Guard is false — recursion continues.",
			"variables": [{
				"name": "n",
				"value": "4",
				"scope": "factorial#1",
				"changed": true,
				"type": "int"
			}],
			"stack": [{
				"name": "<module>",
				"line": 7,
				"locals": {}
			}, {
				"name": "factorial",
				"line": 2,
				"locals": { "n": 4 }
			}],
			"heap": [{
				"id": "fn@0x1a",
				"type": "function",
				"label": "factorial",
				"value": "code object",
				"refs": []
			}, {
				"id": "int@0x40",
				"type": "int",
				"label": "n",
				"value": "4",
				"refs": ["fn@0x1a"]
			}],
			"stdout": []
		},
		{
			"line": 4,
			"label": "recurse factorial(3)",
			"note": "Stack depth 3. Each frame keeps its own binding of n.",
			"variables": [{
				"name": "n",
				"value": "4",
				"scope": "factorial#1",
				"type": "int",
				"changed": false
			}, {
				"name": "n",
				"value": "3",
				"scope": "factorial#2",
				"changed": true,
				"type": "int"
			}],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 4 }
				},
				{
					"name": "factorial",
					"line": 2,
					"locals": { "n": 3 }
				}
			],
			"heap": [
				{
					"id": "fn@0x1a",
					"type": "function",
					"label": "factorial",
					"value": "code object",
					"refs": []
				},
				{
					"id": "int@0x40",
					"type": "int",
					"label": "n",
					"value": "4",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x3c",
					"type": "int",
					"label": "n",
					"value": "3",
					"refs": ["fn@0x1a"]
				}
			],
			"stdout": []
		},
		{
			"line": 4,
			"label": "recurse factorial(2)",
			"note": "Deepest descent begins. Memory grows linearly with n — O(n) space.",
			"variables": [
				{
					"name": "n",
					"value": "4",
					"scope": "factorial#1",
					"type": "int",
					"changed": false
				},
				{
					"name": "n",
					"value": "3",
					"scope": "factorial#2",
					"type": "int",
					"changed": false
				},
				{
					"name": "n",
					"value": "2",
					"scope": "factorial#3",
					"changed": true,
					"type": "int"
				}
			],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 4 }
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 3 }
				},
				{
					"name": "factorial",
					"line": 2,
					"locals": { "n": 2 }
				}
			],
			"heap": [
				{
					"id": "fn@0x1a",
					"type": "function",
					"label": "factorial",
					"value": "code object",
					"refs": []
				},
				{
					"id": "int@0x40",
					"type": "int",
					"label": "n",
					"value": "4",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x3c",
					"type": "int",
					"label": "n",
					"value": "3",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x38",
					"type": "int",
					"label": "n",
					"value": "2",
					"refs": ["fn@0x1a"]
				}
			],
			"stdout": []
		},
		{
			"line": 3,
			"label": "base case reached",
			"note": "n <= 1 is true. The recursion bottoms out and returns 1.",
			"variables": [{
				"name": "n",
				"value": "1",
				"scope": "factorial#4",
				"changed": true,
				"type": "int"
			}, {
				"name": "return",
				"value": "1",
				"scope": "factorial#4",
				"changed": true,
				"type": "int"
			}],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 4 }
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 3 }
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 2 }
				},
				{
					"name": "factorial",
					"line": 3,
					"locals": { "n": 1 }
				}
			],
			"heap": [
				{
					"id": "fn@0x1a",
					"type": "function",
					"label": "factorial",
					"value": "code object",
					"refs": []
				},
				{
					"id": "int@0x34",
					"type": "int",
					"label": "n",
					"value": "1",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x38",
					"type": "int",
					"label": "n",
					"value": "2",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x3c",
					"type": "int",
					"label": "n",
					"value": "3",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x40",
					"type": "int",
					"label": "n",
					"value": "4",
					"refs": ["fn@0x1a"]
				}
			],
			"stdout": []
		},
		{
			"line": 4,
			"label": "unwind → 2",
			"note": "Frames collapse one by one, multiplying on the way out.",
			"variables": [{
				"name": "return",
				"value": "2",
				"scope": "factorial#3",
				"changed": true,
				"type": "int"
			}],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 4 }
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 3 }
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 2 }
				}
			],
			"heap": [
				{
					"id": "fn@0x1a",
					"type": "function",
					"label": "factorial",
					"value": "code object",
					"refs": []
				},
				{
					"id": "int@0x38",
					"type": "int",
					"label": "n",
					"value": "2",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x3c",
					"type": "int",
					"label": "n",
					"value": "3",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x40",
					"type": "int",
					"label": "n",
					"value": "4",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x52",
					"type": "int",
					"label": "acc",
					"value": "2",
					"refs": ["fn@0x1a"]
				}
			],
			"stdout": []
		},
		{
			"line": 4,
			"label": "unwind → 6",
			"note": "3 × 2 = 6.",
			"variables": [{
				"name": "return",
				"value": "6",
				"scope": "factorial#2",
				"changed": true,
				"type": "int"
			}],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 4 }
				},
				{
					"name": "factorial",
					"line": 4,
					"locals": { "n": 3 }
				}
			],
			"heap": [
				{
					"id": "fn@0x1a",
					"type": "function",
					"label": "factorial",
					"value": "code object",
					"refs": []
				},
				{
					"id": "int@0x3c",
					"type": "int",
					"label": "n",
					"value": "3",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x40",
					"type": "int",
					"label": "n",
					"value": "4",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "int@0x52",
					"type": "int",
					"label": "acc",
					"value": "6",
					"refs": ["fn@0x1a"]
				}
			],
			"stdout": []
		},
		{
			"line": 4,
			"label": "unwind → 24",
			"note": "The final product lands back in the module frame.",
			"variables": [{
				"name": "result",
				"value": "24",
				"scope": "global",
				"changed": true,
				"type": "int"
			}],
			"stack": [{
				"name": "<module>",
				"line": 7,
				"locals": {}
			}],
			"heap": [{
				"id": "fn@0x1a",
				"type": "function",
				"label": "factorial",
				"value": "code object",
				"refs": []
			}, {
				"id": "int@0x52",
				"type": "int",
				"label": "result",
				"value": "24",
				"refs": ["fn@0x1a"]
			}],
			"stdout": []
		},
		{
			"line": 8,
			"label": "print result",
			"note": "Program completes with exit code 0 in 9 traced steps.",
			"variables": [{
				"name": "result",
				"value": "24",
				"scope": "global",
				"type": "int",
				"changed": false
			}],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": { "result": 24 }
			}],
			"heap": [
				{
					"id": "fn@0x1a",
					"type": "function",
					"label": "factorial",
					"value": "code object",
					"refs": []
				},
				{
					"id": "int@0x52",
					"type": "int",
					"label": "result",
					"value": "24",
					"refs": ["fn@0x1a"]
				},
				{
					"id": "str@0x7e",
					"type": "str",
					"label": "literal",
					"value": "\"factorial(4) =\"",
					"refs": ["fn@0x1a"]
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "factorial(4) = 24"
			}]
		}
	]
};
var javascript_default = {
	id: "javascript",
	label: "JavaScript",
	monacoLanguage: "javascript",
	fileName: "fib.js",
	entry: "fib(5)",
	code: "function fib(n) {\n  if (n < 2) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n\nconst out = fib(5);\nconsole.log(\"fib(5) =\", out);\n",
	complexity: {
		"time": "O(2^n)",
		"space": "O(n)",
		"maxDepth": 5
	},
	steps: [
		{
			"line": 6,
			"label": "call fib(5)",
			"note": "The module scope invokes fib(5); a new frame is pushed.",
			"variables": [{
				"name": "out",
				"type": "ref",
				"value": "<pending>",
				"scope": "module",
				"changed": true
			}],
			"stack": [{
				"name": "<module>",
				"line": 6,
				"locals": {}
			}],
			"heap": [{
				"id": "fn@0x11",
				"type": "function",
				"label": "fib",
				"value": "closure",
				"refs": []
			}],
			"stdout": []
		},
		{
			"line": 2,
			"label": "guard n < 2",
			"note": "n is 5 — the guard fails and the branch recurses twice.",
			"variables": [{
				"name": "n",
				"type": "number",
				"value": "5",
				"scope": "fib#1",
				"changed": true
			}],
			"stack": [{
				"name": "<module>",
				"line": 6,
				"locals": {}
			}, {
				"name": "fib",
				"line": 2,
				"locals": {}
			}],
			"heap": [{
				"id": "fn@0x11",
				"type": "function",
				"label": "fib",
				"value": "closure",
				"refs": []
			}, {
				"id": "num@0x21",
				"type": "number",
				"label": "n",
				"value": "5",
				"refs": ["fn@0x11"]
			}],
			"stdout": []
		},
		{
			"line": 3,
			"label": "recurse fib(4)",
			"note": "The left branch descends first. Depth grows to 3.",
			"variables": [{
				"name": "n",
				"type": "number",
				"value": "5",
				"scope": "fib#1",
				"changed": false
			}, {
				"name": "n",
				"type": "number",
				"value": "4",
				"scope": "fib#2",
				"changed": true
			}],
			"stack": [
				{
					"name": "<module>",
					"line": 6,
					"locals": {}
				},
				{
					"name": "fib",
					"line": 3,
					"locals": {}
				},
				{
					"name": "fib",
					"line": 2,
					"locals": {}
				}
			],
			"heap": [
				{
					"id": "fn@0x11",
					"type": "function",
					"label": "fib",
					"value": "closure",
					"refs": []
				},
				{
					"id": "num@0x21",
					"type": "number",
					"label": "n",
					"value": "5",
					"refs": ["fn@0x11"]
				},
				{
					"id": "num@0x22",
					"type": "number",
					"label": "n",
					"value": "4",
					"refs": ["num@0x21"]
				}
			],
			"stdout": []
		},
		{
			"line": 2,
			"label": "base case n = 1",
			"note": "The leftmost leaf returns 1 immediately.",
			"variables": [{
				"name": "n",
				"type": "number",
				"value": "1",
				"scope": "fib#5",
				"changed": true
			}, {
				"name": "return",
				"type": "number",
				"value": "1",
				"scope": "fib#5",
				"changed": true
			}],
			"stack": [
				{
					"name": "<module>",
					"line": 6,
					"locals": {}
				},
				{
					"name": "fib",
					"line": 3,
					"locals": {}
				},
				{
					"name": "fib",
					"line": 3,
					"locals": {}
				},
				{
					"name": "fib",
					"line": 3,
					"locals": {}
				},
				{
					"name": "fib",
					"line": 2,
					"locals": {}
				}
			],
			"heap": [
				{
					"id": "fn@0x11",
					"type": "function",
					"label": "fib",
					"value": "closure",
					"refs": []
				},
				{
					"id": "num@0x21",
					"type": "number",
					"label": "n",
					"value": "5",
					"refs": ["fn@0x11"]
				},
				{
					"id": "num@0x22",
					"type": "number",
					"label": "n",
					"value": "4",
					"refs": ["num@0x21"]
				},
				{
					"id": "num@0x25",
					"type": "number",
					"label": "n",
					"value": "1",
					"refs": ["num@0x22"]
				}
			],
			"stdout": []
		},
		{
			"line": 3,
			"label": "fold branches",
			"note": "Sibling calls fold back into their parent frames.",
			"variables": [{
				"name": "return",
				"type": "number",
				"value": "3",
				"scope": "fib#2",
				"changed": true
			}],
			"stack": [{
				"name": "<module>",
				"line": 6,
				"locals": {}
			}, {
				"name": "fib",
				"line": 3,
				"locals": {}
			}],
			"heap": [
				{
					"id": "fn@0x11",
					"type": "function",
					"label": "fib",
					"value": "closure",
					"refs": []
				},
				{
					"id": "num@0x21",
					"type": "number",
					"label": "n",
					"value": "5",
					"refs": ["fn@0x11"]
				},
				{
					"id": "num@0x40",
					"type": "number",
					"label": "acc",
					"value": "3",
					"refs": ["num@0x21"]
				}
			],
			"stdout": []
		},
		{
			"line": 7,
			"label": "log result",
			"note": "fib(5) resolves to 5 and the program prints it.",
			"variables": [{
				"name": "out",
				"type": "number",
				"value": "5",
				"scope": "module",
				"changed": true
			}],
			"stack": [{
				"name": "<module>",
				"line": 7,
				"locals": {}
			}],
			"heap": [
				{
					"id": "fn@0x11",
					"type": "function",
					"label": "fib",
					"value": "closure",
					"refs": []
				},
				{
					"id": "num@0x40",
					"type": "number",
					"label": "out",
					"value": "5",
					"refs": ["fn@0x11"]
				},
				{
					"id": "str@0x55",
					"type": "string",
					"label": "literal",
					"value": "\"fib(5) =\"",
					"refs": []
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "fib(5) = 5"
			}]
		}
	]
};
var cpp_default = {
	id: "cpp",
	label: "C++",
	monacoLanguage: "cpp",
	fileName: "sum.cpp",
	entry: "sum(4)",
	code: "#include <iostream>\n\nint sum(int n) {\n    if (n == 0) return 0;\n    return n + sum(n - 1);\n}\n\nint main() {\n    std::cout << \"sum(4) = \" << sum(4) << std::endl;\n}\n",
	complexity: {
		"time": "O(n)",
		"space": "O(n)",
		"maxDepth": 5
	},
	steps: [
		{
			"line": 9,
			"label": "enter main",
			"note": "main() is the first frame on the stack.",
			"variables": [{
				"name": "argc",
				"type": "int",
				"value": "1",
				"scope": "main",
				"changed": true
			}],
			"stack": [{
				"name": "main",
				"line": 9,
				"locals": {}
			}],
			"heap": [{
				"id": "fn@0x01",
				"type": "function",
				"label": "sum",
				"value": "text segment",
				"refs": []
			}],
			"stdout": []
		},
		{
			"line": 4,
			"label": "call sum(4)",
			"note": "sum(4) pushes a frame with its own copy of n.",
			"variables": [{
				"name": "n",
				"type": "int",
				"value": "4",
				"scope": "sum#1",
				"changed": true
			}],
			"stack": [{
				"name": "main",
				"line": 9,
				"locals": {}
			}, {
				"name": "sum",
				"line": 4,
				"locals": {}
			}],
			"heap": [{
				"id": "fn@0x01",
				"type": "function",
				"label": "sum",
				"value": "text segment",
				"refs": []
			}, {
				"id": "int@0x30",
				"type": "int",
				"label": "n",
				"value": "4",
				"refs": ["fn@0x01"]
			}],
			"stdout": []
		},
		{
			"line": 5,
			"label": "recurse sum(3)",
			"note": "Each recursive call copies n by value onto a fresh frame.",
			"variables": [{
				"name": "n",
				"type": "int",
				"value": "4",
				"scope": "sum#1",
				"changed": false
			}, {
				"name": "n",
				"type": "int",
				"value": "3",
				"scope": "sum#2",
				"changed": true
			}],
			"stack": [
				{
					"name": "main",
					"line": 9,
					"locals": {}
				},
				{
					"name": "sum",
					"line": 5,
					"locals": {}
				},
				{
					"name": "sum",
					"line": 4,
					"locals": {}
				}
			],
			"heap": [
				{
					"id": "fn@0x01",
					"type": "function",
					"label": "sum",
					"value": "text segment",
					"refs": []
				},
				{
					"id": "int@0x30",
					"type": "int",
					"label": "n",
					"value": "4",
					"refs": ["fn@0x01"]
				},
				{
					"id": "int@0x2c",
					"type": "int",
					"label": "n",
					"value": "3",
					"refs": ["int@0x30"]
				}
			],
			"stdout": []
		},
		{
			"line": 4,
			"label": "base case n = 0",
			"note": "The guard finally matches and returns 0.",
			"variables": [{
				"name": "n",
				"type": "int",
				"value": "0",
				"scope": "sum#5",
				"changed": true
			}, {
				"name": "return",
				"type": "int",
				"value": "0",
				"scope": "sum#5",
				"changed": true
			}],
			"stack": [
				{
					"name": "main",
					"line": 9,
					"locals": {}
				},
				{
					"name": "sum",
					"line": 5,
					"locals": {}
				},
				{
					"name": "sum",
					"line": 5,
					"locals": {}
				},
				{
					"name": "sum",
					"line": 5,
					"locals": {}
				},
				{
					"name": "sum",
					"line": 4,
					"locals": {}
				}
			],
			"heap": [
				{
					"id": "fn@0x01",
					"type": "function",
					"label": "sum",
					"value": "text segment",
					"refs": []
				},
				{
					"id": "int@0x30",
					"type": "int",
					"label": "n",
					"value": "4",
					"refs": ["fn@0x01"]
				},
				{
					"id": "int@0x2c",
					"type": "int",
					"label": "n",
					"value": "3",
					"refs": ["int@0x30"]
				},
				{
					"id": "int@0x28",
					"type": "int",
					"label": "n",
					"value": "0",
					"refs": ["int@0x2c"]
				}
			],
			"stdout": []
		},
		{
			"line": 5,
			"label": "unwind to 10",
			"note": "Frames pop in LIFO order, accumulating the sum.",
			"variables": [{
				"name": "return",
				"type": "int",
				"value": "10",
				"scope": "sum#1",
				"changed": true
			}],
			"stack": [{
				"name": "main",
				"line": 9,
				"locals": {}
			}, {
				"name": "sum",
				"line": 5,
				"locals": {}
			}],
			"heap": [
				{
					"id": "fn@0x01",
					"type": "function",
					"label": "sum",
					"value": "text segment",
					"refs": []
				},
				{
					"id": "int@0x30",
					"type": "int",
					"label": "n",
					"value": "4",
					"refs": ["fn@0x01"]
				},
				{
					"id": "int@0x60",
					"type": "int",
					"label": "acc",
					"value": "10",
					"refs": ["int@0x30"]
				}
			],
			"stdout": []
		},
		{
			"line": 9,
			"label": "stream to stdout",
			"note": "std::cout flushes the final value; exit code 0.",
			"variables": [{
				"name": "result",
				"type": "int",
				"value": "10",
				"scope": "main",
				"changed": true
			}],
			"stack": [{
				"name": "main",
				"line": 9,
				"locals": {}
			}],
			"heap": [
				{
					"id": "fn@0x01",
					"type": "function",
					"label": "sum",
					"value": "text segment",
					"refs": []
				},
				{
					"id": "int@0x60",
					"type": "int",
					"label": "result",
					"value": "10",
					"refs": ["fn@0x01"]
				},
				{
					"id": "str@0x70",
					"type": "const char*",
					"label": "literal",
					"value": "\"sum(4) = \"",
					"refs": []
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "sum(4) = 10"
			}, {
				"stream": "stderr",
				"text": "[taltrix] replay finished — no compiler attached"
			}]
		}
	]
};
/** Placeholder traces. Swapping these for an API response is a one-line change. */
var TRACES = {
	python: python_default,
	javascript: javascript_default,
	cpp: cpp_default
};
Object.values(TRACES).map((t) => ({
	id: t.id,
	label: t.label,
	fileName: t.fileName
}));
function getTrace(id) {
	return TRACES[id] ?? TRACES["python"];
}
/** Landing-page surface: the Python demo, exposed with the original names. */
var python = getTrace("python");
var DEMO_CODE = python.code;
var TRACE = python.steps;
var COMPLEXITY = {
	time: python.complexity.time,
	space: python.complexity.space,
	maxDepth: python.complexity.maxDepth,
	steps: python.steps.length
};
//#endregion
export { javascript_default as a, cpp_default as i, DEMO_CODE as n, python_default as o, TRACE as r, COMPLEXITY as t };
