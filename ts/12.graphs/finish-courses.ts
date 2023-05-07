function generateAdjList(numberOfCourses: number, prerequisites: number[][]) {
    let adjList: number[][] = Array.from({ length: numberOfCourses }, () => []);
    for (let i = 0; i < prerequisites.length; i++) {
        const course = prerequisites[i][0];
        const prerequisite = prerequisites[i][1];
        adjList[prerequisite].push(course);
    }
    return adjList;
}

export function detectCycle(vertex: number, adjList: number[][]) {
    const queue: number[] = [...adjList[vertex]];
    const seen = new Map<number, boolean>();
    let isCycle = false;

    while (queue.length > 0) {
        const current = queue.shift() as number;
        seen.set(current, true);
        if (current === vertex) {
            isCycle = true;
            break;
        }

        const connections = adjList[current];

        for (let i = 0; i < connections.length; ++i) {
            if (!seen.get(connections[i])) {
                queue.push(connections[i]);
            }
        }
    }

    return isCycle;
}

export function canFinishCourses(
    numberOfCourses: number,
    prerequisites: number[][]
) {
    const adjList = generateAdjList(numberOfCourses, prerequisites);

    for (let vertex = 0; vertex < numberOfCourses; vertex++) {
        if (detectCycle(vertex, adjList)) {
            return false;
        }
    }

    return true;
}

// solving problem with Topological sort
export function canFinishCourses2(
    numberOfCourses: number,
    prerequisites: number[][]
) {
    const adjList = Array.from({ length: numberOfCourses }, () =>
        Array<number>()
    );
    const inDegrees = Array.from({ length: numberOfCourses }, () => 0);
    for (let i = 0; i < prerequisites.length; ++i) {
        const pair = prerequisites[i];
        const course = pair[0];
        const prerequisite = pair[1];
        inDegrees[course]++;
        adjList[prerequisite].push(course);
    }
    const stack = [];
    for (let i = 0; i < inDegrees.length; ++i) {
        if (inDegrees[i] == 0) {
            stack.push(i);
        }
    }

    let count = 0;
    while (stack.length > 0) {
        count++;
        const current = stack.pop() as number;
        const connections = adjList[current];

        for (let i = 0; i < connections.length; ++i) {
            const connection = connections[i];

            inDegrees[connection]--;
            if (inDegrees[connection] === 0) {
                stack.push(connection);
            }
        }
    }
    return count === numberOfCourses;
}
