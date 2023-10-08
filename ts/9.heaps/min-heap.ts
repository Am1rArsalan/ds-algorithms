export class MinHeap {
    private heap: number[] = [];

    constructor(initialHeap: number[]) {
        this.heap = initialHeap;
        this.buildHeap();
    }

    extractMin() {
        if (this.heap.length === 0) {
            throw new Error('Heap is empty');
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop() as number;
        this.heapifyDown(0);
        return min;
    }

    insert(value: number) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    getHeap() {
        return this.heap;
    }

    private buildHeap() {
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; --i) {
            this.heapifyDown(i);
        }
    }

    private heapifyUp(index: number) {
        if (index === 0) return;
        const parentIndex = Math.floor((index - 1) / 2); // 0

        if (this.heap[parentIndex] > this.heap[index]) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;
            this.heapifyUp(parentIndex);
        }
    }

    private heapifyDown(index: number) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        const left = this.heap[leftIndex];
        const right = this.heap[rightIndex];

        const minChildIndex = left < right ? leftIndex : rightIndex;

        if (this.heap[index] > this.heap[minChildIndex]) {
            const temp = this.heap[index];
            this.heap[index] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            this.heapifyDown(minChildIndex);
        }
    }
}
