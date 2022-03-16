import { describe, it, assert } from 'vitest';
import { VertexImpl } from './VertexImpl';
import { GraphImpl, Graph } from './Graph';

describe('graph questions', () => {
    it('bfs traversal in graph [class api]', () => {
        let graph = new GraphImpl<number>();
        graph.addVertex(new VertexImpl(0));
        graph.addVertex(new VertexImpl(1));
        graph.addVertex(new VertexImpl(2));
        graph.addVertex(new VertexImpl(3));
        graph.addVertex(new VertexImpl(4));
        graph.addVertex(new VertexImpl(5));
        graph.addVertex(new VertexImpl(6));
        graph.addVertex(new VertexImpl(7));
        graph.addVertex(new VertexImpl(8));

        graph.addEdge(new VertexImpl(0), new VertexImpl(1));
        graph.addEdge(new VertexImpl(0), new VertexImpl(3));
        graph.addEdge(new VertexImpl(3), new VertexImpl(2));
        graph.addEdge(new VertexImpl(2), new VertexImpl(8));
        graph.addEdge(new VertexImpl(3), new VertexImpl(4));
        graph.addEdge(new VertexImpl(3), new VertexImpl(5));
        graph.addEdge(new VertexImpl(4), new VertexImpl(6));
        graph.addEdge(new VertexImpl(6), new VertexImpl(7));

        assert.deepEqual(graph.traverse(), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
});
