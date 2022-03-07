import { describe, it, assert } from 'vitest';
import { traverseTwoDimensionalArray } from './index';

describe('2 dimensional arrays', () => {
    it('traverse 2 dimensional arrays ( dfs )', () => {
        const testCase = Array.from({ length: 4 }, (_, i) => {
            return Array.from({ length: 5 }, (_, j) => i + j + 1 + 4 * i);
        });

        assert.equal(traverseTwoDimensionalArray(testCase).size, 20);
    });
});
