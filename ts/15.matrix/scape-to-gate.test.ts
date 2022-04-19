import { test, assert } from 'vitest';
import { scapeToGate } from './';

test('steps to scape from the gate problem', () => {
    assert.deepEqual(
        scapeToGate([
            [Infinity, -1, 0, Infinity],
            [Infinity, Infinity, Infinity, -1],
            [Infinity, -1, Infinity, -1],
            [0, -1, Infinity, Infinity],
        ]),
        [
            [3, -1, 0, 1],
            [2, 2, 1, -1],
            [1, -1, 2, -1],
            [0, -1, 3, 4],
        ]
    );
});
