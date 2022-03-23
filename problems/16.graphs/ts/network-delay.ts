export function timeToReceiveSignal(times: number[][], k: number, n: number) {
    const adjList = Array.from({ length: n + 1 }, () => Array<number>());

    for (let i = 0; i < times.length; i++) {
        let [from, to] = times[i];
        adjList[from].push(to);
    }
    console.log('adjList', adjList);

    let result = [k];
    let queue = [k];
    let seen = new Map<number, boolean>();
    seen.set(2, true);

    while (queue.length > 0) {
        const vertex = queue.shift() as number;
        const connections = adjList[vertex];
        for (let i = 0; i < connections.length; ++i) {
            const connection = connections[i];
            if (!seen.get(connection)) {
                result.push(connection);
                queue.push(connection);
            }
            seen.set(connection, true);
        }
    }
    console.log(result);

    // if the graph is unconnected then return -1
    if (result.length !== n) {
        return -1;
    }
    const timeToTraverse = Array.from({ length: n + 1 }, () => Infinity);
    timeToTraverse[1] = 0;

    // traverse the signal
    sendSignal(times, k, adjList, timeToTraverse);

    return 10;
}
// from
// adjList [ [], [ 2, 4 ], [ 5 ], [ 2, 1 ], [ 2, 5 ], [ 3 ] ]
//    [1, 2, 9],
//    [1, 4, 2],
//    [2, 5, 1],
//    [4, 2, 4],
//    [4, 5, 6],
//    [3, 2, 3],
//    [5, 3, 7],
//    [3, 1, 5],

export function sendSignal(
    times: number[][],
    k: number,
    adjList: number[][],
    timeToTraverse: number[]
) {
    // kill condition
    const connections = adjList[k];
    //[ 2, 4 ]

    for (let i = 0; i < connections.length; ++i) {
        // 2
        const connection = connections[i];
        // [ I , 0, I, I , I, I ]
        // k= 1 , conn = 2
        const foundedIndex = times.findIndex((time) => {
            return time[0] == k && time[1] == connection;
        });

        if (foundedIndex !== -1) {
            const [_, _, weight] = times[foundedIndex];
            if (timeToTraverse[connection] > weight)
                timeToTraverse[connection] = weight;
        }
    }

    return 10;
}
