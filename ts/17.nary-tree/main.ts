export interface MonarchyNode {
    insertChild: (childName: string) => void;
    getValue: () => string;
    getChildren: () => MonarchyNode[];
}

export class MonarchyNodeImpl {
    private value: string;
    private children: MonarchyNode[];

    constructor(value: string) {
        this.value = value;
        this.children = [];
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
        if (
            this.monarchy.getValue() == name &&
            this.monarchy.getChildren().length > 0
        ) {
            const kingChildren = this.monarchy.getChildren();
            const otherChildren = kingChildren.slice(1);
            const nextKing = kingChildren[0];
            this.monarchy = nextKing;

            for (let i = 0; i < otherChildren.length; i++) {
                this.monarchy.insertChild(otherChildren[i].getValue());
            }

            return;
        }

        let children = this.monarchy.getChildren();
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child.getValue() == name) {
                const nodeChildren = child.getChildren();
                const otherNodeChildren = nodeChildren.slice(1);
                child = nodeChildren[0];

                for (let i = 0; i < otherNodeChildren.length; i++) {
                    child.insertChild(otherNodeChildren[i].getValue());
                }
            }
        }
    }

    private dfs(node: MonarchyNode, order: string[]) {
        if (!node) return;

        order.push(node.getValue());
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
