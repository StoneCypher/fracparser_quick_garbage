"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.parse = void 0;
const parser_js_1 = require("./parser.js");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parser_js_1.parse; } });
const fs_1 = require("fs");
const pkg = JSON.parse(`${(0, fs_1.readFileSync)('./package.json')}`), version = pkg.version || false;
exports.version = version;
