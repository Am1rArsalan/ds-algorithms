const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

export function findRottenOranges(matrix: number[][]) {
    let initialRow = Math.ceil((matrix.length - 1) / 2);
    let initialCol = Math.ceil((matrix[0].length - 1) / 2);
    let queue = [[initialRow, initialCol]];
    let seen = Array.from({ length: matrix.length }, () =>
        Array<boolean>(matrix[0].length).fill(false)
    );
    const result = [];
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
            }
        }
    }

    return result;
}

function countNumberOfFreshOranges(matrix: number[][]) {
    let initialRow = Math.ceil((matrix.length - 1) / 2);
    let initialCol = Math.ceil((matrix[0].length - 1) / 2);
    let queue = [[initialRow, initialCol]];
    let seen = Array.from({ length: matrix.length }, () =>
        Array<boolean>(matrix[0].length).fill(false)
    );
    let result = 0;
    if (matrix[initialRow][initialCol] === 1) {
        result += 1;
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
                if (matrix[row + direction[0]][col + direction[1]] === 1) {
                    result += 1;
                }
            }
        }
    }

    return result;
}

export function timeTakeToRotten(matrix: number[][]) {
    let queue = findRottenOranges(matrix);
    let minutes = 0;
    let numberOfFreshOranges = countNumberOfFreshOranges(matrix); //
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
