import { describe, it, assert } from 'vitest';
import { calculateNumberOfMinutes3 } from './cal-minutes';
import { calculateNumberOfMinutes, calculateNumberOfMinutes2 } from './index';

// description of this problem exists in the problem md file
describe('calculate minutes problem ( problem #3 )', () => {
    it('calculate number of minutes (problem#3) solution 1', () => {
        assert.equal(
            calculateNumberOfMinutes(
                [2, 2, 4, 6, -1, 4, 4, 5],
                [0, 0, 4, 0, 7, 3, 6, 0]
            ),
            13
        );
    });

    it('calculate number of minutes (problem#3) solution 2', () => {
        assert.equal(
            calculateNumberOfMinutes2(
                8,
                4,
                [2, 2, 4, 6, -1, 4, 4, 5],
                [0, 0, 4, 0, 7, 3, 6, 0]
            ),
            13
        );
    });

    it('calculate number of minutes (problem#3) solution 3', () => {
        assert.equal(
            calculateNumberOfMinutes3(
                8,
                4,
                [2, 2, 4, 6, -1, 4, 4, 5],
                [0, 0, 4, 0, 7, 3, 6, 0]
            ),
            13
        );
    });
});
