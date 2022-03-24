import { networkDelay } from './';
import { describe, it, assert } from 'vitest';

describe('calculate network delay', () => {
    it('best test case', () => {
        assert.equal(
            networkDelay(
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

    it('should return -1 ( un connected graph )', () => {
        assert.equal(networkDelay([[2, 3, 4]], 2, 3), -1);
    });

    it('should return -1', () => {
        assert.equal(
            networkDelay(
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
