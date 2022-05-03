export interface Monarchy {
    birth(child: string, parent: string): void;
    death(name: string): void;
    getOrderOfSuccession(): string[];
}

export class MonarchyImpl implements Monarchy {
    private monarchy: number[][];
    private monarchyNames: string[];

    constructor(king: string) {
        this.monarchy = [];
        this.monarchyNames = [king];
    }

    public birth(child: string, parent: string) {
        let parentIndex = this.monarchyNames.findIndex(
            (item) => item == parent
        );
        if (parentIndex == -1) {
            this.monarchyNames.push(parent);
            parentIndex = this.monarchyNames.length - 1;
        }
        let childIndex = this.monarchyNames.findIndex((item) => item == child);
        if (childIndex == -1) {
            this.monarchyNames.push(child);
            childIndex = this.monarchyNames.length - 1;
        }

        if (this.monarchy[parentIndex]) {
            this.monarchy[parentIndex].push(childIndex);
        } else {
            this.monarchy[parentIndex] = [childIndex];
        }
    }

    public death(name: string): void {
        //
    }

    public getOrderOfSuccession() {
        let queue = [0];
        let seen = new Map<number, boolean>();
        const order: string[] = [];
        let queueLength = queue.length;

        while (queue.length > 0) {
            const current = queue.shift() as number;
            queueLength -= 1;
            const connections = this.monarchy[current];
            seen.set(current, true);

            if (queueLength == 0) {
                order.push(this.monarchyNames[current]);
                queueLength = queue.length;
            }

            for (let i = 0; i < connections?.length; i++) {
                if (
                    !seen.get(connections[i]) &&
                    connections[i] !== null &&
                    connections[i] !== undefined
                ) {
                    queue.push(connections[i]);
                }
            }
        }

        return order;
    }

    // delete this after debug
    public getMonarchy() {
        return this.monarchy;
    }
}
