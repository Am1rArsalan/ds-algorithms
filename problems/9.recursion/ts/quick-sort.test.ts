import { describe, it, assert } from 'vitest';
import { quickSort } from '.';

describe('quick sort', () => {
    it('quick sort', () => {
        let arr = [10, 80, 30, 90, 40, 50, 70];
        quickSort(arr, 0, arr.length - 1);
        assert.deepEqual(arr, [10, 30, 40, 50, 70, 80, 90]);
        arr = [7, 1, 3, 5, 2, 6, 4];
        quickSort(arr, 0, arr.length - 1);
        assert.deepEqual(arr, [1, 2, 3, 4, 5, 6, 7]);
    });
});
