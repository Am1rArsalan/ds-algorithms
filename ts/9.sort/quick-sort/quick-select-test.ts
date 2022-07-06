import { describe, it, assert } from 'vitest';
import { returnKthLargestElement } from './';

describe('quick select', () => {
    it('return kth largest element', () => {
        assert.equal(
            returnKthLargestElement([10, 80, 30, 90, 40, 50, 70], 2),
            80
        );
    });
});
