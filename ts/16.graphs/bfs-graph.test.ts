import { describe, it, assert, beforeEach } from 'vitest';
import { GraphImpl } from './graph/Graph';
import { bfsTraverse } from './index';

describe('bfs traverse in the graph', () => {
    let graph = new GraphImpl<number>();

    beforeEach(() => {
        graph
            .addVertex(0)
            .addVertex(1)
            .addVertex(2)
            .addVertex(3)
            .addVertex(4)
            .addVertex(5)
            .addVertex(6)
            .addVertex(7)
            .addVertex(8);

        graph
            .addEdge(0, 1)
            .addEdge(0, 3)
            .addEdge(3, 2)
            .addEdge(2, 8)
            .addEdge(3, 4)
            .addEdge(3, 5)
            .addEdge(4, 6)
            .addEdge(6, 7);
    });

    it('bfs traversal in graph [class api]', () => {
        assert.deepEqual(
            graph.bfsTraverse().sort((a, b) => (a > b ? 1 : -1)),
            [0, 1, 2, 3, 4, 5, 6, 7, 8]
        );
    });

    it('bfs traversal in graph [function api]', () => {
        const result = bfsTraverse([...graph.edges]).sort((a, b) =>
            a > b ? 1 : -1
        );
        assert.deepEqual(result, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
});
