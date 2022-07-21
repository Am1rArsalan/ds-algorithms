import { describe, assert, test } from 'vitest';
import { validateSubsequences } from './validate-subsequences';

describe('validate subsequences', () => {
    test('first test case', () => {
        const arr = [5, 1, 22, 25, 6, -1, 8, 10];
        const innerArr = [1, 6, -1, 10];
        assert.equal(validateSubsequences(arr, innerArr), true);
    });
});
