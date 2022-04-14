export interface PriorityQueue {
    insert: (value: number) => void;
    getHeap: () => number[];
    getSize: () => number;
    peek: () => number;
    remove: (index: number) => void;
    pop: () => number | undefined;
    isEmpty: () => boolean;
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

    public isEmpty() {
        return this.heap.length === 0;
    }

    public remove(index: number) {
        this.heap = this.heap.filter((_, idx: number) => idx !== index);
        this.heapifyDown(index);
    }

    public pop(): number | undefined {
        if (this.isEmpty()) return;
        const removed = this.heap[0];
        this.remove(0);
        return removed;
    }

    public getHeap() {
        return this.heap;
    }

    public getSize() {
        return this.heap.length;
    }

    public peek() {
        if (this.isEmpty()) {
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

    private parent(index: number) {
        return Math.floor((index - 1) / 2);
    }

    private left(index: number) {
        return index * 2 + 1;
    }

    private right(index: number) {
        return index * 2 + 2;
    }

    private swap(index: number, itemToSwapIndex: number) {
        let temp = this.heap[index];
        this.heap[index] = this.heap[itemToSwapIndex];
        this.heap[itemToSwapIndex] = temp;
    }

    private heapifyUp(index: number) {
        if (index === 0) return;
        if (this.isEmpty()) return;
        const parentIndex = this.parent(index);

        if (!this.compare(parentIndex, index)) {
            this.swap(parentIndex, index);
            this.heapifyUp(parentIndex);
        }
    }

    private compare(i: number, j: number) {
        return this.competitor(i, j);
    }

    private heapifyDown(index: number) {
        const targetChildIndex = this.compare(
            this.left(index),
            this.right(index)
        )
            ? this.left(index)
            : this.right(index);

        if (this.compare(targetChildIndex, index)) {
            this.swap(index, targetChildIndex);
            this.heapifyDown(targetChildIndex);
        }
    }
}
