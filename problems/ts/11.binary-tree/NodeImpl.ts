import { Node } from './Node';

export class NodeImpl<T> implements Node<T> {
    value: T;
    right: Node<T> | null;
    left: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    insert(value: T): Node<T> {
        if (value < this.value) {
            if (this.left) {
                return this.left.insert(value);
            } else {
                return this.pushLeftLeaf(value);
            }
        } else {
            if (this.right) {
                return this.right.insert(value);
            } else {
                return this.pushRightLeaf(value);
            }
        }
    }

    pushLeftLeaf(value: T): Node<T> {
        const generateNode = new NodeImpl<T>(value);
        this.left = generateNode;
        return generateNode;
    }

    pushRightLeaf(value: T): Node<T> {
        const generateNode = new NodeImpl<T>(value);
        this.right = generateNode;
        return generateNode;
    }
}
