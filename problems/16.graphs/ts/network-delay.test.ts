import { timeToReceiveSignal } from './';
import { describe, it, assert } from 'vitest';

describe('using topological sort', () => {
    it('best test case', () => {
        assert.equal(
            timeToReceiveSignal(
                [
                    [1, 2, 9],
                    [1, 4, 2],
                    [2, 5, 1],
                    [4, 2, 4],
                    [4, 5, 6],
                    [3, 2, 3],
                    [5, 3, 7],
                    [3, 1, 5],
                ],
                1,
                5
            ),
            14
        );
    });

    it.skip('should return -1 ( un connected graph )', () => {
        assert.equal(timeToReceiveSignal([[2, 3, 4]], 2, 3), -1);
    });

    it.skip('should return -1', () => {
        assert.equal(
            timeToReceiveSignal(
                [
                    [3, 1, 3],
                    [1, 2, 8],
                ],
                1,
                3
            ),
            -1
        );
    });
});
