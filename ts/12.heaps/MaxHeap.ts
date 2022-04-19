export class MaxHeap {
    private heap: number[] = [];

    constructor(initialHeap: number[]) {
        this.heap = initialHeap;
        this.buildHeap();
    }

    insert(value: number) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMax(): number {
        if (this.heap.length === 0) {
            throw new Error('Heap is empty');
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop() as number;
        this.heapifyDown(0);
        return max;
    }

    private heapifyUp(index: number) {
        if (index === 0) {
            return;
        }

        const parentIndex = Math.floor((index - 1) / 2);

        if (this.heap[parentIndex] < this.heap[index]) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;
            this.heapifyUp(parentIndex);
        }
    }

    private heapifyDown(index: number) {
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        const leftChild = this.heap[leftChildIndex];
        const rightChild = this.heap[rightChildIndex];

        const maxChildIndex =
            leftChild > rightChild ? leftChildIndex : rightChildIndex;
        if (this.heap[index] < this.heap[maxChildIndex]) {
            const temp = this.heap[index];
            this.heap[index] = this.heap[maxChildIndex];
            this.heap[maxChildIndex] = temp;
            this.heapifyDown(maxChildIndex);
        }
    }

    private buildHeap() {
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    getHeap(): number[] {
        return this.heap;
    }

    getSize(): number {
        return this.heap.length;
    }

    getMax(): number {
        return this.heap[0];
    }
}
