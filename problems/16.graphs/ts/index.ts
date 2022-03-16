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

export function bfsTraverse<T extends number>(edges: T[][]) {
    let queue = [0];
    let result = [];
    result.push(0);
    let seen = new Map<number, boolean>();
    seen.set(0, true);

    while (queue.length > 0) {
        const vertex = queue.shift() as T;
        let connections = edges[vertex];

        for (let i = 0; i < connections.length; ++i) {
            const connection = connections[i];

            if (!seen.get(connection)) {
                result.push(connection);
                queue.push(connection);
                seen.set(connection, true);
            }
        }
    }

    return result;
}
