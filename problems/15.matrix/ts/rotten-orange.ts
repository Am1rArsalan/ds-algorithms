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
            let tempRow = row + direction[0];
            let tempCol = col + direction[1];
            if (
                matrix[tempRow] &&
                matrix[tempRow][tempCol] !== undefined &&
                !seen[tempRow][tempCol]
            ) {
                queue.push([tempRow, tempCol]);
                seen[tempRow][tempCol] = true;
                matrix[tempRow][tempCol] === 2 &&
                    result.push([tempRow, tempCol]);
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
            let tempRow = row + direction[0];
            let tempCol = col + direction[1];
            if (
                matrix[tempRow] &&
                matrix[tempRow][tempCol] !== undefined &&
                !seen[tempRow][tempCol]
            ) {
                queue.push([tempRow, tempCol]);
                seen[tempRow][tempCol] = true;
                if (matrix[tempRow][tempCol] === 1) {
                    result += 1;
                }
            }
        }
    }

    return result;
}

export function timeTakeToRotten(matrix: number[][]) {
    let queue = findRottenOranges(matrix);
    let queueLength = queue.length;
    let minutes = 0;
    let numberOfFreshOranges = countNumberOfFreshOranges(matrix);

    while (queue.length > 0) {
        queueLength--;
        let coordinate = queue.shift() as [number, number];
        let row = coordinate[0];
        let col = coordinate[1];

        if (queueLength === 0) {
            queueLength = queue.length;
            minutes += 1;
        }

        for (let i = 0; i < directions.length; i++) {
            let direction = directions[i];
            let tempRow = row + direction[0];
            let tempCol = col + direction[1];

            if (
                matrix[tempRow] &&
                matrix[tempRow][tempCol] !== undefined &&
                matrix[tempRow][tempCol] === 1
            ) {
                numberOfFreshOranges -= 1;
                matrix[tempRow][tempCol] = 2;
                queue.push([tempRow, tempCol]);
            }
        }
    }

    return numberOfFreshOranges > 0 ? -1 : minutes;
}
