import { Node } from './Node';

export class NodeImpl implements Node {
    private value: string;
    private child: Node | null;

    constructor(value: string) {
        this.value = value;
        this.child = null;
    }

    public insertChild(value: string): Node {
        this.child = new NodeImpl(value);
        return this.child;
    }

    public getValue(): string {
        return this.value;
    }

    public getChild(): Node | null {
        return this.child;
    }
}
