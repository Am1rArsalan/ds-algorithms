export function dfsTraverse<T extends number>(
    vertex: T,
    edges: T[][],
    result: T[],
    seen: Map<number, boolean>
) {
    if (seen.get(vertex)) return;

    result.push(vertex);
    seen.set(vertex, true);

    const connections = edges[vertex];

    for (let i = 0; i < connections.length; ++i) {
        const connection = connections[i];

        if (!seen.get(connection)) {
            dfsTraverse(connection, edges, result, seen);
        }
    }
}
