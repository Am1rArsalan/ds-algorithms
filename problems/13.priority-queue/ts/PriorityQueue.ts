export interface PriorityQueue {
    insert: (value: number) => void;
    getHeap: () => number[];
    getSize: () => number;
    peek: () => number;
    remove: (index: number) => void;
}

export class PriorityQueueImpl implements PriorityQueue {
    constructor(
        private heap: number[],
        private competitor: (a: number, b: number) => boolean
    ) {
        this.buildHeap();
    }

    public insert(value: number) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    public remove(index: number) {
        this.heap = this.heap.filter(
            (item: number, idx: number) => idx !== index
        );

        this.heapifyDown(index);
    }

    public getHeap() {
        return this.heap;
    }

    public getSize() {
        return this.heap.length;
    }

    public peek() {
        if (this.heap.length === 0) {
            throw new Error('Heap is empty');
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop() as number;
        this.heapifyDown(0);

        return root;
    }

    private buildHeap() {
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; --i) {
            this.heapifyDown(i);
        }
    }

    private heapifyUp(index: number) {
        if (index === 0) return;

        const parentIndex = Math.floor((index - 1) / 2);

        if (!this.competitor(this.heap[parentIndex], this.heap[index])) {
            let temp = this.heap[index];
            this.heap[index] = this.heap[parentIndex];
            this.heap[parentIndex] = temp;
            this.heapifyUp(parentIndex);
        }
    }

    private heapifyDown(index: number) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        const left = this.heap[leftIndex];
        const right = this.heap[rightIndex];

        // min or max
        const targetChildIndex = this.competitor(left, right)
            ? leftIndex
            : rightIndex;

        if (this.competitor(this.heap[targetChildIndex], this.heap[index])) {
            let temp = this.heap[index];
            this.heap[index] = this.heap[targetChildIndex];
            this.heap[targetChildIndex] = temp;
            this.heapifyDown(targetChildIndex);
        }
    }
}
