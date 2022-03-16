import { describe, it, assert, beforeEach } from 'vitest';
import { GraphImpl } from './Graph';

describe('graph questions', () => {
    let graph = new GraphImpl<number>();

    beforeEach(() => {
        graph.addVertex(0);
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addVertex(3);
        graph.addVertex(4);
        graph.addVertex(5);
        graph.addVertex(6);
        graph.addVertex(7);
        graph.addVertex(8);

        graph.addEdge(0, 1);
        graph.addEdge(0, 3);
        graph.addEdge(3, 2);
        graph.addEdge(2, 8);
        graph.addEdge(3, 4);
        graph.addEdge(3, 5);
        graph.addEdge(4, 6);
        graph.addEdge(6, 7);
    });

    it('bfs traversal in graph [class api]', () => {
        assert.deepEqual(
            graph.bfsTraverse().sort((a, b) => (a > b ? 1 : -1)),
            [0, 1, 2, 3, 4, 5, 6, 7, 8]
        );
    });

    it('dfs traversal in graph [class api]', () => {
        const result: number[] = [];
        graph.dfsTraverse(
            0,
            [...graph.edges] as number[][],
            result,
            new Map<number, boolean>()
        );

        assert.deepEqual(
            result.sort((a, b) => (a > b ? 1 : -1)),
            [0, 1, 2, 3, 4, 5, 6, 7, 8]
        );
    });
});
