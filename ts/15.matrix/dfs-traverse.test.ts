import { test, assert } from 'vitest';
import { dfsTraverse } from './';

test('traverse 2 dimensional arrays ( dfs )', () => {
    const testCase = Array.from({ length: 4 }, (_, i) => {
        return Array.from({ length: 5 }, (_, j) => i + j + 1 + 4 * i);
    });
    const sortedResult = dfsTraverse(testCase).sort((a, b) => (a > b ? 1 : -1));
    assert.equal(sortedResult.length, 20);
    assert.deepEqual(sortedResult, testCase.flat());
});
