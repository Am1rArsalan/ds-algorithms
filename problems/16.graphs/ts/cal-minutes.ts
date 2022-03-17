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
