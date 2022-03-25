import { describe, assert, it } from 'vitest';
import { costToFinalStep } from './index';

describe('cost to final step', () => {
    it('should return 10', () => {
        assert.equal(costToFinalStep([10, 15, 30]), 10);
    });
});
