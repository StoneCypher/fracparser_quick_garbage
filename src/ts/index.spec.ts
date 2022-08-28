
import { parse } from './index';





let label_curr = '';

function test(descr: string, _impl: boolean) {
  label_curr = descr;
}

function near(n1: number, n2: number) {
  return Math.abs(n1-n2) < 0.001;
}

function expect(clause: unknown) {
  return ({ toBe: function(match: unknown) {
    if (near(clause as number, match as number)) { console.log(`Pass: ${label_curr} is ${clause}`); return true; }
    else { console.log(`Violated precondition: ${label_curr} should be ${match}, got ${clause}`); return false; }
  } });
}





test('3 + -4_1/2', expect( parse('3 + -4_1/2') ).toBe(-1.5) );
test('3 - -4_1/2', expect( parse('3 - -4_1/2') ).toBe(7.5) );

test('3+-4_1/2', expect( parse('3+-4_1/2') ).toBe(-1.5) );
test('3--4_1/2', expect( parse('3--4_1/2') ).toBe(7.5) );
test('3-4_1/2', expect( parse('3-4_1/2') ).toBe(-1.5) );

test('3--4', expect( parse('3--4') ).toBe(7) );
test('3-4', expect( parse('3-4') ).toBe(-1) );

test('3_1/5--4', expect( parse('3_1/5--4') ).toBe(7.2) );
test('3_1/5-4', expect( parse('3_1/5-4') ).toBe(-0.8) );

