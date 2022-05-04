export interface MonarchyNode {
    insertChild: (childName: string) => void;
    getValue: () => string;
    getChildren: () => MonarchyNode[];
    death: () => void;
    isAlive: () => boolean;
}

export class MonarchyNodeImpl implements MonarchyNode {
    private value: string;
    private children: MonarchyNode[];
    private _isAlive: boolean;

    constructor(value: string) {
        this.value = value;
        this.children = [];
        this._isAlive = true;
    }

    public insertChild(child: string) {
        this.children.push(new MonarchyNodeImpl(child));
    }

    public getValue() {
        return this.value;
    }

    public getChildren() {
        return this.children;
    }

    public death() {
        this._isAlive = false;
    }

    public isAlive() {
        return this._isAlive;
    }
}

export interface Monarchy {
    birth(child: string, parent: string): void;
    death(name: string): void;
    getOrderOfSuccession(): string[];
}

export class MonarchyImpl implements Monarchy {
    private monarchy: MonarchyNode;

    constructor(king: MonarchyNode) {
        this.monarchy = king;
    }

    public birth(child: string, parent: string) {
        let queue = [this.monarchy];

        while (queue.length > 0) {
            let vertex = queue.shift() as MonarchyNode;

            if (vertex.getValue() == parent) {
                vertex.insertChild(child);
                return;
            }

            let children = vertex.getChildren();
            for (let i = 0; i < children.length; i++) {
                const childNode = children[i];
                queue.push(childNode);
            }
        }
    }

    public death(name: string): void {
        let queue = [this.monarchy];

        while (queue.length > 0) {
            let vertex = queue.shift() as MonarchyNode;

            if (vertex.getValue() == name) {
                vertex.death();
                return;
            }

            for (let i = 0; i < vertex.getChildren().length; i++) {
                queue.push(vertex.getChildren()[i]);
            }
        }
    }

    private dfs(node: MonarchyNode, order: string[]) {
        if (!node) return;

        node.isAlive() && order.push(node.getValue());
        const children = node.getChildren();

        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            this.dfs(child, order);
        }
    }

    public getOrderOfSuccession() {
        const order: string[] = [];

        this.dfs(this.monarchy, order);

        return order;
    }
}
