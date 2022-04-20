import { test, assert } from 'vitest';
import { bfsTraverse } from './';

test('traverse 2 dimensional arrays ( bfs )', () => {
    const testCase = Array.from({ length: 4 }, (_, i) => {
        return Array.from({ length: 5 }, (_, j) => i + j + 1 + 4 * i);
    });

    const result = bfsTraverse<number>(testCase).sort((a, b) =>
        a > b ? 1 : -1
    );
    assert.equal(result.length, 20);
    assert.deepEqual(result, testCase.flat());
});
