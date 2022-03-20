export interface Graph<T> {
    vertices: T[];
    edges: number[][];
    addVertex(vertex: T): Graph<T>;
    addEdge(v: T, w: T): Graph<T>;
}

export class GraphImpl<T extends number> implements Graph<T> {
    vertices: T[];
    edges: number[][];

    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    public addVertex(vertex: T) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];

        return this;
    }

    public addEdge(v: T, w: T) {
        this.edges[v].push(w);
        this.edges[w].push(v);
        return this;
    }

    public dfsTraverse(
        vertex: T,
        adjList: T[][],
        result: T[],
        seen: Map<T, boolean>
    ) {
        if (vertex === undefined || seen.get(vertex)) return result;
        result.push(vertex);

        seen.set(vertex, true);
        let connections = adjList[vertex];

        for (let i = 0; i < connections.length; i++) {
            let connection = connections[i];
            if (!seen.get(connection)) {
                this.dfsTraverse(connection, adjList, result, seen);
            }
        }
    }

    public bfsTraverse(): number[] {
        let adjList = this.edges;
        let queue = [0];
        let seen = new Map<number, boolean>();
        const result = [];

        while (queue.length > 0) {
            let vertex = queue.shift() as number;
            seen.set(vertex, true);
            result.push(vertex);
            let connections = adjList[vertex];

            for (let i = 0; i < connections.length; i++) {
                let node = connections[i];
                if (!seen.get(node)) {
                    queue.push(node);
                }
            }
        }

        return result;
    }
}
