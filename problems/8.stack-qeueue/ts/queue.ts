interface QueueWithStacks<T> {
    enqueue: (value: T) => void;
    dequeue: () => T | undefined;
    peek: () => T;
    empty: () => boolean;
}

export class QueueWithStacksImpl<T> implements QueueWithStacks<T> {
    in: T[];
    out: T[];
    constructor() {
        this.out = [];
        this.in = [];
    }

    public enqueue(value: T) {
        this.in.push(value);
    }

    public dequeue() {
        this.fillRemoveStack();

        return this.out.pop();
    }

    public peek() {
        this.fillRemoveStack();

        return this.out[this.out.length - 1];
    }

    public empty() {
        return this.out.length === 0 && this.in.length === 0;
    }

    private fillRemoveStack() {
        if (this.out.length === 0) {
            while (this.in.length > 0) {
                this.out.push(this.in.pop() as T);
            }
        }
    }
}
