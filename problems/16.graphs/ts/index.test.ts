import { describe, it, assert, beforeEach } from 'vitest';
import { calculateNumberOfMinutes3 } from './cal-minutes';
import { GraphImpl } from './Graph';
import {
    dfsTraverse,
    bfsTraverse,
    calculateNumberOfMinutes,
    calculateNumberOfMinutes2,
} from './index';

describe('graph questions', () => {
    describe('bfs and dfs in the graph', () => {
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

        it('bfs traversal in graph [function api]', () => {
            const result = bfsTraverse([...graph.edges]).sort((a, b) =>
                a > b ? 1 : -1
            );
            assert.deepEqual(result, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
        });

        it('dfs traversal in graph [function api]', () => {
            const result: number[] = [];
            dfsTraverse(
                0,
                [...graph.edges],
                result,
                new Map<number, boolean>()
            );

            assert.deepEqual(
                result.sort((a, b) => (a > b ? 1 : -1)),
                [0, 1, 2, 3, 4, 5, 6, 7, 8]
            );
        });
    });

    describe('problems', () => {
        it('calculate number of minutes (problem#3) solution 1', () => {
            assert.equal(
                calculateNumberOfMinutes(
                    [2, 2, 4, 6, -1, 4, 4, 5],
                    [0, 0, 4, 0, 7, 3, 6, 0]
                ),
                13
            );
        });

        it('calculate number of minutes (problem#3) solution 2', () => {
            assert.equal(
                calculateNumberOfMinutes2(
                    8,
                    4,
                    [2, 2, 4, 6, -1, 4, 4, 5],
                    [0, 0, 4, 0, 7, 3, 6, 0]
                ),
                13
            );
        });

        it('calculate number of minutes (problem#3) solution 2', () => {
            assert.equal(
                calculateNumberOfMinutes3(
                    8,
                    4,
                    [2, 2, 4, 6, -1, 4, 4, 5],
                    [0, 0, 4, 0, 7, 3, 6, 0]
                ),
                13
            );
        });
    });
});
