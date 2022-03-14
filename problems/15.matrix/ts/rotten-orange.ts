const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

export function findRottenOrangesAndCountFresh(matrix: number[][]) {
    let initialRow = Math.ceil((matrix.length - 1) / 2);
    let initialCol = Math.ceil((matrix[0].length - 1) / 2);
    let queue = [[initialRow, initialCol]];
    let seen = Array.from({ length: matrix.length }, () =>
        Array<boolean>(matrix[0].length).fill(false)
    );
    const result = [];
    let count = 0;
    if (matrix[initialRow][initialCol] === 2) {
        result.push([initialRow, initialCol]);
    }
    seen[initialRow][initialCol] = true;

    while (queue.length > 0) {
        let coordinate = queue.shift() as [number, number];
        let row = coordinate[0];
        let col = coordinate[1];

        for (let i = 0; i < directions.length; i++) {
            let direction = directions[i];
            if (
                matrix[row + direction[0]] &&
                matrix[row + direction[0]][col + direction[1]] !== undefined &&
                !seen[row + direction[0]][col + direction[1]]
            ) {
                queue.push([row + direction[0], col + direction[1]]);
                seen[row + direction[0]][col + direction[1]] = true;
                matrix[row + direction[0]][col + direction[1]] === 2 &&
                    result.push([row + direction[0], col + direction[1]]);

                if (matrix[row + direction[0]][col + direction[1]] === 1) {
                    count++;
                }
            }
        }
    }

    return { q: result, numberOfFreshOranges: count };
}

export function timeTakeToRotten(matrix: number[][]) {
    if (matrix.length === 0) return 0;

    let queue = findRottenOrangesAndCountFresh(matrix).q;
    let numberOfFreshOranges =
        findRottenOrangesAndCountFresh(matrix).numberOfFreshOranges;
    let minutes = 0;
    let queueLength = queue.length;
    while (queue.length > 0) {
        queueLength -= 1;
        let coordinate = queue.shift() as [number, number];
        let row = coordinate[0];
        let col = coordinate[1];
        for (let i = 0; i < directions.length; i++) {
            let direction = directions[i];
            if (
                matrix[row + direction[0]] &&
                matrix[row + direction[0]][col + direction[1]] !== undefined &&
                matrix[row + direction[0]][col + direction[1]] === 1
            ) {
                numberOfFreshOranges -= 1;
                matrix[row + direction[0]][col + direction[1]] = 2;
                queue.push([row + direction[0], col + direction[1]]);
            }
        }

        if (queueLength === 0 && queue.length > 0) {
            queueLength = queue.length;
            minutes += 1;
        }
    }

    return numberOfFreshOranges > 0 ? -1 : minutes;
}
