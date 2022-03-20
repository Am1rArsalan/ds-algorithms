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

export function canFinishCourse(
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
