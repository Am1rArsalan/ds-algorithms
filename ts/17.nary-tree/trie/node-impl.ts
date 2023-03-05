import { Node } from './node';

export class NodeImpl implements Node {
    private value: string;
    private children: Map<string, Node>;
    private terminal = false;

    private constructor(value: string) {
        this.value = value;
        this.children = new Map();
        this.terminal = false;
    }

    public static newNode(value: string) {
        return new NodeImpl(value) as Node;
    }

    public setTerminal(value: boolean) {
        this.terminal = value;
    }

    public isTerminal() {
        return this.terminal;
    }

    public getValue(): string {
        return this.value;
    }

    public setChild(key: string, value: Node) {
        this.children.set(key, value);
    }

    public getChildren() {
        return this.children;
    }
}
