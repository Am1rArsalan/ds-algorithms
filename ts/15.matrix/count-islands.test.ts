import { test, assert } from 'vitest';
import { countIslands } from './';

test('island problem', () => {
    assert.equal(
        countIslands([
            [1, 1, 1, 1, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1],
            [0, 0, 0, 1, 1],
        ]),
        2
    );

    assert.equal(
        countIslands([
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 1, 1, 1, 0],
            [1, 0, 1, 0, 1],
        ]),
        7
    );

    assert.equal(
        countIslands([
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
        ]),
        1
    );

    assert.equal(countIslands([]), 0);
    assert.equal(countIslands([[1]]), 1);
    assert.equal(countIslands([[0]]), 0);
});
