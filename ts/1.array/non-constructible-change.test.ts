import { assert, describe, test } from 'vitest';
import { nonConstructibleChange } from './non-constructible-change';

describe('non-constructible change', () => {
    test('first test case', () => {
        const arr = [5, 7, 1, 1, 2, 3, 22];
        assert.equal(nonConstructibleChange(arr), 20);
    });
});
