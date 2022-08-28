"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
let label_curr = '';
function test(descr, _impl) {
    label_curr = descr;
}
function expect(clause) {
    return ({ toBe: function (match) {
            if (clause === match) {
                return true;
            }
            else {
                console.log(`Violated precondition: ${label_curr} should be ${match}, got ${label_curr}`);
                return false;
            }
        } });
}
test('3 + -4_1/2', expect((0, index_1.parse)('3 + -4_1/2')).toBe(-1.5));
test('3 - -4_1/2', expect((0, index_1.parse)('3 - -4_1/2')).toBe(7.5));
test('3+-4_1/2', expect((0, index_1.parse)('3+-4_1/2')).toBe(-1.5));
test('3--4_1/2', expect((0, index_1.parse)('3--4_1/2')).toBe(7.5));
test('3-4_1/2', expect((0, index_1.parse)('3-4_1/2')).toBe(-1.5));
test('3--4', expect((0, index_1.parse)('3--4')).toBe(7));
test('3-4', expect((0, index_1.parse)('3-4')).toBe(-1));
test('3_1/5--4', expect((0, index_1.parse)('3_1/5--4')).toBe(7.2));
test('3_1/5-4', expect((0, index_1.parse)('3_1/5-4')).toBe(-0.8));
