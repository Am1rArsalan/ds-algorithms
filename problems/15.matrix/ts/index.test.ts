import { describe, it, assert } from 'vitest';
import { traverseTwoDimensionalArray } from './index';

describe('2 dimensional arrays', () => {
    it('traverse 2 dimensional arrays ( dfs )', () => {
        const testCase = Array.from({ length: 4 }, (_, i) => {
            return Array.from({ length: 5 }, (_, j) => i + j + 1 + 4 * i);
        });

        const sortedResult = traverseTwoDimensionalArray(testCase).sort(
            (a, b) => (a > b ? 1 : -1)
        );

        assert.equal(sortedResult.length, 20);
        assert.deepEqual(sortedResult, testCase.flat());
    });
});
