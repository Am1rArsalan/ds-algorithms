import { test, assert } from 'vitest';
import { timeTakeToRotten } from './';

test('rotten orange problem', () => {
    assert.equal(
        timeTakeToRotten([
            [1, 1, 0, 0, 0],
            [2, 1, 0, 0, 0],
            [0, 0, 0, 1, 2],
            [0, 1, 0, 0, 1],
        ]),
        -1
    );

    assert.equal(
        timeTakeToRotten([
            [0, 2, 1, 2, 2],
            [1, 1, 0, 2, 1],
            [1, 1, 1, 2, 2],
            [0, 2, 0, 2, 0],
        ]),
        2
    );

    assert.equal(
        timeTakeToRotten([
            [2, 1, 1, 0, 0],
            [1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 1, 0, 0, 1],
        ]),
        7
    );

    assert.equal(timeTakeToRotten([[]]), 0);
});
