import { describe, assert, it } from 'vitest';
import {
    costToFinalStep,
    costToFinalStep2,
    findMinimumCost,
    findMinimumCost2,
    findMinimumCost3,
} from './index';

describe('cost to final step', () => {
    it('finding cost with memoizing(top down)', () => {
        const result = costToFinalStep([20, 15, 30, 5]);
        assert.equal(result, 20);
    });

    it('finding cost without memoizing (top down)', () => {
        const result = costToFinalStep2([20, 15, 30, 5]);
        assert.equal(result, 20);
    });

    it('finding cost with iterative solution (bottom up)', () => {
        const result = findMinimumCost2([20, 15, 30, 5]);
        assert.equal(result, 20);
    });

    it('(optimized version) finding cost with iterative solution (bottom up)', () => {
        const result = findMinimumCost3([20, 15, 30, 5]);
        assert.equal(result, 20);
    });
});
