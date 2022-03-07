import { describe, it, assert } from 'vitest';
import { MaxHeap } from './MaxHeap';
import { MinHeap } from './MinHeap';

describe('heaps and priority queues', () => {
    it('making max heap by getting initial initial incorrect max heap', () => {
        const heap = new MaxHeap([]);
        const heap2 = new MaxHeap([25, 40, 15, 20, 10, 50, 35]);

        heap.insert(15);
        heap.insert(35);
        heap.insert(10);
        heap.insert(25);
        heap.insert(20);
        heap.insert(50);
        heap.insert(40);

        assert.deepEqual(heap.getHeap(), [50, 25, 40, 15, 20, 10, 35]);
        assert.deepEqual(heap2.getHeap(), [50, 40, 35, 20, 10, 15, 25]);
    });

    it('making min heap by getting initial incorrect min heap', () => {
        const heap = new MinHeap([]);
        const heap2 = new MinHeap([25, 40, 15, 20, 10, 50, 35]);

        heap.insert(15);
        heap.insert(35);
        heap.insert(10);
        heap.insert(25);
        heap.insert(20);
        heap.insert(50);
        heap.insert(40);

        assert.deepEqual(heap.getHeap(), [10, 20, 15, 35, 25, 50, 40]);
        assert.deepEqual(heap2.getHeap(), [10, 20, 15, 25, 40, 50, 35]);
    });
});
