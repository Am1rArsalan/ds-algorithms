import { compareTwoString } from './compare-hash-strings';
import { describe, it, assert } from 'vitest';

describe('problem 4', () => {
    it('should compare two strings', () => {
        assert.equal(compareTwoString('axeqq#a', 'asexq#a'), false);
        assert.equal(compareTwoString('axeqq#a', 'axeqW#a'), true);
    });
});
