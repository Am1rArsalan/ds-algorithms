import { Vertex } from './VertexImpl';

export interface Graph<T> {
    vertices: Vertex<T>[];
    edges: number[][];
    addVertex(vertex: Vertex<T>): void;
    addEdge(v: Vertex<T>, w: Vertex<T>): void;
}

export class GraphImpl<T extends number> implements Graph<T> {
    vertices: Vertex<T>[];
    edges: number[][];

    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    public addVertex(vertex: Vertex<T>): void {
        this.vertices.push(vertex);
        this.edges[vertex.value] = [];
    }

    public addEdge(v: Vertex<T>, w: Vertex<T>): void {
        this.edges[v.value].push(w.value);
        this.edges[w.value].push(v.value);
    }

    public traverse(): number[] {
        let adjList = this.edges;
        console.log('adjList', adjList);
        const directions = [
            [-1, 0],
            [0, +1],
            [+1, 0],
            [0, -1],
        ];
        if (adjList.length === 0) return [0];
        let seen = Array.from({ length: adjList.length }, (_, index) =>
            Array<boolean>(adjList[index].length).fill(false)
        );
        console.log(seen);
        seen[0][0] = true;
        let result = [adjList[0][0]];
        let queue = [[0, 0]];

        while (queue.length > 0) {
            let coordinate = queue.shift() as [number, number];
            let row = coordinate[0];
            let col = coordinate[1];

            for (let i = 0; i < directions.length; ++i) {
                let direction = directions[i];
                let _row = row + direction[0];
                let _col = col + direction[1];

                if (
                    adjList[_row] &&
                    adjList[_row][_col] !== undefined &&
                    !seen[_row][_col]
                ) {
                    result.push(adjList[_row][_col]);
                    queue.push([_row, _col]);
                    seen[_row][_col] = true;
                }
            }
        }

        console.log('result is ', result);
        return result;
    }
}
