import { Node } from './Node';

export interface BinaryTree<T> {
    insert(value: T): void;
    getRoot(): Node<T> | null;
    insert(value: T): BinaryTree<T>;
    findMaxDepth(node: Node<T> | null, max?: number): number;
    findLevelOrderValues(): T[][];
    findRightSideVisibleNodes(): T[];
}

export class BinaryTreeImpl<T> implements BinaryTree<T> {
    private root: Node<T> | null = null;

    constructor(root: Node<T>) {
        this.setRoot(root);
    }

    public getRoot(): Node<T> | null {
        return this.root;
    }

    private setRoot(root: Node<T>) {
        this.root = root;
    }

    public insert(value: T) {
        (this.root as Node<T>).insert(value);
        return this;
    }

    public findMaxDepth(node: Node<T> | null, max = 0): number {
        if (!node) return max;

        max = max + 1;

        return Math.max.apply(null, [
            this.findMaxDepth(node.left, max),
            this.findMaxDepth(node.right, max),
        ]);
    }

    public findLevelOrderValues(): T[][] {
        let result = [] as T[][];
        let temp = { ...this.root };
        let queue = [temp];

        while (queue.length > 0) {
            let level = [];
            let queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                let vertex = queue.shift() as Node<T>;
                level.push(vertex.value);

                vertex.right && queue.push(vertex.right);
                vertex.left && queue.push(vertex.left);
            }

            level.length > 0 && result.push(level);
        }

        return result;
    }

    public findRightSideVisibleNodes(): T[] {
        const result: T[] = [];
        const temp = { ...this.root };
        const queue = [temp];

        while (queue.length > 0) {
            const queueLength = queue.length;
            const level = [];

            for (let i = 0; i < queueLength; i++) {
                const vertex = queue.shift() as Node<T>;

                if (level.length === 0) {
                    level.push(vertex?.value);
                }

                vertex.right && queue.push(vertex.right);
                vertex.left && queue.push(vertex.left);
            }

            level.length > 0 && result.push(level[0] as T);
        }

        return result;
    }
}
