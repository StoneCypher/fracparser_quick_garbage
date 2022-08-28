"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
let label_curr = '';
function test(descr, _impl) {
    label_curr = descr;
}
function near(n1, n2) {
    return Math.abs(n1 - n2) < 0.001;
}
function expect(clause) {
    return ({ toBe: function (match) {
            if (near(clause, match)) {
                console.log(`Pass: ${label_curr} is ${clause}`);
                return true;
            }
            else {
                console.log(`Violated precondition: ${label_curr} should be ${match}, got ${clause}`);
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
