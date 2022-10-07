import { assert, test } from 'vitest';
import { tandemBicycle } from './tandem-bicycle';

test('tandem-bicycle#1', () => {
    const redShirtRiders = [5, 5, 3, 9, 2];
    const blueShirtRiders = [3, 6, 7, 2, 1];
    const expectedResult = 32;
    const fastest = true;
    assert.equal(
        tandemBicycle(redShirtRiders, blueShirtRiders, fastest),
        expectedResult
    );
});

test('tandem-bicycle#2', () => {
    const redShirtRiders = [5, 5, 3, 9, 2];
    const blueShirtRiders = [3, 6, 7, 2, 1];
    const expectedResult = 11;
    const fastest = false;
    assert.equal(
        tandemBicycle(redShirtRiders, blueShirtRiders, fastest),
        expectedResult
    );
});
