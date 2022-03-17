export function calculateNumberOfMinutes(
    managers: number[],
    informTime: number[]
) {
    const headId = managers.findIndex((manager) => manager === -1);
    let result = 0;
    const queue = [headId];
    let queueLength = queue.length;
    let times = [];
    const seen = new Map<number, boolean>();
    seen.set(headId, true);
    result += informTime[headId];

    while (queue.length > 0) {
        const vertex = queue.shift() as number;
        queueLength -= 1;
        let connections = [];
        managers[vertex] !== -1 &&
            managers[vertex] !== vertex &&
            connections.push(managers[vertex]);
        connections = [
            ...connections,
            ...managers
                .map((manager, index) => (manager === vertex ? index : -1))
                .filter((item) => item !== -1),
        ];

        for (let i = 0; i < connections.length; i++) {
            const connection = connections[i];
            if (!seen.get(connection) && informTime[connection]) {
                times.push(informTime[connection]);
                queue.push(connection);
            }
            seen.set(connection, true);
        }

        if (queueLength === 0) {
            const timeForLevel =
                times.length > 0 ? Math.max.apply(null, [...times]) : 0;
            times = [];
            result += timeForLevel;
            queueLength = queue.length;
        }
    }

    return result;
}

export function calculateNumberOfMinutes2(
    n: number,
    headId: number,
    managers: number[],
    informTime: number[]
) {
    let adjList: number[][] = managers.map(() => []);
    for (let i = 0; i < n; ++i) {
        if (managers[i] === -1) continue;
        adjList[managers[i]].push(i);
    }
    let result = 0;
    let queue = [headId];
    result += informTime[headId] > 0 ? informTime[headId] : 0;
    let seen = new Map<number, boolean>();
    seen.set(headId, true);
    let queueLength = queue.length;
    let times = [];

    while (queue.length > 0) {
        let vertex = queue.shift() as number;
        --queueLength;
        let connections = adjList[vertex];
        for (let i = 0; i < connections.length; ++i) {
            if (!seen.get(connections[i]) && informTime[connections[i]]) {
                times.push(informTime[connections[i]]);
                queue.push(connections[i]);
                seen.set(connections[i], true);
            }
        }

        if (queueLength === 0) {
            let timeForLevel =
                times.length > 0 ? Math.max.apply(null, times) : 0;
            result += timeForLevel;
            times = [];
            queueLength = queue.length;
        }
    }

    return result;
}

export function levelMinutes(
    currentId: number,
    adjList: number[][],
    informTime: number[]
) {
    if (adjList[currentId].length === 0) return 0;

    let max = 0;
    let current = adjList[currentId];

    for (let i = 0; i < current.length; ++i) {
        max = Math.max.apply(null, [
            max,
            levelMinutes(current[i], adjList, informTime),
        ]);
    }

    return max + informTime[currentId];
}

export function calculateNumberOfMinutes3(
    n: number,
    headId: number,
    managers: number[],
    informTime: number[]
) {
    let adjList: number[][] = managers.map(() => []);
    for (let i = 0; i < n; ++i) {
        if (managers[i] === -1) continue;
        adjList[managers[i]].push(i);
    }

    return levelMinutes(headId, adjList, informTime);
}
