import {
    isValidPalindrome,
    isValidPalindrome2,
    isValidPalindrome3,
} from './palindrome';
import { describe, it, assert } from 'vitest';

describe('check string is palindrome or not', () => {
    it('solution 1', () => {
        assert.equal(isValidPalindrome('a , abaa'), true);
        assert.equal(isValidPalindrome('aabb ,aa'), true);
        assert.equal(isValidPalindrome('abc'), false);
        assert.equal(isValidPalindrome('a'), true);
        assert.equal(isValidPalindrome(''), true);
        assert.equal(
            isValidPalindrome('A man, a plan, a canal : Panama'),
            true
        );
    });

    it('solution 2', () => {
        assert.equal(isValidPalindrome2('aabaa'), true);
        assert.equal(isValidPalindrome2('aabbaa'), true);
        assert.equal(isValidPalindrome2('abc'), false);
        assert.equal(isValidPalindrome2('a'), true);
        assert.equal(isValidPalindrome2(''), true);
        assert.equal(
            isValidPalindrome('A man, a plan, a canal : Panama'),
            true
        );
    });

    it('solution 3', () => {
        assert.equal(isValidPalindrome3('aabaa'), true);
        assert.equal(isValidPalindrome3('aabbaa'), true);
        assert.equal(isValidPalindrome3('abc'), false);
        assert.equal(isValidPalindrome3('a'), true);
        assert.equal(isValidPalindrome3(''), true);
        assert.equal(
            isValidPalindrome('A man, a plan, a canal : Panama'),
            true
        );
    });
});
