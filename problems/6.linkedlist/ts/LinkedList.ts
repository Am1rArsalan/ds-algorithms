export type NodeType<T> = {
    value: T;
    next: NodeType<T> | null;
};

export interface LinkedList<T> {
    getHead: () => NodeType<T> | null;
    getListLength: () => number;
    push: (value: T) => NodeType<T>;
    pop: () => NodeType<T>;
    shift: () => void;
    reverse: () => NodeType<T> | null;
    reversePartOfList: (m: number, n: number) => void;
    addCycle: (cycleIndex: number) => void;
    detectAndResolveCycle: () => void;
    findCycleNode: () => NodeType<T> | null;
}

export class LinkedListImpl<T> implements LinkedList<T> {
    private length: number = 0;
    private head: NodeType<T> | null = null;

    public getHead() {
        this.checkHead();
        return this.head;
    }

    public getListLength() {
        return this.length;
    }

    public setHead(node: NodeType<any>) {
        this.head = node;
    }

    public push(value: T) {
        this.length++;
        if (!this.head) {
            this.head = this.generateNode(value);
            return this.head;
        }
        let temp = this.head;

        do {
            if (temp.next) temp = temp.next;
        } while (temp.next !== null);

        temp.next = this.generateNode(value);
        temp = temp.next;

        return temp;
    }

    public pop() {
        this.checkHead();
        this.length > 0 && this.length--;
        let temp = this.head;
        for (; temp?.next?.next !== null; ) {
            if (temp?.next?.next) temp = temp?.next;
        }
        const deletedNode = temp.next;
        temp.next = null;
        return deletedNode;
    }

    public shift() {
        this.checkHead();
        if (this.head?.next) this.head = this.head?.next;
    }

    public reverse() {
        this.checkHead();
        let temp = this.head;
        if (!temp?.next) return this.head;
        let prev = null;

        for (; temp !== null; ) {
            if (!temp) break;
            let next: NodeType<T> | null = temp?.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        this.head = prev;
        return this.head;
    }

    public reversePartOfList(startIndex: number, endIndex: number) {
        let currentPosition = 1,
            current = this.head,
            start = this.head;

        while (currentPosition < startIndex && current) {
            start = current;
            current = current?.next;
            ++currentPosition;
        }

        let tail = current,
            prev = null,
            next = null;

        while (
            currentPosition >= startIndex &&
            currentPosition <= endIndex &&
            current
        ) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            ++currentPosition;
        }

        if (start && startIndex !== 1) start.next = prev;
        if (tail) tail.next = current;

        if (startIndex === 1) {
            this.head = prev;
        }
    }

    public addCycle(cycleIndex: number) {
        let temp = this.head;
        let cycleNode = this.head;
        let i = 0;
        while (cycleNode && i < cycleIndex) {
            cycleNode = cycleNode.next;
            ++i;
        }

        while (temp?.next) {
            temp = temp?.next;
        }
        if (temp) temp.next = cycleNode;
    }

    public detectAndResolveCycle() {
        let temp = this.head;
        let seenNodes = new Set<NodeType<T>>();
        let prev = null;

        while (temp) {
            if (seenNodes.has(temp)) {
                if (prev) prev.next = null;
                return temp;
            } else {
                seenNodes.add(temp);
            }
            prev = temp;
            temp = temp.next;
        }

        return null;
    }

    public findCycleNode() {
        let seenNodes = new Set<NodeType<T>>();
        let currentNode = this.head;
        while (!seenNodes.has(currentNode as NodeType<T>) && currentNode) {
            if (currentNode.next === null) {
                return null;
            }
            seenNodes.add(currentNode);
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    public detectCycleWithRabbit() {
        let R = this.head,
            T = this.head,
            SN = this.head;

        do {
            R = R?.next as NodeType<T>;
            T = T?.next as NodeType<T>;

            if (R === null || R?.next === null) {
                return false;
            } else {
                R = R.next;
            }
            if (R === T) break;
        } while (true);

        let MN = R;
        while (MN !== SN) {
            MN = MN?.next as NodeType<T>;
            SN = SN?.next as NodeType<T>;
        }

        return MN;
    }

    public renderList() {
        console.log('renderList');
        this.checkHead();

        let temp = this.head;
        do {
            console.log(temp?.value);
            if (temp?.next) temp = temp.next;
        } while (temp?.next !== null);

        console.log(temp?.value);
    }

    private checkHead() {
        if (this.head) {
            return;
        }

        throw Error('NO HEAD');
    }

    private generateNode(value: T) {
        return {
            value,
            next: null,
        };
    }

    static renderGivenHead(startNode: NodeType<any> | null) {
        if (startNode) {
            let temp = { ...startNode };
            do {
                console.log(temp?.value);
                if (temp?.next) temp = temp.next;
            } while (temp?.next !== null);

            console.log(temp?.value);
        } else {
            console.log('NO HEAD');
        }
    }
}
