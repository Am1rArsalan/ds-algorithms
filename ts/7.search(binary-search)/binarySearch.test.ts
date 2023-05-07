import { binarySearch, recursiveBinarySearch } from './index';
import { test, assert } from 'vitest';

test('should find target in the sorted array and return the index ( binary search )', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.equal(binarySearch([...arr], 5, 0, arr.length - 1), 4);
    assert.equal(binarySearch([...arr], 6, 0, arr.length - 1), 5);
    assert.equal(binarySearch([...arr], 3, 0, arr.length - 1), 2);
    assert.equal(binarySearch([...arr], 8, 0, arr.length - 1), -1);
});

test('should find target in the sorted array and return the index ( binary search )', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.equal(recursiveBinarySearch([...arr], 5), 4);
    assert.equal(recursiveBinarySearch([...arr], 6), 5);
    assert.equal(recursiveBinarySearch([...arr], 3), 2);
    assert.equal(recursiveBinarySearch([...arr], 8), -1);
});
