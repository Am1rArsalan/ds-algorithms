import { describe, it, assert } from 'vitest';
import { mergeSort } from '.';

describe('merge sort', () => {
    it('merge sort', () => {
        let arr = [10, 80, 30, 90, 40, 50, 70];
        mergeSort(arr);
        assert.deepEqual(arr, [10, 30, 40, 50, 70, 80, 90]);
        arr = [7, 1, 3, 5, 2, 6, 4];
        mergeSort(arr);
        assert.deepEqual(arr, [1, 2, 3, 4, 5, 6, 7]);
    });
});
