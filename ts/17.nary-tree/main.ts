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
        if (this.monarchy.getValue() == parent) {
            this.monarchy.insertChild(child);
            return;
        }

        let children = this.monarchy.getChildren();
        for (let i = 0; i < children.length; i++) {
            let childNode = children[i];

            if (childNode.getValue() == parent) {
                childNode.insertChild(child);
                return;
            }

            children = [...children, ...childNode.getChildren()];
        }
    }

    public death(name: string): void {
        if (this.monarchy.getValue() == name) {
            this.monarchy.death();
            return;
        }

        let children = this.monarchy.getChildren();
        for (let i = 0; i < children.length; i++) {
            let childNode = children[i];
            if (childNode.getValue() == name) {
                childNode.death();
                return;
            }
            children = [...children, ...childNode.getChildren()];
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

    // REMOVE: delete this after debug
    public getMonarchy() {
        return this.monarchy;
    }
}
