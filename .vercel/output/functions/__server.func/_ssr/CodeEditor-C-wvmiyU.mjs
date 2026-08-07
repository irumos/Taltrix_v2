import { o as __toESM } from "../_runtime.mjs";
import { f as useSettings, l as blip } from "./router-WoLN58Ck.mjs";
import { a as javascript_default, i as cpp_default, n as DEMO_CODE, o as python_default } from "./execution-DcB11N3d.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Bt as ArrowUpRight, Wt as ArrowDownRight, bt as Clock, j as RotateCcw, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CodeEditor-C-wvmiyU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Renders children only after hydration — for browser-only widgets. */
function ClientOnly({ children, fallback = null }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: mounted ? children : fallback });
}
var factorial_default = {
	id: "factorial",
	title: "Recursive Factorial",
	category: "Recursion",
	description: "Classic recursion: each call adds a frame until the base case unwinds.",
	language: "python",
	monacoLanguage: "python",
	fileName: "factorial.py",
	entry: "factorial(4)",
	complexity: {
		"time": "O(n)",
		"space": "O(n)",
		"maxDepth": 5
	},
	code: "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\n\nresult = factorial(4)\nprint(\"factorial(4) =\", result)\n",
	steps: [
		{
			"line": 7,
			"label": "call factorial(4)",
			"note": "The module frame requests factorial(4). Control transfers into a new frame.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": .82,
			"variables": [{
				"name": "result",
				"type": "None",
				"value": "None",
				"scope": "global",
				"changed": true
			}],
			"changed": ["global:result"],
			"highlightedVariables": ["global:result"],
			"highlightedMemory": [],
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
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 54,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 54
			}
		},
		{
			"line": 1,
			"label": "enter factorial(4)",
			"note": "A new frame binds n = 4 and evaluation begins.",
			"status": "running",
			"currentFunction": "factorial(4)",
			"returnValue": null,
			"executionTimeMs": 1.68,
			"variables": [{
				"name": "result",
				"type": "None",
				"value": "None",
				"scope": "global"
			}, {
				"name": "n",
				"type": "int",
				"value": "4",
				"scope": "factorial(4)",
				"changed": true
			}],
			"changed": ["factorial(4):n"],
			"highlightedVariables": ["factorial(4):n"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 7,
				"locals": {}
			}, {
				"name": "factorial(4)",
				"line": 1,
				"locals": { "n": "4" }
			}],
			"heap": [{
				"id": "fn@0x1a",
				"type": "function",
				"label": "factorial",
				"value": "code object",
				"refs": []
			}, {
				"id": "int@0x44",
				"type": "int",
				"label": "n = 4",
				"value": "4",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 88,
				"objects": 2,
				"allocations": 2,
				"peakBytes": 88
			}
		},
		{
			"line": 2,
			"label": "guard n <= 1 is False",
			"note": "4 > 1, so the recursive branch is taken.",
			"status": "running",
			"currentFunction": "factorial(4)",
			"returnValue": null,
			"executionTimeMs": 2.88,
			"variables": [{
				"name": "result",
				"type": "None",
				"value": "None",
				"scope": "global"
			}, {
				"name": "n",
				"type": "int",
				"value": "4",
				"scope": "factorial(4)"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 7,
				"locals": {}
			}, {
				"name": "factorial(4)",
				"line": 2,
				"locals": { "n": "4" }
			}],
			"heap": [{
				"id": "fn@0x1a",
				"type": "function",
				"label": "factorial",
				"value": "code object",
				"refs": []
			}, {
				"id": "int@0x44",
				"type": "int",
				"label": "n = 4",
				"value": "4",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 88,
				"objects": 2,
				"allocations": 2,
				"peakBytes": 88
			}
		},
		{
			"line": 4,
			"label": "recurse factorial(3)",
			"note": "The multiplication waits while factorial(3) is evaluated.",
			"status": "running",
			"currentFunction": "factorial(4)",
			"returnValue": null,
			"executionTimeMs": 4.14,
			"variables": [{
				"name": "result",
				"type": "None",
				"value": "None",
				"scope": "global"
			}, {
				"name": "n",
				"type": "int",
				"value": "4",
				"scope": "factorial(4)"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 7,
				"locals": {}
			}, {
				"name": "factorial(4)",
				"line": 4,
				"locals": { "n": "4" }
			}],
			"heap": [{
				"id": "fn@0x1a",
				"type": "function",
				"label": "factorial",
				"value": "code object",
				"refs": []
			}, {
				"id": "int@0x44",
				"type": "int",
				"label": "n = 4",
				"value": "4",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 88,
				"objects": 2,
				"allocations": 2,
				"peakBytes": 88
			}
		},
		{
			"line": 1,
			"label": "enter factorial(3)",
			"note": "A new frame binds n = 3 and evaluation begins.",
			"status": "running",
			"currentFunction": "factorial(3)",
			"returnValue": null,
			"executionTimeMs": 4.62,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)",
					"changed": true
				}
			],
			"changed": ["factorial(3):n"],
			"highlightedVariables": ["factorial(3):n"],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 1,
					"locals": { "n": "3" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 288,
				"heapBytes": 122,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 122
			}
		},
		{
			"line": 2,
			"label": "guard n <= 1 is False",
			"note": "3 > 1, so the recursive branch is taken.",
			"status": "running",
			"currentFunction": "factorial(3)",
			"returnValue": null,
			"executionTimeMs": 5.56,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 2,
					"locals": { "n": "3" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 288,
				"heapBytes": 122,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 122
			}
		},
		{
			"line": 4,
			"label": "recurse factorial(2)",
			"note": "The multiplication waits while factorial(2) is evaluated.",
			"status": "running",
			"currentFunction": "factorial(3)",
			"returnValue": null,
			"executionTimeMs": 6.13,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 4,
					"locals": { "n": "3" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 288,
				"heapBytes": 122,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 122
			}
		},
		{
			"line": 1,
			"label": "enter factorial(2)",
			"note": "A new frame binds n = 2 and evaluation begins.",
			"status": "running",
			"currentFunction": "factorial(2)",
			"returnValue": null,
			"executionTimeMs": 6.75,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "2",
					"scope": "factorial(2)",
					"changed": true
				}
			],
			"changed": ["factorial(2):n"],
			"highlightedVariables": ["factorial(2):n"],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 4,
					"locals": { "n": "3" }
				},
				{
					"name": "factorial(2)",
					"line": 1,
					"locals": { "n": "2" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				},
				{
					"id": "int@0x42",
					"type": "int",
					"label": "n = 2",
					"value": "2",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 384,
				"heapBytes": 156,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 156
			}
		},
		{
			"line": 2,
			"label": "guard n <= 1 is False",
			"note": "2 > 1, so the recursive branch is taken.",
			"status": "running",
			"currentFunction": "factorial(2)",
			"returnValue": null,
			"executionTimeMs": 7.71,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "2",
					"scope": "factorial(2)"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 4,
					"locals": { "n": "3" }
				},
				{
					"name": "factorial(2)",
					"line": 2,
					"locals": { "n": "2" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				},
				{
					"id": "int@0x42",
					"type": "int",
					"label": "n = 2",
					"value": "2",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 384,
				"heapBytes": 156,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 156
			}
		},
		{
			"line": 4,
			"label": "recurse factorial(1)",
			"note": "The multiplication waits while factorial(1) is evaluated.",
			"status": "running",
			"currentFunction": "factorial(2)",
			"returnValue": null,
			"executionTimeMs": 8.14,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "2",
					"scope": "factorial(2)"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 4,
					"locals": { "n": "3" }
				},
				{
					"name": "factorial(2)",
					"line": 4,
					"locals": { "n": "2" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				},
				{
					"id": "int@0x42",
					"type": "int",
					"label": "n = 2",
					"value": "2",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 384,
				"heapBytes": 156,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 156
			}
		},
		{
			"line": 2,
			"label": "base case reached",
			"note": "n reaches 1 — the guard holds and recursion stops.",
			"status": "running",
			"currentFunction": "factorial(1)",
			"returnValue": null,
			"executionTimeMs": 9.34,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "2",
					"scope": "factorial(2)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "1",
					"scope": "factorial(1)",
					"changed": true
				}
			],
			"changed": ["factorial(1):n"],
			"highlightedVariables": ["factorial(1):n"],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 4,
					"locals": { "n": "3" }
				},
				{
					"name": "factorial(2)",
					"line": 4,
					"locals": { "n": "2" }
				},
				{
					"name": "factorial(1)",
					"line": 2,
					"locals": { "n": "1" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				},
				{
					"id": "int@0x42",
					"type": "int",
					"label": "n = 2",
					"value": "2",
					"refs": []
				},
				{
					"id": "int@0x41",
					"type": "int",
					"label": "n = 1",
					"value": "1",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 480,
				"heapBytes": 190,
				"objects": 5,
				"allocations": 5,
				"peakBytes": 190
			}
		},
		{
			"line": 3,
			"label": "return 1",
			"note": "The deepest frame returns 1 and is popped from the stack.",
			"status": "running",
			"currentFunction": "factorial(1)",
			"returnValue": "1",
			"executionTimeMs": 10.09,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "2",
					"scope": "factorial(2)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "1",
					"scope": "factorial(1)"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 4,
					"locals": { "n": "3" }
				},
				{
					"name": "factorial(2)",
					"line": 4,
					"locals": { "n": "2" }
				},
				{
					"name": "factorial(1)",
					"line": 3,
					"locals": { "n": "1" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				},
				{
					"id": "int@0x42",
					"type": "int",
					"label": "n = 2",
					"value": "2",
					"refs": []
				},
				{
					"id": "int@0x41",
					"type": "int",
					"label": "n = 1",
					"value": "1",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 480,
				"heapBytes": 190,
				"objects": 5,
				"allocations": 5,
				"peakBytes": 190
			}
		},
		{
			"line": 4,
			"label": "unwind → 2",
			"note": "factorial(2) multiplies its pending value and returns 2.",
			"status": "running",
			"currentFunction": "factorial(3)",
			"returnValue": "2",
			"executionTimeMs": 11.2,
			"variables": [
				{
					"name": "result",
					"type": "None",
					"value": "None",
					"scope": "global"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "factorial(4)"
				},
				{
					"name": "n",
					"type": "int",
					"value": "3",
					"scope": "factorial(3)"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 7,
					"locals": {}
				},
				{
					"name": "factorial(4)",
					"line": 4,
					"locals": { "n": "4" }
				},
				{
					"name": "factorial(3)",
					"line": 4,
					"locals": { "n": "3" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				},
				{
					"id": "int@0x42",
					"type": "int",
					"label": "n = 2",
					"value": "2",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 288,
				"heapBytes": 156,
				"objects": 4,
				"allocations": 5,
				"peakBytes": 190
			}
		},
		{
			"line": 4,
			"label": "unwind → 6",
			"note": "factorial(3) multiplies its pending value and returns 6.",
			"status": "running",
			"currentFunction": "factorial(4)",
			"returnValue": "6",
			"executionTimeMs": 12.14,
			"variables": [{
				"name": "result",
				"type": "None",
				"value": "None",
				"scope": "global"
			}, {
				"name": "n",
				"type": "int",
				"value": "4",
				"scope": "factorial(4)"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 7,
				"locals": {}
			}, {
				"name": "factorial(4)",
				"line": 4,
				"locals": { "n": "4" }
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
					"id": "int@0x44",
					"type": "int",
					"label": "n = 4",
					"value": "4",
					"refs": []
				},
				{
					"id": "int@0x43",
					"type": "int",
					"label": "n = 3",
					"value": "3",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 122,
				"objects": 3,
				"allocations": 5,
				"peakBytes": 190
			}
		},
		{
			"line": 4,
			"label": "unwind → 24",
			"note": "factorial(4) multiplies its pending value and returns 24.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": "24",
			"executionTimeMs": 12.97,
			"variables": [{
				"name": "result",
				"type": "None",
				"value": "None",
				"scope": "global"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 4,
				"locals": {}
			}],
			"heap": [{
				"id": "fn@0x1a",
				"type": "function",
				"label": "factorial",
				"value": "code object",
				"refs": []
			}, {
				"id": "int@0x44",
				"type": "int",
				"label": "n = 4",
				"value": "4",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 88,
				"objects": 2,
				"allocations": 5,
				"peakBytes": 190
			}
		},
		{
			"line": 7,
			"label": "bind result",
			"note": "The final value 24 is bound to result in the module scope.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": "24",
			"executionTimeMs": 14.16,
			"variables": [{
				"name": "result",
				"type": "int",
				"value": "24",
				"scope": "global",
				"changed": true
			}],
			"changed": ["global:result"],
			"highlightedVariables": ["global:result"],
			"highlightedMemory": [],
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
				"id": "int@0x7d",
				"type": "int",
				"label": "result",
				"value": "24",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 90,
				"objects": 2,
				"allocations": 6,
				"peakBytes": 190
			}
		},
		{
			"line": 8,
			"label": "print result",
			"note": "Execution completes and the interpreter flushes stdout.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 14.7,
			"variables": [{
				"name": "result",
				"type": "int",
				"value": "24",
				"scope": "global"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}],
			"heap": [{
				"id": "fn@0x1a",
				"type": "function",
				"label": "factorial",
				"value": "code object",
				"refs": []
			}, {
				"id": "int@0x7d",
				"type": "int",
				"label": "result",
				"value": "24",
				"refs": []
			}],
			"stdout": [{
				"stream": "stdout",
				"text": "factorial(4) = 24"
			}],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 90,
				"objects": 2,
				"allocations": 6,
				"peakBytes": 190
			}
		}
	],
	totalTimeMs: 14.7,
	finalStatus: "completed"
};
var bubble_sort_default = {
	id: "bubble-sort",
	title: "Bubble Sort",
	category: "Sorting",
	description: "Adjacent comparisons bubble the largest value to the end on every pass.",
	language: "python",
	monacoLanguage: "python",
	fileName: "bubble_sort.py",
	entry: "bubble_sort([5, 1, 4, 2])",
	complexity: {
		"time": "O(n²)",
		"space": "O(1)",
		"maxDepth": 2
	},
	code: "def bubble_sort(items):\n    n = len(items)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if items[j] > items[j + 1]:\n                items[j], items[j + 1] = items[j + 1], items[j]\n    return items\n\n\ndata = [5, 1, 4, 2]\nprint(bubble_sort(data))\n",
	steps: [
		{
			"line": 10,
			"label": "allocate list",
			"note": "A four element list is allocated on the heap.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": .89,
			"variables": [{
				"name": "data",
				"type": "list",
				"value": "[5, 1, 4, 2]",
				"scope": "global",
				"changed": true
			}],
			"changed": ["global:data"],
			"highlightedVariables": ["global:data"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[5, 1, 4, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 1,
			"label": "call bubble_sort",
			"note": "items is bound to the same heap object — Python passes the reference.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 1.66,
			"variables": [{
				"name": "data",
				"type": "list",
				"value": "[5, 1, 4, 2]",
				"scope": "global"
			}, {
				"name": "items",
				"type": "list",
				"value": "[5, 1, 4, 2]",
				"scope": "bubble_sort",
				"changed": true
			}],
			"changed": ["bubble_sort:items"],
			"highlightedVariables": ["bubble_sort:items"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 1,
				"locals": { "items": "[5, 1, 4, 2]" }
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[5, 1, 4, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 2,
			"label": "read length",
			"note": "len(items) is 4, so the outer pass runs three times.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 2.93,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[5, 1, 4, 2]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[5, 1, 4, 2]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort",
					"changed": true
				}
			],
			"changed": ["bubble_sort:n"],
			"highlightedVariables": ["bubble_sort:n"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 2,
				"locals": {
					"items": "[5, 1, 4, 2]",
					"n": "4"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[5, 1, 4, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 3,
			"label": "pass 1",
			"note": "Pass 1 of 3 begins; the tail 0 element(s) are already sorted.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 3.7,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[5, 1, 4, 2]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[5, 1, 4, 2]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort",
					"changed": true
				}
			],
			"changed": ["bubble_sort:i"],
			"highlightedVariables": ["bubble_sort:i"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 3,
				"locals": {
					"items": "[5, 1, 4, 2]",
					"n": "4",
					"i": "0"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[5, 1, 4, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 5,
			"label": "compare 5 / 1",
			"note": "5 > 1 — the pair is out of order.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 4.56,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[5, 1, 4, 2]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[5, 1, 4, 2]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort",
					"changed": true
				}
			],
			"changed": ["bubble_sort:j"],
			"highlightedVariables": ["bubble_sort:j"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 5,
				"locals": {
					"items": "[5, 1, 4, 2]",
					"n": "4",
					"i": "0",
					"j": "0"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[5, 1, 4, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 6,
			"label": "swap → [1, 5, 4, 2]",
			"note": "The list object is mutated in place, so data sees the change too.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 5.31,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 5, 4, 2]",
					"scope": "global",
					"changed": true
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 5, 4, 2]",
					"scope": "bubble_sort",
					"changed": true
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort"
				}
			],
			"changed": ["global:data", "bubble_sort:items"],
			"highlightedVariables": ["global:data", "bubble_sort:items"],
			"highlightedMemory": ["list@0x2c"],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 6,
				"locals": {
					"items": "[1, 5, 4, 2]",
					"n": "4",
					"i": "0",
					"j": "0"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 5, 4, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 5,
			"label": "compare 5 / 4",
			"note": "5 > 4 — the pair is out of order.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 6.21,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 5, 4, 2]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 5, 4, 2]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort",
					"changed": true
				}
			],
			"changed": ["bubble_sort:j"],
			"highlightedVariables": ["bubble_sort:j"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 5,
				"locals": {
					"items": "[1, 5, 4, 2]",
					"n": "4",
					"i": "0",
					"j": "1"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 5, 4, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 6,
			"label": "swap → [1, 4, 5, 2]",
			"note": "The list object is mutated in place, so data sees the change too.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 6.63,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 4, 5, 2]",
					"scope": "global",
					"changed": true
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 4, 5, 2]",
					"scope": "bubble_sort",
					"changed": true
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort"
				}
			],
			"changed": ["global:data", "bubble_sort:items"],
			"highlightedVariables": ["global:data", "bubble_sort:items"],
			"highlightedMemory": ["list@0x2c"],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 6,
				"locals": {
					"items": "[1, 4, 5, 2]",
					"n": "4",
					"i": "0",
					"j": "1"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 4, 5, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 5,
			"label": "compare 5 / 2",
			"note": "5 > 2 — the pair is out of order.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 7.71,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 4, 5, 2]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 4, 5, 2]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "2",
					"scope": "bubble_sort",
					"changed": true
				}
			],
			"changed": ["bubble_sort:j"],
			"highlightedVariables": ["bubble_sort:j"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 5,
				"locals": {
					"items": "[1, 4, 5, 2]",
					"n": "4",
					"i": "0",
					"j": "2"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 4, 5, 2]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 6,
			"label": "swap → [1, 4, 2, 5]",
			"note": "The list object is mutated in place, so data sees the change too.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 8.89,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 4, 2, 5]",
					"scope": "global",
					"changed": true
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 4, 2, 5]",
					"scope": "bubble_sort",
					"changed": true
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "2",
					"scope": "bubble_sort"
				}
			],
			"changed": ["global:data", "bubble_sort:items"],
			"highlightedVariables": ["global:data", "bubble_sort:items"],
			"highlightedMemory": ["list@0x2c"],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 6,
				"locals": {
					"items": "[1, 4, 2, 5]",
					"n": "4",
					"i": "0",
					"j": "2"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 4, 2, 5]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 3,
			"label": "pass 2",
			"note": "Pass 2 of 3 begins; the tail 1 element(s) are already sorted.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 9.42,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 4, 2, 5]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 4, 2, 5]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort",
					"changed": true
				},
				{
					"name": "j",
					"type": "int",
					"value": "2",
					"scope": "bubble_sort"
				}
			],
			"changed": ["bubble_sort:i"],
			"highlightedVariables": ["bubble_sort:i"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 3,
				"locals": {
					"items": "[1, 4, 2, 5]",
					"n": "4",
					"i": "1",
					"j": "2"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 4, 2, 5]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 5,
			"label": "compare 1 / 4",
			"note": "1 ≤ 4 — the pair already holds.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 10.66,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 4, 2, 5]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 4, 2, 5]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort",
					"changed": true
				}
			],
			"changed": ["bubble_sort:j"],
			"highlightedVariables": ["bubble_sort:j"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 5,
				"locals": {
					"items": "[1, 4, 2, 5]",
					"n": "4",
					"i": "1",
					"j": "0"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 4, 2, 5]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 5,
			"label": "compare 4 / 2",
			"note": "4 > 2 — the pair is out of order.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 11.26,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 4, 2, 5]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 4, 2, 5]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort",
					"changed": true
				}
			],
			"changed": ["bubble_sort:j"],
			"highlightedVariables": ["bubble_sort:j"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 5,
				"locals": {
					"items": "[1, 4, 2, 5]",
					"n": "4",
					"i": "1",
					"j": "1"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 4, 2, 5]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 6,
			"label": "swap → [1, 2, 4, 5]",
			"note": "The list object is mutated in place, so data sees the change too.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 11.72,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 2, 4, 5]",
					"scope": "global",
					"changed": true
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 2, 4, 5]",
					"scope": "bubble_sort",
					"changed": true
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort"
				}
			],
			"changed": ["global:data", "bubble_sort:items"],
			"highlightedVariables": ["global:data", "bubble_sort:items"],
			"highlightedMemory": ["list@0x2c"],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 6,
				"locals": {
					"items": "[1, 2, 4, 5]",
					"n": "4",
					"i": "1",
					"j": "1"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 2, 4, 5]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 3,
			"label": "pass 3",
			"note": "Pass 3 of 3 begins; the tail 2 element(s) are already sorted.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 12.67,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 2, 4, 5]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 2, 4, 5]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "2",
					"scope": "bubble_sort",
					"changed": true
				},
				{
					"name": "j",
					"type": "int",
					"value": "1",
					"scope": "bubble_sort"
				}
			],
			"changed": ["bubble_sort:i"],
			"highlightedVariables": ["bubble_sort:i"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 3,
				"locals": {
					"items": "[1, 2, 4, 5]",
					"n": "4",
					"i": "2",
					"j": "1"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 2, 4, 5]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 5,
			"label": "compare 1 / 2",
			"note": "1 ≤ 2 — the pair already holds.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": null,
			"executionTimeMs": 13.11,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 2, 4, 5]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 2, 4, 5]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "2",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort",
					"changed": true
				}
			],
			"changed": ["bubble_sort:j"],
			"highlightedVariables": ["bubble_sort:j"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 5,
				"locals": {
					"items": "[1, 2, 4, 5]",
					"n": "4",
					"i": "2",
					"j": "0"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 2, 4, 5]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 7,
			"label": "return sorted list",
			"note": "Sorting finished after 4 swaps.",
			"status": "running",
			"currentFunction": "bubble_sort",
			"returnValue": "[1, 2, 4, 5]",
			"executionTimeMs": 13.7,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[1, 2, 4, 5]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[1, 2, 4, 5]",
					"scope": "bubble_sort"
				},
				{
					"name": "n",
					"type": "int",
					"value": "4",
					"scope": "bubble_sort"
				},
				{
					"name": "i",
					"type": "int",
					"value": "2",
					"scope": "bubble_sort"
				},
				{
					"name": "j",
					"type": "int",
					"value": "0",
					"scope": "bubble_sort"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 10,
				"locals": {}
			}, {
				"name": "bubble_sort",
				"line": 7,
				"locals": {
					"items": "[1, 2, 4, 5]",
					"n": "4",
					"i": "2",
					"j": "0"
				}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 2, 4, 5]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 11,
			"label": "print result",
			"note": "The sorted list is written to stdout.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 14.46,
			"variables": [{
				"name": "data",
				"type": "list",
				"value": "[1, 2, 4, 5]",
				"scope": "global"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 11,
				"locals": {}
			}],
			"heap": [{
				"id": "list@0x2c",
				"type": "list",
				"label": "data",
				"value": "[1, 2, 4, 5]",
				"refs": []
			}],
			"stdout": [{
				"stream": "stdout",
				"text": "[1, 2, 4, 5]"
			}],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		}
	],
	totalTimeMs: 14.46,
	finalStatus: "completed"
};
var binary_search_default = {
	id: "binary-search",
	title: "Binary Search",
	category: "Searching",
	description: "Halve the search window until the target is isolated.",
	language: "python",
	monacoLanguage: "python",
	fileName: "binary_search.py",
	entry: "binary_search(data, 23)",
	complexity: {
		"time": "O(log n)",
		"space": "O(1)",
		"maxDepth": 2
	},
	code: "def binary_search(items, target):\n    low, high = 0, len(items) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if items[mid] == target:\n            return mid\n        if items[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\n\ndata = [2, 5, 8, 12, 16, 23, 38, 56]\nprint(binary_search(data, 23))\n",
	steps: [
		{
			"line": 14,
			"label": "allocate list",
			"note": "A sorted list of eight integers is allocated.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": .97,
			"variables": [{
				"name": "data",
				"type": "list",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"scope": "global",
				"changed": true
			}],
			"changed": ["global:data"],
			"highlightedVariables": ["global:data"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 14,
				"locals": {}
			}],
			"heap": [{
				"id": "list@0x3f",
				"type": "list",
				"label": "data",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 90,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 90
			}
		},
		{
			"line": 1,
			"label": "call binary_search",
			"note": "The frame binds the list reference and the target value.",
			"status": "running",
			"currentFunction": "binary_search",
			"returnValue": null,
			"executionTimeMs": 1.41,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "binary_search",
					"changed": true
				},
				{
					"name": "target",
					"type": "int",
					"value": "23",
					"scope": "binary_search",
					"changed": true
				}
			],
			"changed": ["binary_search:items", "binary_search:target"],
			"highlightedVariables": ["binary_search:items", "binary_search:target"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 14,
				"locals": {}
			}, {
				"name": "binary_search",
				"line": 1,
				"locals": {
					"items": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"target": "23"
				}
			}],
			"heap": [{
				"id": "list@0x3f",
				"type": "list",
				"label": "data",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 90,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 90
			}
		},
		{
			"line": 2,
			"label": "init window",
			"note": "The search window covers the whole list.",
			"status": "running",
			"currentFunction": "binary_search",
			"returnValue": null,
			"executionTimeMs": 2.53,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "binary_search"
				},
				{
					"name": "target",
					"type": "int",
					"value": "23",
					"scope": "binary_search"
				},
				{
					"name": "low",
					"type": "int",
					"value": "0",
					"scope": "binary_search",
					"changed": true
				},
				{
					"name": "high",
					"type": "int",
					"value": "7",
					"scope": "binary_search",
					"changed": true
				}
			],
			"changed": ["binary_search:low", "binary_search:high"],
			"highlightedVariables": ["binary_search:low", "binary_search:high"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 14,
				"locals": {}
			}, {
				"name": "binary_search",
				"line": 2,
				"locals": {
					"items": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"target": "23",
					"low": "0",
					"high": "7"
				}
			}],
			"heap": [{
				"id": "list@0x3f",
				"type": "list",
				"label": "data",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 90,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 90
			}
		},
		{
			"line": 4,
			"label": "probe index 3",
			"note": "The midpoint of [0, 7] is 3 → value 12.",
			"status": "running",
			"currentFunction": "binary_search",
			"returnValue": null,
			"executionTimeMs": 3.4,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "binary_search"
				},
				{
					"name": "target",
					"type": "int",
					"value": "23",
					"scope": "binary_search"
				},
				{
					"name": "low",
					"type": "int",
					"value": "0",
					"scope": "binary_search"
				},
				{
					"name": "high",
					"type": "int",
					"value": "7",
					"scope": "binary_search"
				},
				{
					"name": "mid",
					"type": "int",
					"value": "3",
					"scope": "binary_search",
					"changed": true
				}
			],
			"changed": ["binary_search:mid"],
			"highlightedVariables": ["binary_search:mid"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 14,
				"locals": {}
			}, {
				"name": "binary_search",
				"line": 4,
				"locals": {
					"items": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"target": "23",
					"low": "0",
					"high": "7",
					"mid": "3"
				}
			}],
			"heap": [{
				"id": "list@0x3f",
				"type": "list",
				"label": "data",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 90,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 90
			}
		},
		{
			"line": 8,
			"label": "search right half",
			"note": "12 < 23 — discard the lower half.",
			"status": "running",
			"currentFunction": "binary_search",
			"returnValue": null,
			"executionTimeMs": 3.91,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "binary_search"
				},
				{
					"name": "target",
					"type": "int",
					"value": "23",
					"scope": "binary_search"
				},
				{
					"name": "low",
					"type": "int",
					"value": "4",
					"scope": "binary_search",
					"changed": true
				},
				{
					"name": "high",
					"type": "int",
					"value": "7",
					"scope": "binary_search"
				},
				{
					"name": "mid",
					"type": "int",
					"value": "3",
					"scope": "binary_search"
				}
			],
			"changed": ["binary_search:low"],
			"highlightedVariables": ["binary_search:low"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 14,
				"locals": {}
			}, {
				"name": "binary_search",
				"line": 8,
				"locals": {
					"items": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"target": "23",
					"low": "4",
					"high": "7",
					"mid": "3"
				}
			}],
			"heap": [{
				"id": "list@0x3f",
				"type": "list",
				"label": "data",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 90,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 90
			}
		},
		{
			"line": 4,
			"label": "probe index 5",
			"note": "The midpoint of [4, 7] is 5 → value 23.",
			"status": "running",
			"currentFunction": "binary_search",
			"returnValue": null,
			"executionTimeMs": 4.8,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "binary_search"
				},
				{
					"name": "target",
					"type": "int",
					"value": "23",
					"scope": "binary_search"
				},
				{
					"name": "low",
					"type": "int",
					"value": "4",
					"scope": "binary_search"
				},
				{
					"name": "high",
					"type": "int",
					"value": "7",
					"scope": "binary_search"
				},
				{
					"name": "mid",
					"type": "int",
					"value": "5",
					"scope": "binary_search",
					"changed": true
				}
			],
			"changed": ["binary_search:mid"],
			"highlightedVariables": ["binary_search:mid"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 14,
				"locals": {}
			}, {
				"name": "binary_search",
				"line": 4,
				"locals": {
					"items": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"target": "23",
					"low": "4",
					"high": "7",
					"mid": "5"
				}
			}],
			"heap": [{
				"id": "list@0x3f",
				"type": "list",
				"label": "data",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 90,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 90
			}
		},
		{
			"line": 6,
			"label": "match at 5",
			"note": "items[5] equals the target, so the index is returned.",
			"status": "running",
			"currentFunction": "binary_search",
			"returnValue": "5",
			"executionTimeMs": 5.73,
			"variables": [
				{
					"name": "data",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "global"
				},
				{
					"name": "items",
					"type": "list",
					"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"scope": "binary_search"
				},
				{
					"name": "target",
					"type": "int",
					"value": "23",
					"scope": "binary_search"
				},
				{
					"name": "low",
					"type": "int",
					"value": "4",
					"scope": "binary_search"
				},
				{
					"name": "high",
					"type": "int",
					"value": "7",
					"scope": "binary_search"
				},
				{
					"name": "mid",
					"type": "int",
					"value": "5",
					"scope": "binary_search"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 14,
				"locals": {}
			}, {
				"name": "binary_search",
				"line": 6,
				"locals": {
					"items": "[2, 5, 8, 12, 16, 23, 38, 56]",
					"target": "23",
					"low": "4",
					"high": "7",
					"mid": "5"
				}
			}],
			"heap": [{
				"id": "list@0x3f",
				"type": "list",
				"label": "data",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 90,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 90
			}
		},
		{
			"line": 15,
			"label": "print index",
			"note": "Four probes were enough for eight elements.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 6.23,
			"variables": [{
				"name": "data",
				"type": "list",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"scope": "global"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 15,
				"locals": {}
			}],
			"heap": [{
				"id": "list@0x3f",
				"type": "list",
				"label": "data",
				"value": "[2, 5, 8, 12, 16, 23, 38, 56]",
				"refs": []
			}],
			"stdout": [{
				"stream": "stdout",
				"text": "5"
			}],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 90,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 90
			}
		}
	],
	totalTimeMs: 6.23,
	finalStatus: "completed"
};
var dfs_default = {
	id: "dfs",
	title: "Depth First Search",
	category: "Graphs",
	description: "An explicit stack drives the traversal deep before it goes wide.",
	language: "python",
	monacoLanguage: "python",
	fileName: "dfs.py",
	entry: "dfs(graph, 'A')",
	complexity: {
		"time": "O(V + E)",
		"space": "O(V)",
		"maxDepth": 2
	},
	code: "graph = {\n    \"A\": [\"B\", \"C\"],\n    \"B\": [\"D\"],\n    \"C\": [\"D\"],\n    \"D\": [],\n}\n\n\ndef dfs(graph, start):\n    seen, stack, order = set(), [start], []\n    while stack:\n        node = stack.pop()\n        if node in seen:\n            continue\n        seen.add(node)\n        order.append(node)\n        for nxt in reversed(graph[node]):\n            stack.append(nxt)\n    return order\n\n\nprint(dfs(graph, \"A\"))\n",
	steps: [
		{
			"line": 1,
			"label": "allocate graph",
			"note": "The adjacency map and its four edge lists are allocated.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 1.28,
			"variables": [{
				"name": "graph",
				"type": "dict",
				"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
				"scope": "global",
				"changed": true
			}],
			"changed": ["global:graph"],
			"highlightedVariables": ["global:graph"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 216,
				"objects": 5,
				"allocations": 5,
				"peakBytes": 216
			}
		},
		{
			"line": 9,
			"label": "call dfs",
			"note": "The traversal frame receives the graph reference and the start node.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 1.75,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs",
					"changed": true
				}
			],
			"changed": ["dfs:graph", "dfs:start"],
			"highlightedVariables": ["dfs:graph", "dfs:start"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 9,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 216,
				"objects": 5,
				"allocations": 5,
				"peakBytes": 216
			}
		},
		{
			"line": 10,
			"label": "init frontier",
			"note": "The frontier starts with a single node.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 2.31,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['A']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "[]",
					"scope": "dfs",
					"changed": true
				}
			],
			"changed": [
				"dfs:seen",
				"dfs:stack",
				"dfs:order"
			],
			"highlightedVariables": [
				"dfs:seen",
				"dfs:stack",
				"dfs:order"
			],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 10,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "['A']",
					"order": "[]"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "set()",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "['A']",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "[]",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 336,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 336
			}
		},
		{
			"line": 12,
			"label": "pop A",
			"note": "A leaves the frontier and becomes the active node.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 3.01,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "[]",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'A'",
					"scope": "dfs",
					"changed": true
				}
			],
			"changed": ["dfs:stack", "dfs:node"],
			"highlightedVariables": ["dfs:stack", "dfs:node"],
			"highlightedMemory": ["list@0x22"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 12,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "[]",
					"order": "[]",
					"node": "'A'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "set()",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "[]",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "[]",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 330,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 336
			}
		},
		{
			"line": 16,
			"label": "visit A",
			"note": "A is recorded; the visit order is now ['A'].",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 3.7,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "dfs"
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "node",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				}
			],
			"changed": ["dfs:order"],
			"highlightedVariables": ["dfs:order"],
			"highlightedMemory": ["set@0x21", "list@0x23"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 16,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "[]",
					"order": "['A']",
					"node": "'A'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "[]",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 336,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 336
			}
		},
		{
			"line": 18,
			"label": "queue C, B",
			"note": "Neighbours of A are pushed for later exploration.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 4.33,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['C', 'B']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				}
			],
			"changed": ["dfs:stack"],
			"highlightedVariables": ["dfs:stack"],
			"highlightedMemory": ["list@0x22"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 18,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "['C', 'B']",
					"order": "['A']",
					"node": "'A'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "['C', 'B']",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 352,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 352
			}
		},
		{
			"line": 12,
			"label": "pop B",
			"note": "B leaves the frontier and becomes the active node.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 5.53,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['C']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'B'",
					"scope": "dfs",
					"changed": true
				}
			],
			"changed": ["dfs:stack", "dfs:node"],
			"highlightedVariables": ["dfs:stack", "dfs:node"],
			"highlightedMemory": ["list@0x22"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 12,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "['C']",
					"order": "['A']",
					"node": "'B'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "['C']",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 342,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 352
			}
		},
		{
			"line": 16,
			"label": "visit B",
			"note": "B is recorded; the visit order is now ['A', 'B'].",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 6.11,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['C']",
					"scope": "dfs"
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "node",
					"type": "str",
					"value": "'B'",
					"scope": "dfs"
				}
			],
			"changed": ["dfs:order"],
			"highlightedVariables": ["dfs:order"],
			"highlightedMemory": ["set@0x21", "list@0x23"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 16,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "['C']",
					"order": "['A', 'B']",
					"node": "'B'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "['C']",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 362,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 362
			}
		},
		{
			"line": 18,
			"label": "queue D",
			"note": "Neighbours of B are pushed for later exploration.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 7,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['C', 'D']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'B'",
					"scope": "dfs"
				}
			],
			"changed": ["dfs:stack"],
			"highlightedVariables": ["dfs:stack"],
			"highlightedMemory": ["list@0x22"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 18,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "['C', 'D']",
					"order": "['A', 'B']",
					"node": "'B'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "['C', 'D']",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 372,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 372
			}
		},
		{
			"line": 12,
			"label": "pop D",
			"note": "D leaves the frontier and becomes the active node.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 8.04,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['C']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'D'",
					"scope": "dfs",
					"changed": true
				}
			],
			"changed": ["dfs:stack", "dfs:node"],
			"highlightedVariables": ["dfs:stack", "dfs:node"],
			"highlightedMemory": ["list@0x22"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 12,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "['C']",
					"order": "['A', 'B']",
					"node": "'D'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "['C']",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 362,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 372
			}
		},
		{
			"line": 16,
			"label": "visit D",
			"note": "D is recorded; the visit order is now ['A', 'B', 'D'].",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 9.05,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['C']",
					"scope": "dfs"
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'D']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "node",
					"type": "str",
					"value": "'D'",
					"scope": "dfs"
				}
			],
			"changed": ["dfs:order"],
			"highlightedVariables": ["dfs:order"],
			"highlightedMemory": ["set@0x21", "list@0x23"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 16,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "['C']",
					"order": "['A', 'B', 'D']",
					"node": "'D'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'D'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "['C']",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'D']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 382,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 382
			}
		},
		{
			"line": 12,
			"label": "pop C",
			"note": "C leaves the frontier and becomes the active node.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 9.97,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'D']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'C'",
					"scope": "dfs",
					"changed": true
				}
			],
			"changed": ["dfs:stack", "dfs:node"],
			"highlightedVariables": ["dfs:stack", "dfs:node"],
			"highlightedMemory": ["list@0x22"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 12,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "[]",
					"order": "['A', 'B', 'D']",
					"node": "'C'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'D'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "[]",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'D']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 376,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 382
			}
		},
		{
			"line": 16,
			"label": "visit C",
			"note": "C is recorded; the visit order is now ['A', 'B', 'D', 'C'].",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 10.64,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "dfs"
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'D', 'C']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "node",
					"type": "str",
					"value": "'C'",
					"scope": "dfs"
				}
			],
			"changed": ["dfs:order"],
			"highlightedVariables": ["dfs:order"],
			"highlightedMemory": ["set@0x21", "list@0x23"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 16,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "[]",
					"order": "['A', 'B', 'D', 'C']",
					"node": "'C'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'D', 'C'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "[]",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'D', 'C']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 396,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 396
			}
		},
		{
			"line": 18,
			"label": "queue D",
			"note": "Neighbours of C are pushed for later exploration.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 11.1,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['D']",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'D', 'C']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'C'",
					"scope": "dfs"
				}
			],
			"changed": ["dfs:stack"],
			"highlightedVariables": ["dfs:stack"],
			"highlightedMemory": ["list@0x22"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 18,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "['D']",
					"order": "['A', 'B', 'D', 'C']",
					"node": "'C'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'D', 'C'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'D', 'C']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 402,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 402
			}
		},
		{
			"line": 12,
			"label": "pop D",
			"note": "D leaves the frontier and becomes the active node.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 12.4,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "dfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'D', 'C']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'D'",
					"scope": "dfs",
					"changed": true
				}
			],
			"changed": ["dfs:stack", "dfs:node"],
			"highlightedVariables": ["dfs:stack", "dfs:node"],
			"highlightedMemory": ["list@0x22"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 12,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "[]",
					"order": "['A', 'B', 'D', 'C']",
					"node": "'D'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'D', 'C'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "[]",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'D', 'C']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 396,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 402
			}
		},
		{
			"line": 14,
			"label": "skip D",
			"note": "D was already visited — the branch is pruned.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": null,
			"executionTimeMs": 13.21,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "dfs"
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'D', 'C']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'D'",
					"scope": "dfs"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 14,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "[]",
					"order": "['A', 'B', 'D', 'C']",
					"node": "'D'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'D', 'C'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "[]",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'D', 'C']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 396,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 402
			}
		},
		{
			"line": 19,
			"label": "return order",
			"note": "Every reachable node has been visited.",
			"status": "running",
			"currentFunction": "dfs",
			"returnValue": "['A', 'B', 'D', 'C']",
			"executionTimeMs": 13.98,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "graph",
					"type": "str",
					"value": "'<dict>'",
					"scope": "dfs"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "dfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "dfs"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "dfs"
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'D', 'C']",
					"scope": "dfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'D'",
					"scope": "dfs"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "dfs",
				"line": 19,
				"locals": {
					"graph": "'<dict>'",
					"start": "'A'",
					"seen": "{}",
					"stack": "[]",
					"order": "['A', 'B', 'D', 'C']",
					"node": "'D'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'D', 'C'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "[]",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'D', 'C']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 396,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 402
			}
		},
		{
			"line": 22,
			"label": "print order",
			"note": "Depth first order is written to stdout.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 15.06,
			"variables": [{
				"name": "graph",
				"type": "dict",
				"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
				"scope": "global"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 22,
				"locals": {}
			}],
			"heap": [
				{
					"id": "dict@0x11",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "node@A",
					"type": "list",
					"label": "graph['A']",
					"value": "['B', 'C']",
					"refs": []
				},
				{
					"id": "node@B",
					"type": "list",
					"label": "graph['B']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@C",
					"type": "list",
					"label": "graph['C']",
					"value": "['D']",
					"refs": []
				},
				{
					"id": "node@D",
					"type": "list",
					"label": "graph['D']",
					"value": "[]",
					"refs": []
				},
				{
					"id": "set@0x21",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'D', 'C'}",
					"refs": []
				},
				{
					"id": "list@0x22",
					"type": "list",
					"label": "stack",
					"value": "[]",
					"refs": []
				},
				{
					"id": "list@0x23",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'D', 'C']",
					"refs": []
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "['A', 'B', 'D', 'C']"
			}],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 396,
				"objects": 8,
				"allocations": 8,
				"peakBytes": 402
			}
		}
	],
	totalTimeMs: 15.06,
	finalStatus: "completed"
};
var bfs_default = {
	id: "bfs",
	title: "Breadth First Search",
	category: "Graphs",
	description: "A FIFO queue expands the graph level by level.",
	language: "python",
	monacoLanguage: "python",
	fileName: "bfs.py",
	entry: "bfs(graph, 'A')",
	complexity: {
		"time": "O(V + E)",
		"space": "O(V)",
		"maxDepth": 2
	},
	code: "from collections import deque\n\ngraph = {\"A\": [\"B\", \"C\"], \"B\": [\"D\"], \"C\": [\"D\"], \"D\": []}\n\n\ndef bfs(graph, start):\n    seen = {start}\n    queue = deque([start])\n    order = []\n    while queue:\n        node = queue.popleft()\n        order.append(node)\n        for nxt in graph[node]:\n            if nxt not in seen:\n                seen.add(nxt)\n                queue.append(nxt)\n    return order\n\n\nprint(bfs(graph, \"A\"))\n",
	steps: [
		{
			"line": 3,
			"label": "allocate graph",
			"note": "The adjacency map is allocated once and shared by every frame.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": .7,
			"variables": [{
				"name": "graph",
				"type": "dict",
				"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
				"scope": "global",
				"changed": true
			}],
			"changed": ["global:graph"],
			"highlightedVariables": ["global:graph"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}],
			"heap": [{
				"id": "dict@0x31",
				"type": "dict",
				"label": "graph",
				"value": "4 keys",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 44,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 44
			}
		},
		{
			"line": 6,
			"label": "call bfs",
			"note": "The traversal frame is pushed onto the call stack.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": null,
			"executionTimeMs": 1.65,
			"variables": [{
				"name": "graph",
				"type": "dict",
				"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
				"scope": "global"
			}, {
				"name": "start",
				"type": "str",
				"value": "'A'",
				"scope": "bfs",
				"changed": true
			}],
			"changed": ["bfs:start"],
			"highlightedVariables": ["bfs:start"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 6,
				"locals": { "start": "'A'" }
			}],
			"heap": [{
				"id": "dict@0x31",
				"type": "dict",
				"label": "graph",
				"value": "4 keys",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 44,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 44
			}
		},
		{
			"line": 8,
			"label": "seed queue",
			"note": "The queue is seeded with the start node.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": null,
			"executionTimeMs": 2.2,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "queue",
					"type": "list",
					"value": "['A']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "[]",
					"scope": "bfs",
					"changed": true
				}
			],
			"changed": [
				"bfs:seen",
				"bfs:queue",
				"bfs:order"
			],
			"highlightedVariables": [
				"bfs:seen",
				"bfs:queue",
				"bfs:order"
			],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 8,
				"locals": {
					"start": "'A'",
					"seen": "{}",
					"queue": "['A']",
					"order": "[]"
				}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque(['A'])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "[]",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 178,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 178
			}
		},
		{
			"line": 11,
			"label": "dequeue A",
			"note": "A is removed from the front of the queue and visited.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": null,
			"executionTimeMs": 2.64,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "bfs"
				},
				{
					"name": "queue",
					"type": "list",
					"value": "[]",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "node",
					"type": "str",
					"value": "'A'",
					"scope": "bfs",
					"changed": true
				}
			],
			"changed": [
				"bfs:queue",
				"bfs:order",
				"bfs:node"
			],
			"highlightedVariables": [
				"bfs:queue",
				"bfs:order",
				"bfs:node"
			],
			"highlightedMemory": ["deque@0x33", "list@0x34"],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 11,
				"locals": {
					"start": "'A'",
					"seen": "{}",
					"queue": "[]",
					"order": "['A']",
					"node": "'A'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque([])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "['A']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 178,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 178
			}
		},
		{
			"line": 16,
			"label": "enqueue B, C",
			"note": "Unseen neighbours of A join the back of the queue.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": null,
			"executionTimeMs": 3.55,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "bfs"
				},
				{
					"name": "queue",
					"type": "list",
					"value": "['B', 'C']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A']",
					"scope": "bfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				}
			],
			"changed": ["bfs:queue"],
			"highlightedVariables": ["bfs:queue"],
			"highlightedMemory": ["set@0x32", "deque@0x33"],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 16,
				"locals": {
					"start": "'A'",
					"seen": "{}",
					"queue": "['B', 'C']",
					"order": "['A']",
					"node": "'A'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'C'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque(['B', 'C'])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "['A']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 214,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 214
			}
		},
		{
			"line": 11,
			"label": "dequeue B",
			"note": "B is removed from the front of the queue and visited.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": null,
			"executionTimeMs": 3.98,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "bfs"
				},
				{
					"name": "queue",
					"type": "list",
					"value": "['C']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "node",
					"type": "str",
					"value": "'B'",
					"scope": "bfs",
					"changed": true
				}
			],
			"changed": [
				"bfs:queue",
				"bfs:order",
				"bfs:node"
			],
			"highlightedVariables": [
				"bfs:queue",
				"bfs:order",
				"bfs:node"
			],
			"highlightedMemory": ["deque@0x33", "list@0x34"],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 11,
				"locals": {
					"start": "'A'",
					"seen": "{}",
					"queue": "['C']",
					"order": "['A', 'B']",
					"node": "'B'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'C'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque(['C'])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "['A', 'B']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 214,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 214
			}
		},
		{
			"line": 16,
			"label": "enqueue D",
			"note": "Unseen neighbours of B join the back of the queue.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": null,
			"executionTimeMs": 4.69,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "bfs"
				},
				{
					"name": "queue",
					"type": "list",
					"value": "['C', 'D']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B']",
					"scope": "bfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'B'",
					"scope": "bfs"
				}
			],
			"changed": ["bfs:queue"],
			"highlightedVariables": ["bfs:queue"],
			"highlightedMemory": ["set@0x32", "deque@0x33"],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 16,
				"locals": {
					"start": "'A'",
					"seen": "{}",
					"queue": "['C', 'D']",
					"order": "['A', 'B']",
					"node": "'B'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'C', 'D'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque(['C', 'D'])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "['A', 'B']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 234,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 234
			}
		},
		{
			"line": 11,
			"label": "dequeue C",
			"note": "C is removed from the front of the queue and visited.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": null,
			"executionTimeMs": 5.2,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "bfs"
				},
				{
					"name": "queue",
					"type": "list",
					"value": "['D']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'C']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "node",
					"type": "str",
					"value": "'C'",
					"scope": "bfs",
					"changed": true
				}
			],
			"changed": [
				"bfs:queue",
				"bfs:order",
				"bfs:node"
			],
			"highlightedVariables": [
				"bfs:queue",
				"bfs:order",
				"bfs:node"
			],
			"highlightedMemory": ["deque@0x33", "list@0x34"],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 11,
				"locals": {
					"start": "'A'",
					"seen": "{}",
					"queue": "['D']",
					"order": "['A', 'B', 'C']",
					"node": "'C'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'C', 'D'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque(['D'])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'C']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 234,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 234
			}
		},
		{
			"line": 11,
			"label": "dequeue D",
			"note": "D is removed from the front of the queue and visited.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": null,
			"executionTimeMs": 5.75,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "bfs"
				},
				{
					"name": "queue",
					"type": "list",
					"value": "[]",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'C', 'D']",
					"scope": "bfs",
					"changed": true
				},
				{
					"name": "node",
					"type": "str",
					"value": "'D'",
					"scope": "bfs",
					"changed": true
				}
			],
			"changed": [
				"bfs:queue",
				"bfs:order",
				"bfs:node"
			],
			"highlightedVariables": [
				"bfs:queue",
				"bfs:order",
				"bfs:node"
			],
			"highlightedMemory": ["deque@0x33", "list@0x34"],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 11,
				"locals": {
					"start": "'A'",
					"seen": "{}",
					"queue": "[]",
					"order": "['A', 'B', 'C', 'D']",
					"node": "'D'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'C', 'D'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque([])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'C', 'D']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		},
		{
			"line": 17,
			"label": "return order",
			"note": "The queue is empty, so every level has been expanded.",
			"status": "running",
			"currentFunction": "bfs",
			"returnValue": "['A', 'B', 'C', 'D']",
			"executionTimeMs": 6.29,
			"variables": [
				{
					"name": "graph",
					"type": "dict",
					"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
					"scope": "global"
				},
				{
					"name": "start",
					"type": "str",
					"value": "'A'",
					"scope": "bfs"
				},
				{
					"name": "seen",
					"type": "set",
					"value": "{}",
					"scope": "bfs"
				},
				{
					"name": "queue",
					"type": "list",
					"value": "[]",
					"scope": "bfs"
				},
				{
					"name": "order",
					"type": "list",
					"value": "['A', 'B', 'C', 'D']",
					"scope": "bfs"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'D'",
					"scope": "bfs"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 3,
				"locals": {}
			}, {
				"name": "bfs",
				"line": 17,
				"locals": {
					"start": "'A'",
					"seen": "{}",
					"queue": "[]",
					"order": "['A', 'B', 'C', 'D']",
					"node": "'D'"
				}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'C', 'D'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque([])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'C', 'D']",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		},
		{
			"line": 20,
			"label": "print order",
			"note": "Breadth first order is written to stdout.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 6.93,
			"variables": [{
				"name": "graph",
				"type": "dict",
				"value": "{'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}",
				"scope": "global"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 20,
				"locals": {}
			}],
			"heap": [
				{
					"id": "dict@0x31",
					"type": "dict",
					"label": "graph",
					"value": "4 keys",
					"refs": []
				},
				{
					"id": "set@0x32",
					"type": "set",
					"label": "seen",
					"value": "{'A', 'B', 'C', 'D'}",
					"refs": []
				},
				{
					"id": "deque@0x33",
					"type": "deque",
					"label": "queue",
					"value": "deque([])",
					"refs": []
				},
				{
					"id": "list@0x34",
					"type": "list",
					"label": "order",
					"value": "['A', 'B', 'C', 'D']",
					"refs": []
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "['A', 'B', 'C', 'D']"
			}],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		}
	],
	totalTimeMs: 6.93,
	finalStatus: "completed"
};
var linked_list_default = {
	id: "linked-list",
	title: "Linked List",
	category: "Data Structures",
	description: "Nodes are allocated separately and chained by reference.",
	language: "python",
	monacoLanguage: "python",
	fileName: "linked_list.py",
	entry: "build([10, 20, 30])",
	complexity: {
		"time": "O(n)",
		"space": "O(n)",
		"maxDepth": 2
	},
	code: "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\n\ndef build(values):\n    head = Node(values[0])\n    cursor = head\n    for value in values[1:]:\n        cursor.next = Node(value)\n        cursor = cursor.next\n    return head\n\n\ndef walk(head):\n    while head:\n        print(head.value)\n        head = head.next\n\n\nwalk(build([10, 20, 30]))\n",
	steps: [
		{
			"line": 1,
			"label": "define Node",
			"note": "The class object is created and bound in the module scope.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": .84,
			"variables": [],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}],
			"heap": [{
				"id": "cls@0x01",
				"type": "type",
				"label": "Node",
				"value": "class object",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 7,
			"label": "call build",
			"note": "build receives the source values.",
			"status": "running",
			"currentFunction": "build",
			"returnValue": null,
			"executionTimeMs": 1.79,
			"variables": [{
				"name": "values",
				"type": "list",
				"value": "[10, 20, 30]",
				"scope": "build",
				"changed": true
			}],
			"changed": ["build:values"],
			"highlightedVariables": ["build:values"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "build",
				"line": 7,
				"locals": { "values": "[10, 20, 30]" }
			}],
			"heap": [{
				"id": "cls@0x01",
				"type": "type",
				"label": "Node",
				"value": "class object",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 8,
			"label": "allocate head",
			"note": "The first node is allocated; head and cursor point at it.",
			"status": "running",
			"currentFunction": "build",
			"returnValue": null,
			"executionTimeMs": 2.26,
			"variables": [
				{
					"name": "values",
					"type": "list",
					"value": "[10, 20, 30]",
					"scope": "build"
				},
				{
					"name": "head",
					"type": "str",
					"value": "'<Node 10>'",
					"scope": "build",
					"changed": true
				},
				{
					"name": "cursor",
					"type": "str",
					"value": "'<Node 10>'",
					"scope": "build",
					"changed": true
				}
			],
			"changed": ["build:head", "build:cursor"],
			"highlightedVariables": ["build:head", "build:cursor"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "build",
				"line": 8,
				"locals": {
					"values": "[10, 20, 30]",
					"head": "'<Node 10>'",
					"cursor": "'<Node 10>'"
				}
			}],
			"heap": [{
				"id": "cls@0x01",
				"type": "type",
				"label": "Node",
				"value": "class object",
				"refs": []
			}, {
				"id": "node@0xa1",
				"type": "Node",
				"label": "value = 10",
				"value": "next → None",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 110,
				"objects": 2,
				"allocations": 2,
				"peakBytes": 110
			}
		},
		{
			"line": 11,
			"label": "link node 20",
			"note": "A fresh node is allocated and linked from the current tail.",
			"status": "running",
			"currentFunction": "build",
			"returnValue": null,
			"executionTimeMs": 3.33,
			"variables": [
				{
					"name": "values",
					"type": "list",
					"value": "[10, 20, 30]",
					"scope": "build"
				},
				{
					"name": "head",
					"type": "str",
					"value": "'<Node 10>'",
					"scope": "build"
				},
				{
					"name": "cursor",
					"type": "str",
					"value": "'<Node 10>'",
					"scope": "build"
				},
				{
					"name": "value",
					"type": "int",
					"value": "20",
					"scope": "build",
					"changed": true
				}
			],
			"changed": ["build:value"],
			"highlightedVariables": ["build:value"],
			"highlightedMemory": ["node@0xa1"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "build",
				"line": 11,
				"locals": {
					"values": "[10, 20, 30]",
					"head": "'<Node 10>'",
					"cursor": "'<Node 10>'",
					"value": "20"
				}
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 174,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 174
			}
		},
		{
			"line": 12,
			"label": "advance cursor",
			"note": "The cursor moves to the node it just created.",
			"status": "running",
			"currentFunction": "build",
			"returnValue": null,
			"executionTimeMs": 3.82,
			"variables": [
				{
					"name": "values",
					"type": "list",
					"value": "[10, 20, 30]",
					"scope": "build"
				},
				{
					"name": "head",
					"type": "str",
					"value": "'<Node 10>'",
					"scope": "build"
				},
				{
					"name": "cursor",
					"type": "str",
					"value": "'<Node 20>'",
					"scope": "build",
					"changed": true
				},
				{
					"name": "value",
					"type": "int",
					"value": "20",
					"scope": "build"
				}
			],
			"changed": ["build:cursor"],
			"highlightedVariables": ["build:cursor"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "build",
				"line": 12,
				"locals": {
					"values": "[10, 20, 30]",
					"head": "'<Node 10>'",
					"cursor": "'<Node 20>'",
					"value": "20"
				}
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 174,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 174
			}
		},
		{
			"line": 11,
			"label": "link node 30",
			"note": "A fresh node is allocated and linked from the current tail.",
			"status": "running",
			"currentFunction": "build",
			"returnValue": null,
			"executionTimeMs": 4.92,
			"variables": [
				{
					"name": "values",
					"type": "list",
					"value": "[10, 20, 30]",
					"scope": "build"
				},
				{
					"name": "head",
					"type": "str",
					"value": "'<Node 10>'",
					"scope": "build"
				},
				{
					"name": "cursor",
					"type": "str",
					"value": "'<Node 20>'",
					"scope": "build"
				},
				{
					"name": "value",
					"type": "int",
					"value": "30",
					"scope": "build",
					"changed": true
				}
			],
			"changed": ["build:value"],
			"highlightedVariables": ["build:value"],
			"highlightedMemory": ["node@0xa2"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "build",
				"line": 11,
				"locals": {
					"values": "[10, 20, 30]",
					"head": "'<Node 10>'",
					"cursor": "'<Node 20>'",
					"value": "30"
				}
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → node@0xa3",
					"refs": ["node@0xa3"]
				},
				{
					"id": "node@0xa3",
					"type": "Node",
					"label": "value = 30",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		},
		{
			"line": 12,
			"label": "advance cursor",
			"note": "The cursor moves to the node it just created.",
			"status": "running",
			"currentFunction": "build",
			"returnValue": null,
			"executionTimeMs": 5.7,
			"variables": [
				{
					"name": "values",
					"type": "list",
					"value": "[10, 20, 30]",
					"scope": "build"
				},
				{
					"name": "head",
					"type": "str",
					"value": "'<Node 10>'",
					"scope": "build"
				},
				{
					"name": "cursor",
					"type": "str",
					"value": "'<Node 30>'",
					"scope": "build",
					"changed": true
				},
				{
					"name": "value",
					"type": "int",
					"value": "30",
					"scope": "build"
				}
			],
			"changed": ["build:cursor"],
			"highlightedVariables": ["build:cursor"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "build",
				"line": 12,
				"locals": {
					"values": "[10, 20, 30]",
					"head": "'<Node 10>'",
					"cursor": "'<Node 30>'",
					"value": "30"
				}
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → node@0xa3",
					"refs": ["node@0xa3"]
				},
				{
					"id": "node@0xa3",
					"type": "Node",
					"label": "value = 30",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		},
		{
			"line": 13,
			"label": "return head",
			"note": "The chain is complete and the head reference is returned.",
			"status": "running",
			"currentFunction": "build",
			"returnValue": "<Node 10>",
			"executionTimeMs": 6.92,
			"variables": [
				{
					"name": "values",
					"type": "list",
					"value": "[10, 20, 30]",
					"scope": "build"
				},
				{
					"name": "head",
					"type": "str",
					"value": "'<Node 10>'",
					"scope": "build"
				},
				{
					"name": "cursor",
					"type": "str",
					"value": "'<Node 30>'",
					"scope": "build"
				},
				{
					"name": "value",
					"type": "int",
					"value": "30",
					"scope": "build"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "build",
				"line": 13,
				"locals": {
					"values": "[10, 20, 30]",
					"head": "'<Node 10>'",
					"cursor": "'<Node 30>'",
					"value": "30"
				}
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → node@0xa3",
					"refs": ["node@0xa3"]
				},
				{
					"id": "node@0xa3",
					"type": "Node",
					"label": "value = 30",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		},
		{
			"line": 18,
			"label": "emit 10",
			"note": "The current node's value is printed and the walk follows next.",
			"status": "running",
			"currentFunction": "walk",
			"returnValue": null,
			"executionTimeMs": 7.91,
			"variables": [{
				"name": "head",
				"type": "str",
				"value": "'<Node 10>'",
				"scope": "walk",
				"changed": true
			}],
			"changed": ["walk:head"],
			"highlightedVariables": ["walk:head"],
			"highlightedMemory": ["node@0xa1"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "walk",
				"line": 18,
				"locals": { "head": "'<Node 10>'" }
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → node@0xa3",
					"refs": ["node@0xa3"]
				},
				{
					"id": "node@0xa3",
					"type": "Node",
					"label": "value = 30",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "10"
			}],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		},
		{
			"line": 18,
			"label": "emit 20",
			"note": "The current node's value is printed and the walk follows next.",
			"status": "running",
			"currentFunction": "walk",
			"returnValue": null,
			"executionTimeMs": 8.35,
			"variables": [{
				"name": "head",
				"type": "str",
				"value": "'<Node 20>'",
				"scope": "walk",
				"changed": true
			}],
			"changed": ["walk:head"],
			"highlightedVariables": ["walk:head"],
			"highlightedMemory": ["node@0xa2"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "walk",
				"line": 18,
				"locals": { "head": "'<Node 20>'" }
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → node@0xa3",
					"refs": ["node@0xa3"]
				},
				{
					"id": "node@0xa3",
					"type": "Node",
					"label": "value = 30",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "20"
			}],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		},
		{
			"line": 18,
			"label": "emit 30",
			"note": "The current node's value is printed and the walk follows next.",
			"status": "running",
			"currentFunction": "walk",
			"returnValue": null,
			"executionTimeMs": 9.56,
			"variables": [{
				"name": "head",
				"type": "str",
				"value": "'<Node 30>'",
				"scope": "walk",
				"changed": true
			}],
			"changed": ["walk:head"],
			"highlightedVariables": ["walk:head"],
			"highlightedMemory": ["node@0xa3"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "walk",
				"line": 18,
				"locals": { "head": "'<Node 30>'" }
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → node@0xa3",
					"refs": ["node@0xa3"]
				},
				{
					"id": "node@0xa3",
					"type": "Node",
					"label": "value = 30",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "30"
			}],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		},
		{
			"line": 22,
			"label": "traversal done",
			"note": "head becomes None, so the loop and the program finish.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 10.45,
			"variables": [],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 22,
				"locals": {}
			}],
			"heap": [
				{
					"id": "cls@0x01",
					"type": "type",
					"label": "Node",
					"value": "class object",
					"refs": []
				},
				{
					"id": "node@0xa1",
					"type": "Node",
					"label": "value = 10",
					"value": "next → node@0xa2",
					"refs": ["node@0xa2"]
				},
				{
					"id": "node@0xa2",
					"type": "Node",
					"label": "value = 20",
					"value": "next → node@0xa3",
					"refs": ["node@0xa3"]
				},
				{
					"id": "node@0xa3",
					"type": "Node",
					"label": "value = 30",
					"value": "next → None",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 238,
				"objects": 4,
				"allocations": 4,
				"peakBytes": 238
			}
		}
	],
	totalTimeMs: 10.45,
	finalStatus: "completed"
};
var queue_default = {
	id: "queue",
	title: "Queue (FIFO)",
	category: "Data Structures",
	description: "Enqueue at the back, dequeue from the front.",
	language: "python",
	monacoLanguage: "python",
	fileName: "queue_demo.py",
	entry: "run()",
	complexity: {
		"time": "O(1) per op",
		"space": "O(n)",
		"maxDepth": 2
	},
	code: "from collections import deque\n\n\ndef run():\n    queue = deque()\n    for job in [\"build\", \"test\", \"deploy\"]:\n        queue.append(job)\n    while queue:\n        job = queue.popleft()\n        print(\"running\", job)\n    return \"drained\"\n\n\nprint(run())\n",
	steps: [
		{
			"line": 5,
			"label": "allocate queue",
			"note": "An empty double ended queue is allocated.",
			"status": "running",
			"currentFunction": "run",
			"returnValue": null,
			"executionTimeMs": 1.22,
			"variables": [{
				"name": "queue",
				"type": "list",
				"value": "[]",
				"scope": "run",
				"changed": true
			}],
			"changed": ["run:queue"],
			"highlightedVariables": ["run:queue"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "run",
				"line": 5,
				"locals": { "queue": "[]" }
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque([])",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 50,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 50
			}
		},
		{
			"line": 7,
			"label": "enqueue build",
			"note": "'build' is appended to the back of the queue.",
			"status": "running",
			"currentFunction": "run",
			"returnValue": null,
			"executionTimeMs": 2.1,
			"variables": [{
				"name": "queue",
				"type": "list",
				"value": "['build']",
				"scope": "run",
				"changed": true
			}, {
				"name": "job",
				"type": "str",
				"value": "'build'",
				"scope": "run",
				"changed": true
			}],
			"changed": ["run:queue", "run:job"],
			"highlightedVariables": ["run:queue", "run:job"],
			"highlightedMemory": ["deque@0x51"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "run",
				"line": 7,
				"locals": {
					"queue": "['build']",
					"job": "'build'"
				}
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque(['build'])",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 64,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 64
			}
		},
		{
			"line": 7,
			"label": "enqueue test",
			"note": "'test' is appended to the back of the queue.",
			"status": "running",
			"currentFunction": "run",
			"returnValue": null,
			"executionTimeMs": 2.94,
			"variables": [{
				"name": "queue",
				"type": "list",
				"value": "['build', 'test']",
				"scope": "run",
				"changed": true
			}, {
				"name": "job",
				"type": "str",
				"value": "'test'",
				"scope": "run",
				"changed": true
			}],
			"changed": ["run:queue", "run:job"],
			"highlightedVariables": ["run:queue", "run:job"],
			"highlightedMemory": ["deque@0x51"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "run",
				"line": 7,
				"locals": {
					"queue": "['build', 'test']",
					"job": "'test'"
				}
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque(['build', 'test'])",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 80,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 80
			}
		},
		{
			"line": 7,
			"label": "enqueue deploy",
			"note": "'deploy' is appended to the back of the queue.",
			"status": "running",
			"currentFunction": "run",
			"returnValue": null,
			"executionTimeMs": 3.68,
			"variables": [{
				"name": "queue",
				"type": "list",
				"value": "['build', 'test', 'deploy']",
				"scope": "run",
				"changed": true
			}, {
				"name": "job",
				"type": "str",
				"value": "'deploy'",
				"scope": "run",
				"changed": true
			}],
			"changed": ["run:queue", "run:job"],
			"highlightedVariables": ["run:queue", "run:job"],
			"highlightedMemory": ["deque@0x51"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "run",
				"line": 7,
				"locals": {
					"queue": "['build', 'test', 'deploy']",
					"job": "'deploy'"
				}
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque(['build', 'test', 'deploy'])",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 100,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 100
			}
		},
		{
			"line": 9,
			"label": "dequeue build",
			"note": "The oldest entry 'build' leaves the front — FIFO order holds.",
			"status": "running",
			"currentFunction": "run",
			"returnValue": null,
			"executionTimeMs": 4.8,
			"variables": [{
				"name": "queue",
				"type": "list",
				"value": "['test', 'deploy']",
				"scope": "run",
				"changed": true
			}, {
				"name": "job",
				"type": "str",
				"value": "'build'",
				"scope": "run",
				"changed": true
			}],
			"changed": ["run:queue", "run:job"],
			"highlightedVariables": ["run:queue", "run:job"],
			"highlightedMemory": ["deque@0x51"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "run",
				"line": 9,
				"locals": {
					"queue": "['test', 'deploy']",
					"job": "'build'"
				}
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque(['test', 'deploy'])",
				"refs": []
			}],
			"stdout": [{
				"stream": "stdout",
				"text": "running build"
			}],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 82,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 100
			}
		},
		{
			"line": 9,
			"label": "dequeue test",
			"note": "The oldest entry 'test' leaves the front — FIFO order holds.",
			"status": "running",
			"currentFunction": "run",
			"returnValue": null,
			"executionTimeMs": 5.55,
			"variables": [{
				"name": "queue",
				"type": "list",
				"value": "['deploy']",
				"scope": "run",
				"changed": true
			}, {
				"name": "job",
				"type": "str",
				"value": "'test'",
				"scope": "run",
				"changed": true
			}],
			"changed": ["run:queue", "run:job"],
			"highlightedVariables": ["run:queue", "run:job"],
			"highlightedMemory": ["deque@0x51"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "run",
				"line": 9,
				"locals": {
					"queue": "['deploy']",
					"job": "'test'"
				}
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque(['deploy'])",
				"refs": []
			}],
			"stdout": [{
				"stream": "stdout",
				"text": "running test"
			}],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 66,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 100
			}
		},
		{
			"line": 9,
			"label": "dequeue deploy",
			"note": "The oldest entry 'deploy' leaves the front — FIFO order holds.",
			"status": "running",
			"currentFunction": "run",
			"returnValue": null,
			"executionTimeMs": 6.26,
			"variables": [{
				"name": "queue",
				"type": "list",
				"value": "[]",
				"scope": "run",
				"changed": true
			}, {
				"name": "job",
				"type": "str",
				"value": "'deploy'",
				"scope": "run",
				"changed": true
			}],
			"changed": ["run:queue", "run:job"],
			"highlightedVariables": ["run:queue", "run:job"],
			"highlightedMemory": ["deque@0x51"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "run",
				"line": 9,
				"locals": {
					"queue": "[]",
					"job": "'deploy'"
				}
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque([])",
				"refs": []
			}],
			"stdout": [{
				"stream": "stdout",
				"text": "running deploy"
			}],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 50,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 100
			}
		},
		{
			"line": 11,
			"label": "queue drained",
			"note": "No entries remain, so the loop exits.",
			"status": "running",
			"currentFunction": "run",
			"returnValue": "'drained'",
			"executionTimeMs": 6.89,
			"variables": [{
				"name": "queue",
				"type": "list",
				"value": "[]",
				"scope": "run"
			}, {
				"name": "job",
				"type": "str",
				"value": "'deploy'",
				"scope": "run"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "run",
				"line": 11,
				"locals": {
					"queue": "[]",
					"job": "'deploy'"
				}
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque([])",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 50,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 100
			}
		},
		{
			"line": 14,
			"label": "print result",
			"note": "The return value is written to stdout.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 7.95,
			"variables": [],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 14,
				"locals": {}
			}],
			"heap": [{
				"id": "deque@0x51",
				"type": "deque",
				"label": "queue",
				"value": "deque([])",
				"refs": []
			}],
			"stdout": [{
				"stream": "stdout",
				"text": "drained"
			}],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 50,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 100
			}
		}
	],
	totalTimeMs: 7.95,
	finalStatus: "completed"
};
var stack_default = {
	id: "stack",
	title: "Stack (LIFO)",
	category: "Data Structures",
	description: "Balanced bracket checking with an explicit stack.",
	language: "python",
	monacoLanguage: "python",
	fileName: "stack_demo.py",
	entry: "balanced('([])')",
	complexity: {
		"time": "O(n)",
		"space": "O(n)",
		"maxDepth": 2
	},
	code: "PAIRS = {\")\": \"(\", \"]\": \"[\"}\n\n\ndef balanced(text):\n    stack = []\n    for char in text:\n        if char in \"([\":\n            stack.append(char)\n        else:\n            if not stack or stack.pop() != PAIRS[char]:\n                return False\n    return not stack\n\n\nprint(balanced(\"([])\"))\n",
	steps: [
		{
			"line": 5,
			"label": "allocate stack",
			"note": "An empty list acts as the LIFO stack.",
			"status": "running",
			"currentFunction": "balanced",
			"returnValue": null,
			"executionTimeMs": .64,
			"variables": [{
				"name": "text",
				"type": "str",
				"value": "'([])'",
				"scope": "balanced",
				"changed": true
			}, {
				"name": "stack",
				"type": "list",
				"value": "[]",
				"scope": "balanced",
				"changed": true
			}],
			"changed": ["balanced:text", "balanced:stack"],
			"highlightedVariables": ["balanced:text", "balanced:stack"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "balanced",
				"line": 5,
				"locals": {
					"text": "'([])'",
					"stack": "[]"
				}
			}],
			"heap": [{
				"id": "list@0x61",
				"type": "list",
				"label": "stack",
				"value": "[]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 36,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 36
			}
		},
		{
			"line": 8,
			"label": "push '('",
			"note": "An opening bracket is pushed; depth is now 1.",
			"status": "running",
			"currentFunction": "balanced",
			"returnValue": null,
			"executionTimeMs": 1.12,
			"variables": [
				{
					"name": "text",
					"type": "str",
					"value": "'([])'",
					"scope": "balanced"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['(']",
					"scope": "balanced",
					"changed": true
				},
				{
					"name": "char",
					"type": "str",
					"value": "'('",
					"scope": "balanced",
					"changed": true
				}
			],
			"changed": ["balanced:stack", "balanced:char"],
			"highlightedVariables": ["balanced:stack", "balanced:char"],
			"highlightedMemory": ["list@0x61"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "balanced",
				"line": 8,
				"locals": {
					"text": "'([])'",
					"stack": "['(']",
					"char": "'('"
				}
			}],
			"heap": [{
				"id": "list@0x61",
				"type": "list",
				"label": "stack",
				"value": "['(']",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 42,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 42
			}
		},
		{
			"line": 8,
			"label": "push '['",
			"note": "An opening bracket is pushed; depth is now 2.",
			"status": "running",
			"currentFunction": "balanced",
			"returnValue": null,
			"executionTimeMs": 1.93,
			"variables": [
				{
					"name": "text",
					"type": "str",
					"value": "'([])'",
					"scope": "balanced"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['(', '[']",
					"scope": "balanced",
					"changed": true
				},
				{
					"name": "char",
					"type": "str",
					"value": "'['",
					"scope": "balanced",
					"changed": true
				}
			],
			"changed": ["balanced:stack", "balanced:char"],
			"highlightedVariables": ["balanced:stack", "balanced:char"],
			"highlightedMemory": ["list@0x61"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "balanced",
				"line": 8,
				"locals": {
					"text": "'([])'",
					"stack": "['(', '[']",
					"char": "'['"
				}
			}],
			"heap": [{
				"id": "list@0x61",
				"type": "list",
				"label": "stack",
				"value": "['(', '[']",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 52,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 52
			}
		},
		{
			"line": 10,
			"label": "pop '['",
			"note": "']' matches '[' — the pair is balanced.",
			"status": "running",
			"currentFunction": "balanced",
			"returnValue": null,
			"executionTimeMs": 2.43,
			"variables": [
				{
					"name": "text",
					"type": "str",
					"value": "'([])'",
					"scope": "balanced"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "['(']",
					"scope": "balanced",
					"changed": true
				},
				{
					"name": "char",
					"type": "str",
					"value": "']'",
					"scope": "balanced",
					"changed": true
				}
			],
			"changed": ["balanced:stack", "balanced:char"],
			"highlightedVariables": ["balanced:stack", "balanced:char"],
			"highlightedMemory": ["list@0x61"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "balanced",
				"line": 10,
				"locals": {
					"text": "'([])'",
					"stack": "['(']",
					"char": "']'"
				}
			}],
			"heap": [{
				"id": "list@0x61",
				"type": "list",
				"label": "stack",
				"value": "['(']",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 42,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 52
			}
		},
		{
			"line": 10,
			"label": "pop '('",
			"note": "')' matches '(' — the pair is balanced.",
			"status": "running",
			"currentFunction": "balanced",
			"returnValue": null,
			"executionTimeMs": 3.69,
			"variables": [
				{
					"name": "text",
					"type": "str",
					"value": "'([])'",
					"scope": "balanced"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "balanced",
					"changed": true
				},
				{
					"name": "char",
					"type": "str",
					"value": "')'",
					"scope": "balanced",
					"changed": true
				}
			],
			"changed": ["balanced:stack", "balanced:char"],
			"highlightedVariables": ["balanced:stack", "balanced:char"],
			"highlightedMemory": ["list@0x61"],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "balanced",
				"line": 10,
				"locals": {
					"text": "'([])'",
					"stack": "[]",
					"char": "')'"
				}
			}],
			"heap": [{
				"id": "list@0x61",
				"type": "list",
				"label": "stack",
				"value": "[]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 36,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 52
			}
		},
		{
			"line": 12,
			"label": "stack empty",
			"note": "Every opening bracket was closed in order.",
			"status": "running",
			"currentFunction": "balanced",
			"returnValue": "True",
			"executionTimeMs": 4.3,
			"variables": [
				{
					"name": "text",
					"type": "str",
					"value": "'([])'",
					"scope": "balanced"
				},
				{
					"name": "stack",
					"type": "list",
					"value": "[]",
					"scope": "balanced"
				},
				{
					"name": "char",
					"type": "str",
					"value": "')'",
					"scope": "balanced"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 1,
				"locals": {}
			}, {
				"name": "balanced",
				"line": 12,
				"locals": {
					"text": "'([])'",
					"stack": "[]",
					"char": "')'"
				}
			}],
			"heap": [{
				"id": "list@0x61",
				"type": "list",
				"label": "stack",
				"value": "[]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 36,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 52
			}
		},
		{
			"line": 15,
			"label": "print result",
			"note": "The verdict is written to stdout.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 5.18,
			"variables": [],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 15,
				"locals": {}
			}],
			"heap": [{
				"id": "list@0x61",
				"type": "list",
				"label": "stack",
				"value": "[]",
				"refs": []
			}],
			"stdout": [{
				"stream": "stdout",
				"text": "True"
			}],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 36,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 52
			}
		}
	],
	totalTimeMs: 5.18,
	finalStatus: "completed"
};
var tree_traversal_default = {
	id: "tree-traversal",
	title: "Tree Traversal",
	category: "Trees",
	description: "In-order traversal of a binary tree, one recursive frame per node.",
	language: "python",
	monacoLanguage: "python",
	fileName: "tree_traversal.py",
	entry: "inorder(root)",
	complexity: {
		"time": "O(n)",
		"space": "O(h)",
		"maxDepth": 4
	},
	code: "class Node:\n    def __init__(self, value, left=None, right=None):\n        self.value = value\n        self.left = left\n        self.right = right\n\n\nroot = Node(8, Node(3), Node(12))\n\n\ndef inorder(node):\n    if node is None:\n        return []\n    return inorder(node.left) + [node.value] + inorder(node.right)\n\n\nprint(inorder(root))\n",
	steps: [
		{
			"line": 8,
			"label": "build tree",
			"note": "Three nodes are allocated and linked into a balanced tree.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": .96,
			"variables": [{
				"name": "root",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "global",
				"changed": true
			}],
			"changed": ["global:root"],
			"highlightedVariables": ["global:root"],
			"highlightedMemory": ["node@0x8"],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		},
		{
			"line": 11,
			"label": "visit root 8",
			"note": "The traversal begins at the root frame.",
			"status": "running",
			"currentFunction": "inorder(8)",
			"returnValue": null,
			"executionTimeMs": 1.84,
			"variables": [{
				"name": "root",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "global"
			}, {
				"name": "node",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "inorder(8)",
				"changed": true
			}],
			"changed": ["inorder(8):node"],
			"highlightedVariables": ["inorder(8):node"],
			"highlightedMemory": ["node@0x8"],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "inorder(8)",
				"line": 11,
				"locals": { "node": "'<Node 8>'" }
			}],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		},
		{
			"line": 14,
			"label": "descend left → 3",
			"note": "The left subtree must be fully traversed before the root is emitted.",
			"status": "running",
			"currentFunction": "inorder(3)",
			"returnValue": null,
			"executionTimeMs": 2.79,
			"variables": [
				{
					"name": "root",
					"type": "str",
					"value": "'<Node 8>'",
					"scope": "global"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'<Node 8>'",
					"scope": "inorder(8)"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'<Node 3>'",
					"scope": "inorder(3)",
					"changed": true
				}
			],
			"changed": ["inorder(3):node"],
			"highlightedVariables": ["inorder(3):node"],
			"highlightedMemory": ["node@0x3"],
			"stack": [
				{
					"name": "<module>",
					"line": 8,
					"locals": {}
				},
				{
					"name": "inorder(8)",
					"line": 11,
					"locals": { "node": "'<Node 8>'" }
				},
				{
					"name": "inorder(3)",
					"line": 14,
					"locals": { "node": "'<Node 3>'" }
				}
			],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 288,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		},
		{
			"line": 12,
			"label": "empty child",
			"note": "A missing child returns an empty list immediately.",
			"status": "running",
			"currentFunction": "inorder(None)",
			"returnValue": "[]",
			"executionTimeMs": 3.5,
			"variables": [
				{
					"name": "root",
					"type": "str",
					"value": "'<Node 8>'",
					"scope": "global"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'<Node 8>'",
					"scope": "inorder(8)"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'<Node 3>'",
					"scope": "inorder(3)"
				},
				{
					"name": "node",
					"type": "None",
					"value": "None",
					"scope": "inorder(None)",
					"changed": true
				}
			],
			"changed": ["inorder(None):node"],
			"highlightedVariables": ["inorder(None):node"],
			"highlightedMemory": [],
			"stack": [
				{
					"name": "<module>",
					"line": 8,
					"locals": {}
				},
				{
					"name": "inorder(8)",
					"line": 11,
					"locals": { "node": "'<Node 8>'" }
				},
				{
					"name": "inorder(3)",
					"line": 14,
					"locals": { "node": "'<Node 3>'" }
				},
				{
					"name": "inorder(None)",
					"line": 12,
					"locals": { "node": "None" }
				}
			],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 384,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		},
		{
			"line": 14,
			"label": "emit 3",
			"note": "The left leaf contributes [3].",
			"status": "running",
			"currentFunction": "inorder(8)",
			"returnValue": "[3]",
			"executionTimeMs": 4.39,
			"variables": [{
				"name": "root",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "global"
			}, {
				"name": "node",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "inorder(8)"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": ["node@0x3"],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "inorder(8)",
				"line": 14,
				"locals": { "node": "'<Node 8>'" }
			}],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		},
		{
			"line": 14,
			"label": "emit 8",
			"note": "The root value is appended after its left subtree.",
			"status": "running",
			"currentFunction": "inorder(8)",
			"returnValue": "[3, 8]",
			"executionTimeMs": 4.82,
			"variables": [{
				"name": "root",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "global"
			}, {
				"name": "node",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "inorder(8)"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": ["node@0x8"],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "inorder(8)",
				"line": 14,
				"locals": { "node": "'<Node 8>'" }
			}],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		},
		{
			"line": 14,
			"label": "descend right → 12",
			"note": "The right subtree is traversed last.",
			"status": "running",
			"currentFunction": "inorder(12)",
			"returnValue": null,
			"executionTimeMs": 5.87,
			"variables": [
				{
					"name": "root",
					"type": "str",
					"value": "'<Node 8>'",
					"scope": "global"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'<Node 8>'",
					"scope": "inorder(8)"
				},
				{
					"name": "node",
					"type": "str",
					"value": "'<Node 12>'",
					"scope": "inorder(12)",
					"changed": true
				}
			],
			"changed": ["inorder(12):node"],
			"highlightedVariables": ["inorder(12):node"],
			"highlightedMemory": ["node@0xc"],
			"stack": [
				{
					"name": "<module>",
					"line": 8,
					"locals": {}
				},
				{
					"name": "inorder(8)",
					"line": 14,
					"locals": { "node": "'<Node 8>'" }
				},
				{
					"name": "inorder(12)",
					"line": 14,
					"locals": { "node": "'<Node 12>'" }
				}
			],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 288,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		},
		{
			"line": 14,
			"label": "emit 12",
			"note": "The right leaf contributes [12] and the frame unwinds.",
			"status": "running",
			"currentFunction": "inorder(8)",
			"returnValue": "[3, 8, 12]",
			"executionTimeMs": 6.69,
			"variables": [{
				"name": "root",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "global"
			}, {
				"name": "node",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "inorder(8)"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": ["node@0xc"],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "inorder(8)",
				"line": 14,
				"locals": { "node": "'<Node 8>'" }
			}],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		},
		{
			"line": 17,
			"label": "print traversal",
			"note": "In-order traversal of a binary search tree yields sorted values.",
			"status": "completed",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 7.66,
			"variables": [{
				"name": "root",
				"type": "str",
				"value": "'<Node 8>'",
				"scope": "global"
			}],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 17,
				"locals": {}
			}],
			"heap": [
				{
					"id": "node@0x8",
					"type": "Node",
					"label": "value = 8",
					"value": "root",
					"refs": ["node@0x3", "node@0xc"]
				},
				{
					"id": "node@0x3",
					"type": "Node",
					"label": "value = 3",
					"value": "leaf",
					"refs": []
				},
				{
					"id": "node@0xc",
					"type": "Node",
					"label": "value = 12",
					"value": "leaf",
					"refs": []
				}
			],
			"stdout": [{
				"stream": "stdout",
				"text": "[3, 8, 12]"
			}],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 120,
				"objects": 3,
				"allocations": 3,
				"peakBytes": 120
			}
		}
	],
	totalTimeMs: 7.66,
	finalStatus: "completed"
};
var runtime_error_default = {
	id: "runtime-error",
	title: "Runtime Error",
	category: "Diagnostics",
	description: "An out of range index surfaces as a runtime error with a traceback.",
	language: "python",
	monacoLanguage: "python",
	fileName: "runtime_error.py",
	entry: "average(scores)",
	complexity: {
		"time": "O(n)",
		"space": "O(1)",
		"maxDepth": 2
	},
	code: "def average(values):\n    total = 0\n    for i in range(len(values) + 1):\n        total += values[i]\n    return total / len(values)\n\n\nscores = [90, 72, 88]\nprint(average(scores))\n",
	steps: [
		{
			"line": 8,
			"label": "allocate list",
			"note": "Three scores are stored in a list.",
			"status": "running",
			"currentFunction": "<module>",
			"returnValue": null,
			"executionTimeMs": 1.12,
			"variables": [{
				"name": "scores",
				"type": "list",
				"value": "[90, 72, 88]",
				"scope": "global",
				"changed": true
			}],
			"changed": ["global:scores"],
			"highlightedVariables": ["global:scores"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}],
			"heap": [{
				"id": "list@0x71",
				"type": "list",
				"label": "scores",
				"value": "[90, 72, 88]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 96,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 2,
			"label": "call average",
			"note": "The accumulator starts at zero.",
			"status": "running",
			"currentFunction": "average",
			"returnValue": null,
			"executionTimeMs": 1.61,
			"variables": [
				{
					"name": "scores",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "global"
				},
				{
					"name": "values",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "average",
					"changed": true
				},
				{
					"name": "total",
					"type": "int",
					"value": "0",
					"scope": "average",
					"changed": true
				}
			],
			"changed": ["average:values", "average:total"],
			"highlightedVariables": ["average:values", "average:total"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "average",
				"line": 2,
				"locals": {
					"values": "[90, 72, 88]",
					"total": "0"
				}
			}],
			"heap": [{
				"id": "list@0x71",
				"type": "list",
				"label": "scores",
				"value": "[90, 72, 88]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 4,
			"label": "accumulate 90",
			"note": "values[0] is added — the running total is 90.",
			"status": "running",
			"currentFunction": "average",
			"returnValue": null,
			"executionTimeMs": 2.04,
			"variables": [
				{
					"name": "scores",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "global"
				},
				{
					"name": "values",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "average"
				},
				{
					"name": "total",
					"type": "int",
					"value": "90",
					"scope": "average",
					"changed": true
				},
				{
					"name": "i",
					"type": "int",
					"value": "0",
					"scope": "average",
					"changed": true
				}
			],
			"changed": ["average:total", "average:i"],
			"highlightedVariables": ["average:total", "average:i"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "average",
				"line": 4,
				"locals": {
					"values": "[90, 72, 88]",
					"total": "90",
					"i": "0"
				}
			}],
			"heap": [{
				"id": "list@0x71",
				"type": "list",
				"label": "scores",
				"value": "[90, 72, 88]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 4,
			"label": "accumulate 72",
			"note": "values[1] is added — the running total is 162.",
			"status": "running",
			"currentFunction": "average",
			"returnValue": null,
			"executionTimeMs": 2.67,
			"variables": [
				{
					"name": "scores",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "global"
				},
				{
					"name": "values",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "average"
				},
				{
					"name": "total",
					"type": "int",
					"value": "162",
					"scope": "average",
					"changed": true
				},
				{
					"name": "i",
					"type": "int",
					"value": "1",
					"scope": "average",
					"changed": true
				}
			],
			"changed": ["average:total", "average:i"],
			"highlightedVariables": ["average:total", "average:i"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "average",
				"line": 4,
				"locals": {
					"values": "[90, 72, 88]",
					"total": "162",
					"i": "1"
				}
			}],
			"heap": [{
				"id": "list@0x71",
				"type": "list",
				"label": "scores",
				"value": "[90, 72, 88]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 4,
			"label": "accumulate 88",
			"note": "values[2] is added — the running total is 250.",
			"status": "running",
			"currentFunction": "average",
			"returnValue": null,
			"executionTimeMs": 3.81,
			"variables": [
				{
					"name": "scores",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "global"
				},
				{
					"name": "values",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "average"
				},
				{
					"name": "total",
					"type": "int",
					"value": "250",
					"scope": "average",
					"changed": true
				},
				{
					"name": "i",
					"type": "int",
					"value": "2",
					"scope": "average",
					"changed": true
				}
			],
			"changed": ["average:total", "average:i"],
			"highlightedVariables": ["average:total", "average:i"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "average",
				"line": 4,
				"locals": {
					"values": "[90, 72, 88]",
					"total": "250",
					"i": "2"
				}
			}],
			"heap": [{
				"id": "list@0x71",
				"type": "list",
				"label": "scores",
				"value": "[90, 72, 88]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 3,
			"label": "index 3 requested",
			"note": "The loop bound is one too large, so index 3 is about to be read.",
			"status": "running",
			"currentFunction": "average",
			"returnValue": null,
			"executionTimeMs": 4.43,
			"variables": [
				{
					"name": "scores",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "global"
				},
				{
					"name": "values",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "average"
				},
				{
					"name": "total",
					"type": "int",
					"value": "250",
					"scope": "average"
				},
				{
					"name": "i",
					"type": "int",
					"value": "3",
					"scope": "average",
					"changed": true
				}
			],
			"changed": ["average:i"],
			"highlightedVariables": ["average:i"],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "average",
				"line": 3,
				"locals": {
					"values": "[90, 72, 88]",
					"total": "250",
					"i": "3"
				}
			}],
			"heap": [{
				"id": "list@0x71",
				"type": "list",
				"label": "scores",
				"value": "[90, 72, 88]",
				"refs": []
			}],
			"stdout": [],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		},
		{
			"line": 4,
			"label": "IndexError",
			"note": "values has three elements, so index 3 is out of range and the frame raises.",
			"status": "runtime-error",
			"currentFunction": "average",
			"returnValue": null,
			"executionTimeMs": 5.68,
			"variables": [
				{
					"name": "scores",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "global"
				},
				{
					"name": "values",
					"type": "list",
					"value": "[90, 72, 88]",
					"scope": "average"
				},
				{
					"name": "total",
					"type": "int",
					"value": "250",
					"scope": "average"
				},
				{
					"name": "i",
					"type": "int",
					"value": "3",
					"scope": "average"
				}
			],
			"changed": [],
			"highlightedVariables": [],
			"highlightedMemory": [],
			"stack": [{
				"name": "<module>",
				"line": 8,
				"locals": {}
			}, {
				"name": "average",
				"line": 4,
				"locals": {
					"values": "[90, 72, 88]",
					"total": "250",
					"i": "3"
				}
			}],
			"heap": [{
				"id": "list@0x71",
				"type": "list",
				"label": "scores",
				"value": "[90, 72, 88]",
				"refs": []
			}],
			"stdout": [
				{
					"stream": "stderr",
					"text": "Traceback (most recent call last):"
				},
				{
					"stream": "stderr",
					"text": "  File \"runtime_error.py\", line 8, in <module>"
				},
				{
					"stream": "stderr",
					"text": "  File \"runtime_error.py\", line 4, in average"
				},
				{
					"stream": "stderr",
					"text": "IndexError: list index out of range"
				}
			],
			"metrics": {
				"stackBytes": 192,
				"heapBytes": 56,
				"objects": 1,
				"allocations": 1,
				"peakBytes": 56
			}
		}
	],
	totalTimeMs: 5.68,
	finalStatus: "runtime-error"
};
/**
* Static program catalogue. The shape matches what a trace service would
* return, so swapping this module for a fetch is a one-line change.
*/
var DEFAULT_METRICS = {
	stackBytes: 0,
	heapBytes: 0,
	objects: 0,
	allocations: 0,
	peakBytes: 0
};
function normaliseStep(raw, i, count, code) {
	const step = raw;
	const heap = step.heap ?? [];
	const metrics = step.metrics ?? {
		...DEFAULT_METRICS,
		stackBytes: (step.stack?.length ?? 0) * 96,
		heapBytes: heap.length * 48,
		objects: heap.length,
		allocations: heap.length,
		peakBytes: heap.length * 48
	};
	const changed = step.changed ?? step.variables.filter((v) => v.changed).map((v) => `${v.scope}:${v.name}`);
	const codeLines = code.split("\n");
	const executingCode = step.executingCode ?? (step.line > 0 && step.line <= codeLines.length ? codeLines[step.line - 1]?.trim() : "") ?? "";
	const fnName = step.currentFunction ?? step.stack?.[step.stack.length - 1]?.name ?? "<module>";
	const why = step.why ?? (step.note.includes("Base case") || step.note.includes("return 1") ? "Base case condition met. Returning initial value back up the stack." : step.stack.length > 1 ? `${fnName} pushes a new frame onto the stack to solve a subproblem.` : "Executing instruction sequentially within current scope.");
	const nextStep = step.nextStep ?? (i < count - 1 ? `Step ${i + 2}: Moving to line ${step.line + 1} in ${fnName}()` : "Execution finished successfully.");
	const deepExplanation = step.deepExplanation ?? `**Current Line**: Line ${step.line} in \`${fnName}\`\n\n**Code**: \`${executingCode}\`\n\n**Details**: ${step.note}\n\n**Variable State**: ${step.variables.map((v) => `${v.name} = ${v.value} (${v.type})`).join(", ") || "No local variables"}\n\n**Call Stack Depth**: ${step.stack.length} frame(s)`;
	return {
		...step,
		status: step.status ?? (i === count - 1 ? "done" : "running"),
		currentFunction: fnName,
		returnValue: step.returnValue ?? null,
		executionTimeMs: step.executionTimeMs ?? Number(((i + 1) * .84).toFixed(2)),
		changed,
		highlightedVariables: step.highlightedVariables ?? changed,
		highlightedMemory: step.highlightedMemory ?? [],
		metrics,
		executingCode,
		why,
		nextStep,
		deepExplanation
	};
}
function toProgram(raw, overrides = {}) {
	const source = raw;
	const rawCode = overrides.code ?? source.code ?? "";
	const steps = source.steps.map((s, i) => normaliseStep(s, i, source.steps.length, rawCode));
	const title = overrides.title ?? source.title ?? source.label ?? source.id;
	return {
		id: source.id,
		title,
		label: title,
		category: overrides.category ?? source.category ?? "Data Structures",
		description: source.description ?? "",
		language: source.language ?? "python",
		monacoLanguage: source.monacoLanguage ?? "python",
		fileName: source.fileName ?? `${source.id}.py`,
		entry: source.entry ?? "main()",
		code: rawCode,
		complexity: source.complexity ?? {
			time: "O(n)",
			space: "O(1)",
			maxDepth: 1
		},
		steps,
		totalTimeMs: source.totalTimeMs ?? steps[steps.length - 1]?.executionTimeMs ?? 0,
		finalStatus: source.finalStatus ?? steps[steps.length - 1]?.status ?? "done",
		...overrides
	};
}
var PROGRAMS = [
	toProgram(factorial_default, { category: "Recursion" }),
	toProgram(bubble_sort_default, { category: "Sorting" }),
	toProgram(binary_search_default, { category: "Searching" }),
	toProgram(dfs_default, { category: "Graphs" }),
	toProgram(bfs_default, { category: "Graphs" }),
	toProgram(linked_list_default, { category: "Data Structures" }),
	toProgram(queue_default, { category: "Data Structures" }),
	toProgram(stack_default, { category: "Data Structures" }),
	toProgram(tree_traversal_default, { category: "Trees" }),
	toProgram(runtime_error_default, { category: "Debugging" }),
	toProgram(python_default, {
		category: "Recursion",
		language: "python"
	}),
	toProgram(javascript_default, {
		category: "Recursion",
		language: "javascript"
	}),
	toProgram(cpp_default, {
		category: "Recursion",
		language: "cpp"
	})
];
var DEFAULT_PROGRAM_ID = "factorial";
function getProgram(id) {
	return PROGRAMS.find((p) => p.id === id) ?? PROGRAMS[0];
}
function programsByCategory() {
	const map = /* @__PURE__ */ new Map();
	for (const p of PROGRAMS) {
		const list = map.get(p.category) ?? [];
		list.push(p);
		map.set(p.category, list);
	}
	return [...map.entries()].map(([category, programs]) => ({
		category,
		programs
	}));
}
function firstProgramForLanguage(language) {
	return PROGRAMS.find((p) => p.language === language && p.category === "Language Samples") ?? PROGRAMS.find((p) => p.language === language) ?? PROGRAMS[0];
}
var PROGRAM_LANGUAGES = [
	{
		id: "python",
		label: "Python"
	},
	{
		id: "javascript",
		label: "JavaScript"
	},
	{
		id: "cpp",
		label: "C++"
	}
];
/** Derives the post-run dashboard numbers from the trace itself. */
function summarise(program) {
	const fns = /* @__PURE__ */ new Set();
	const objects = /* @__PURE__ */ new Set();
	const lines = /* @__PURE__ */ new Set();
	let maxDepth = 0;
	let peak = 0;
	let allocations = 0;
	for (const step of program.steps) {
		lines.add(step.line);
		maxDepth = Math.max(maxDepth, step.stack.length);
		peak = Math.max(peak, step.metrics?.peakBytes ?? 0);
		allocations = Math.max(allocations, step.metrics?.allocations ?? 0);
		for (const frame of step.stack) if (frame.name !== "<module>") fns.add(frame.name);
		for (const obj of step.heap) objects.add(obj.id);
	}
	return {
		totalTimeMs: program.totalTimeMs,
		peakBytes: peak,
		functionsCalled: fns.size,
		functionNames: [...fns],
		objectsCreated: objects.size,
		linesExecuted: lines.size,
		maxDepth,
		steps: program.steps.length,
		allocations,
		finalStatus: program.finalStatus
	};
}
/** Lifetime and reference facts for a single heap object. */
function objectProfile(steps, id) {
	let createdAt = -1;
	let destroyedAt = null;
	const referencedBy = /* @__PURE__ */ new Set();
	steps.forEach((step, i) => {
		const present = step.heap.some((o) => o.id === id);
		if (present && createdAt < 0) createdAt = i;
		if (!present && createdAt >= 0 && destroyedAt === null) destroyedAt = i;
		if (present && destroyedAt !== null) destroyedAt = null;
		for (const o of step.heap) if (o.refs?.includes(id)) referencedBy.add(o.id);
	});
	const sizeBytes = 24 + id.length * 4;
	return {
		id,
		createdAt: Math.max(0, createdAt),
		destroyedAt,
		sizeBytes,
		referencedBy: [...referencedBy]
	};
}
var ExecutionCtx = (0, import_react.createContext)(null);
var BASE_INTERVAL = 950;
var INSTANT_INTERVAL = 55;
var FALLBACK_METRICS = {
	stackBytes: 0,
	heapBytes: 0,
	objects: 0,
	allocations: 0,
	peakBytes: 0
};
function ExecutionProvider({ children, initialProgramId = DEFAULT_PROGRAM_ID }) {
	const [programId, setProgramId] = (0, import_react.useState)(initialProgramId);
	const [mode, setMode] = (0, import_react.useState)("learn");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [state, setState] = (0, import_react.useState)("idle");
	const [speed, setSpeed] = (0, import_react.useState)(1);
	const [selection, setSelection] = (0, import_react.useState)({ kind: "none" });
	const [hover, setHover] = (0, import_react.useState)(null);
	const [presentationMode, setPresentationMode] = (0, import_react.useState)(false);
	const [explainModalOpen, setExplainModalOpen] = (0, import_react.useState)(false);
	const [isPreparing, setIsPreparing] = (0, import_react.useState)(false);
	const timer = (0, import_react.useRef)(null);
	const program = (0, import_react.useMemo)(() => getProgram(programId), [programId]);
	const total = program.steps.length;
	const summary = (0, import_react.useMemo)(() => summarise(program), [program]);
	const stop = (0, import_react.useCallback)(() => {
		if (timer.current) clearTimeout(timer.current);
		timer.current = null;
	}, []);
	(0, import_react.useEffect)(() => stop, [stop]);
	const play = (0, import_react.useCallback)(() => {
		setIsPreparing(true);
		blip("compile");
		setTimeout(() => {
			setIsPreparing(false);
			setState((s) => s === "done" ? s : "running");
			setIndex((i) => i >= total - 1 ? 0 : i);
			setState("running");
		}, 300);
	}, [total]);
	const pause = (0, import_react.useCallback)(() => {
		stop();
		setState((s) => s === "running" ? "paused" : s);
	}, [stop]);
	(0, import_react.useEffect)(() => {
		if (state !== "running") return;
		if (index >= total - 1) {
			setState("done");
			return;
		}
		const interval = speed <= 0 ? INSTANT_INTERVAL : BASE_INTERVAL / speed;
		timer.current = setTimeout(() => setIndex((i) => Math.min(total - 1, i + 1)), interval);
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, [
		state,
		index,
		speed,
		total
	]);
	const restart = (0, import_react.useCallback)(() => {
		stop();
		setIndex(0);
		setState("idle");
	}, [stop]);
	const replay = (0, import_react.useCallback)(() => {
		stop();
		setIndex(0);
		setState("running");
	}, [stop]);
	const seek = (0, import_react.useCallback)((next) => {
		setIndex(Math.min(total - 1, Math.max(0, next)));
		setState((s) => s === "running" ? "paused" : s === "idle" ? "paused" : s);
	}, [total]);
	const next = (0, import_react.useCallback)(() => seek(index + 1), [index, seek]);
	const prev = (0, import_react.useCallback)(() => seek(index - 1), [index, seek]);
	const setProgram = (0, import_react.useCallback)((id) => {
		stop();
		setProgramId(id);
		setIndex(0);
		setState("idle");
		setSelection({ kind: "none" });
		setHover(null);
	}, [stop]);
	const setLanguage = (0, import_react.useCallback)((id) => setProgram(firstProgramForLanguage(id).id), [setProgram]);
	const toggle = (0, import_react.useCallback)(() => {
		if (state === "running") pause();
		else play();
	}, [
		state,
		pause,
		play
	]);
	const output = (0, import_react.useMemo)(() => program.steps.slice(0, index + 1).flatMap((s, i) => s.stdout.map((line) => ({
		...line,
		step: i
	}))), [program, index]);
	const step = program.steps[index] ?? program.steps[0];
	const visualizeState = isPreparing ? "preparing" : state === "running" ? "visualizing" : state === "paused" ? "paused" : state === "done" ? "completed" : "idle";
	const value = (0, import_react.useMemo)(() => ({
		program,
		trace: program,
		programId,
		setProgram,
		language: program.language,
		setLanguage,
		mode,
		setMode,
		index,
		total,
		step,
		metrics: step.metrics ?? FALLBACK_METRICS,
		state,
		visualizeState,
		speed,
		setSpeed,
		play,
		pause,
		toggle,
		restart,
		replay,
		next,
		prev,
		seek,
		selection,
		select: setSelection,
		hover,
		setHover,
		presentationMode,
		setPresentationMode,
		explainModalOpen,
		setExplainModalOpen,
		summary,
		output
	}), [
		program,
		programId,
		setProgram,
		setLanguage,
		mode,
		index,
		total,
		step,
		state,
		visualizeState,
		speed,
		play,
		pause,
		toggle,
		restart,
		replay,
		next,
		prev,
		seek,
		selection,
		hover,
		presentationMode,
		explainModalOpen,
		summary,
		output
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionCtx.Provider, {
		value,
		children
	});
}
function useOptionalExecution() {
	return (0, import_react.useContext)(ExecutionCtx);
}
function useExecution() {
	const ctx = (0, import_react.useContext)(ExecutionCtx);
	if (!ctx) throw new Error("useExecution must be used inside <ExecutionProvider>");
	return ctx;
}
function FloatingExecutionStatus() {
	const exec = useOptionalExecution();
	if (!exec || exec.state === "idle") return null;
	const { step, index, total, state, visualizeState } = exec;
	const currentMs = step.executionTimeMs ?? (index + 1) * .42;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: -10,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: -10,
			scale: .95
		},
		transition: {
			duration: .25,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "pointer-events-none absolute top-3 right-4 z-20 flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-surface/90 px-3.5 py-1.5 font-mono text-[11px] shadow-lg backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 text-cyan-300 font-semibold uppercase tracking-wider",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex h-2 w-2",
					children: [state === "running" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-cyan-400" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: visualizeState })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-border/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-foreground/90",
				children: [
					"Step ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-cyan-300",
						children: index + 1
					}),
					" / ",
					total
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-border/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 text-purple-300",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.currentFunction || "main()" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-border/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-muted-foreground/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [currentMs.toFixed(2), " ms"] })]
			})
		]
	});
}
function ExecutionFlowOverlay({ flowType, detailText }) {
	if (!flowType) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 12,
				scale: .92
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -12,
				scale: .92
			},
			transition: {
				duration: .3,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "pointer-events-none absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-xl border px-3.5 py-1.5 font-mono text-[11px] font-semibold shadow-xl backdrop-blur-md",
			children: flowType === "function-call" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 border-purple-500/40 bg-purple-500/15 text-purple-300",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "h-3.5 w-3.5 text-purple-400 animate-bounce" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detailText || "Entering Function Call" })]
			}) : flowType === "function-return" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 border-amber-500/40 bg-amber-500/15 text-amber-300",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detailText || "Returning to Caller" })]
			}) : flowType === "loop-iteration" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 border-cyan-500/40 bg-cyan-500/15 text-cyan-300",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5 text-cyan-400 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detailText || "Loop Repetition" })]
			}) : null
		}, `${flowType}-${detailText}`)
	});
}
var Monaco = (0, import_react.lazy)(async () => {
	const [{ default: Editor, loader }] = await Promise.all([import("../_libs/monaco-editor__react.mjs").then((n) => n.t)]);
	loader.init().then((monaco) => {
		monaco.editor.defineTheme("taltrix", {
			base: "vs-dark",
			inherit: true,
			rules: [
				{
					token: "comment",
					foreground: "5b6784",
					fontStyle: "italic"
				},
				{
					token: "keyword",
					foreground: "a78bfa"
				},
				{
					token: "string",
					foreground: "67e8f9"
				},
				{
					token: "number",
					foreground: "f59e0b"
				}
			],
			colors: {
				"editor.background": "#0D1224",
				"editor.lineHighlightBackground": "#141B2D00",
				"editorLineNumber.foreground": "#3d4a68",
				"editorGutter.background": "#0D1224",
				"editor.selectionBackground": "#7C3AED44"
			}
		});
		monaco.editor.setTheme("taltrix");
	});
	return { default: Editor };
});
function Skeleton({ code = DEMO_CODE }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "h-full overflow-auto bg-surface p-5 font-mono text-[13px] leading-[1.9] text-muted-foreground",
		children: code
	});
}
function CodeEditor({ highlightLine, height = "100%", language = "python", value = DEMO_CODE }) {
	const { settings } = useSettings();
	const exec = useOptionalExecution();
	const editorRef = (0, import_react.useRef)(null);
	const monacoRef = (0, import_react.useRef)(null);
	const decorationsRef = (0, import_react.useRef)([]);
	const handleEditorMount = (editor, monaco) => {
		editorRef.current = editor;
		monacoRef.current = monaco;
		try {
			monaco.editor.defineTheme("taltrix", {
				base: "vs-dark",
				inherit: true,
				rules: [
					{
						token: "comment",
						foreground: "5b6784",
						fontStyle: "italic"
					},
					{
						token: "keyword",
						foreground: "a78bfa"
					},
					{
						token: "string",
						foreground: "67e8f9"
					},
					{
						token: "number",
						foreground: "f59e0b"
					}
				],
				colors: {
					"editor.background": "#0D1224",
					"editor.lineHighlightBackground": "#141B2D00",
					"editorLineNumber.foreground": "#3d4a68",
					"editorGutter.background": "#0D1224",
					"editor.selectionBackground": "#7C3AED44"
				}
			});
			monaco.editor.setTheme("taltrix");
		} catch {}
	};
	const currentLine = highlightLine ?? exec?.step?.line;
	const index = exec?.index ?? 0;
	const steps = exec?.trace?.steps;
	const mode = exec?.mode ?? "learn";
	const prevLine = (0, import_react.useMemo)(() => {
		if (!steps || index <= 0) return void 0;
		return steps[index - 1]?.line;
	}, [steps, index]);
	const nextLine = (0, import_react.useMemo)(() => {
		if (!steps || index >= steps.length - 1) return void 0;
		return steps[index + 1]?.line;
	}, [steps, index]);
	const { flowType, detailText } = (0, import_react.useMemo)(() => {
		if (!steps || index <= 0 || !exec?.step) return {
			flowType: null,
			detailText: ""
		};
		const currentStep = exec.step;
		const prevStep = steps[index - 1];
		if (currentStep.callStack && prevStep.callStack) {
			if (currentStep.callStack.length > prevStep.callStack.length) return {
				flowType: "function-call",
				detailText: `↓ Entering ${currentStep.currentFunction || "function"}()`
			};
			if (currentStep.callStack.length < prevStep.callStack.length) return {
				flowType: "function-return",
				detailText: `↑ Returning to ${currentStep.currentFunction || "caller"}`
			};
		}
		if (currentStep.line <= prevStep.line && currentStep.currentFunction === prevStep.currentFunction && Math.abs(currentStep.line - prevStep.line) > 1) return {
			flowType: "loop-iteration",
			detailText: `↺ Loop back to line ${currentStep.line}`
		};
		return {
			flowType: null,
			detailText: ""
		};
	}, [
		steps,
		index,
		exec?.step
	]);
	const speed = settings.visualization.animationSpeed;
	const transitionDuration = settings.accessibility.reduceMotion || speed === "instant" ? "0s" : speed === "slow" ? "0.6s" : speed === "fast" ? "0.15s" : "0.35s";
	(0, import_react.useEffect)(() => {
		const editor = editorRef.current;
		const monaco = monacoRef.current;
		if (!editor || !monaco) return;
		const newDecorations = [];
		if (currentLine) newDecorations.push({
			range: new monaco.Range(currentLine, 1, currentLine, 1),
			options: {
				isWholeLine: true,
				className: "taltrix-current-line-bg",
				glyphMarginClassName: "taltrix-current-gutter-glyph",
				lineNumberClassName: "taltrix-current-line-number"
			}
		});
		if (prevLine && prevLine !== currentLine) newDecorations.push({
			range: new monaco.Range(prevLine, 1, prevLine, 1),
			options: {
				isWholeLine: true,
				className: "taltrix-previous-line-bg",
				glyphMarginClassName: "taltrix-previous-gutter-glyph",
				lineNumberClassName: "taltrix-previous-line-number"
			}
		});
		if (mode === "learn" && nextLine && nextLine !== currentLine && nextLine !== prevLine) newDecorations.push({
			range: new monaco.Range(nextLine, 1, nextLine, 1),
			options: {
				isWholeLine: true,
				className: "taltrix-next-line-bg",
				glyphMarginClassName: "taltrix-next-gutter-glyph"
			}
		});
		decorationsRef.current = editor.deltaDecorations(decorationsRef.current, newDecorations);
		if (currentLine && settings.visualization.autoScroll) editor.revealLineInCenter(currentLine, 0);
	}, [
		currentLine,
		prevLine,
		nextLine,
		mode,
		settings.visualization.autoScroll
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		"data-cursor": "text",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        /* Current Line Highlight */
        .taltrix-current-line-bg {
          background: linear-gradient(90deg, rgba(34, 211, 238, 0.22) 0%, rgba(168, 85, 247, 0.10) 70%, transparent 100%) !important;
          border-left: 3px solid #22d3ee !important;
          box-shadow: inset 0 0 16px rgba(34, 211, 238, 0.16);
          transition: all ${transitionDuration} cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .taltrix-current-gutter-glyph {
          background: #22d3ee;
          border-radius: 50%;
          box-shadow: 0 0 12px #22d3ee;
          width: 8px !important;
          height: 8px !important;
          margin-left: 4px;
          margin-top: 7px;
          transition: all ${transitionDuration} ease !important;
        }
        .taltrix-current-line-number {
          color: #22d3ee !important;
          font-weight: 700 !important;
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.4);
        }

        /* Previous Line Highlight */
        .taltrix-previous-line-bg {
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.12) 0%, rgba(59, 130, 246, 0.05) 70%, transparent 100%) !important;
          border-left: 2px solid rgba(168, 85, 247, 0.5) !important;
          opacity: 0.85;
          transition: all ${transitionDuration} ease !important;
        }
        .taltrix-previous-gutter-glyph {
          background: #a855f7;
          border-radius: 50%;
          opacity: 0.6;
          width: 6px !important;
          height: 6px !important;
          margin-left: 5px;
          margin-top: 8px;
        }
        .taltrix-previous-line-number {
          color: #c084fc !important;
          opacity: 0.85;
        }

        /* Next Line Preview Highlight */
        .taltrix-next-line-bg {
          background: linear-gradient(90deg, rgba(52, 211, 153, 0.08) 0%, transparent 80%) !important;
          border-left: 2px dashed rgba(52, 211, 153, 0.4) !important;
          transition: all ${transitionDuration} ease !important;
        }
        .taltrix-next-gutter-glyph {
          background: #34d399;
          border-radius: 2px;
          opacity: 0.5;
          width: 5px !important;
          height: 5px !important;
          margin-left: 5px;
          margin-top: 8px;
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingExecutionStatus, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionFlowOverlay, {
				flowType,
				detailText
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { code: value }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { code: value }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monaco, {
						height,
						language,
						defaultValue: value,
						theme: "taltrix",
						onMount: handleEditorMount,
						options: {
							fontFamily: `${settings.editor.codeFont}, monospace`,
							fontSize: settings.editor.fontSize,
							lineHeight: settings.editor.lineHeight,
							lineNumbers: settings.editor.showLineNumbers,
							minimap: { enabled: settings.editor.showMinimap },
							wordWrap: settings.editor.wordWrap,
							tabSize: settings.editor.tabSize,
							cursorStyle: settings.editor.cursorStyle,
							cursorBlinking: settings.editor.cursorBlinking,
							readOnly: settings.editor.readOnly,
							scrollBeyondLastLine: false,
							padding: {
								top: 16,
								bottom: 16
							},
							renderLineHighlight: settings.editor.currentLineHighlight ? "all" : "none",
							smoothScrolling: true,
							glyphMargin: true,
							scrollbar: {
								verticalScrollbarSize: 8,
								horizontalScrollbarSize: 8
							}
						}
					}, language)
				})
			})
		]
	});
}
//#endregion
export { objectProfile as a, PROGRAM_LANGUAGES as i, ExecutionProvider as n, programsByCategory as o, PROGRAMS as r, useExecution as s, CodeEditor as t };
