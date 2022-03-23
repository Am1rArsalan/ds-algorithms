import { PriorityQueueImpl } from './utils/PriorityQueueImpl';

export function networkDelay(times: number[][], k: number, n: number) {
    const adjList = Array.from({ length: n }, () => Array<number[]>());
    const delays = Array.from({ length: n }, () => Infinity);

    for (let i = 0; i < times.length; i++) {
        const [S, T, W] = times[i];
        adjList[S - 1].push([T - 1, W]);
    }
    delays[k - 1] = 0;

    const heap = new PriorityQueueImpl([], (a, b) => delays[a] < delays[b]);
    heap.insert(k - 1);

    while (!heap.isEmpty()) {
        const current = heap.pop();
        if (current === undefined) break;
        const connections = adjList[current];

        for (let i = 0; i < connections.length; i++) {
            const [connection, weight] = connections[i];
            if (
                connection !== undefined &&
                weight + delays[current] < delays[connection]
            ) {
                delays[connection] = weight + delays[current];
                heap.insert(connection);
            }
        }
    }

    return Math.max.apply(null, delays) === Infinity
        ? -1
        : Math.max.apply(null, delays);
}
