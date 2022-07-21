import { describe, assert, test } from 'vitest';
import { sortedSquared } from './sorted-squared';

describe('sorted squared array', () => {
    test('first test case', () => {
        const arr = [1, 2, 3, 5, 6, 8, 9];
        const sol = [1, 4, 9, 25, 36, 64, 81];
        assert.deepEqual(sortedSquared(arr), sol);
    });
    test('second test case', () => {
        const arr = [-3, -1, 2, 5, 10];
        const sol = [1, 4, 9, 25, 100];
        assert.deepEqual(sortedSquared(arr), sol);
    });
    test('third test case', () => {
        const arr = [-6, -4, -2, 0, 1];
        const sol = [0, 1, 4, 16, 36];
        assert.deepEqual(sortedSquared(arr), sol);
    });

    //result is [
    //0,  4,  9, 25,
    //36, 64, 81
    //]

    //result is [ 0, 4, 9, 25, 100 ]

    //result is [ 0, 1, 4, 16, 36 ]
});
