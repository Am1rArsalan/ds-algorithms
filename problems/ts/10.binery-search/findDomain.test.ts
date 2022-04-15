import {
    findDomainForGivenTargetWithoutBinarySearch,
    findDomainForGivenTarget,
} from './index';
import { test, assert } from 'vitest';

test('problem 2 :o(n)', () => {
    const arr = [1, 3, 3, 5, 5, 5, 8, 9];
    assert.deepEqual(
        findDomainForGivenTargetWithoutBinarySearch([...arr], 5),
        [3, 5]
    );
});

test('problem 2:o(log(n))', () => {
    assert.deepEqual(
        findDomainForGivenTarget([1, 3, 3, 5, 5, 5, 8, 9], 5),
        [3, 5]
    );
    assert.deepEqual(findDomainForGivenTarget([1, 2, 3, 4, 5, 6], 4), [3, 3]);
    assert.deepEqual(findDomainForGivenTarget([1, 2, 3, 4, 5], 9), [-1, -1]);
});
