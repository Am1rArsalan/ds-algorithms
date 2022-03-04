import { describe, it } from 'vitest';
import { MaxHeap } from './MaxHeap';

describe('heaps and priority queues', () => {
    it('...', () => {
        const heap = new MaxHeap([]);
        const heap2 = new MaxHeap([25, 40, 15, 20, 10, 50, 35]);

        heap.insert(15);
        heap.insert(35);
        heap.insert(10);
        heap.insert(25);
        heap.insert(20);
        heap.insert(50);
        heap.insert(40);

        console.log('what is the heap1 ?', heap.getHeap());
        console.log('what is the heap2 ?', heap2.getHeap());
    });
});
