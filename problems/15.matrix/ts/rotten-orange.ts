const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

function hasAnyFreshOrange(matrix: number[][]) {
    if (matrix.length === 0) return false;

    let initialRow = Math.ceil((matrix.length - 1) / 2);
    let initialCol = Math.ceil((matrix[0].length - 1) / 2);

    let queue = [[initialRow, initialCol]];
    let seen = Array.from({ length: matrix.length }, () =>
        Array<boolean>(matrix[0].length).fill(false)
    );

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
                if (matrix[tempRow][tempCol] === 1) {
                    return true;
                }
                queue.push([tempRow, tempCol]);
                seen[tempRow][tempCol] = true;
            }
        }
    }

    return false;
}

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

function rottFereshNeighborsOranges(matrix: number[][], queue: number[][]) {
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
                matrix[tempRow][tempCol] === 1
            ) {
                matrix[tempRow][tempCol] = 2;
            }
        }
    }
}

export function timeTakeToRotten(matrix: number[][]) {
    let minutes = 0;

    while (hasAnyFreshOrange(matrix)) {
        if (minutes > matrix.length * matrix[0].length) {
            minutes = -1;
            break;
        }
        let rottenOranges = findRottenOranges(matrix);
        rottFereshNeighborsOranges(matrix, rottenOranges);
        minutes += 1;
    }

    return minutes;
}
