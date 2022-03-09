const directions = [
    [-1, 0],
    [0, +1],
    [+1, 0],
    [0, -1],
];

export function dfs<T>(
    matrix: T[][],
    row: number,
    col: number,
    seen: boolean[][],
    result: T[]
): void {
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
        return;
    }

    result.push(matrix[row][col]);
    seen[row][col] = true;

    for (let i = 0; i < directions.length; ++i) {
        const direction = directions[i];
        if (
            matrix[row + direction[0]] &&
            matrix[row + direction[0]][col + direction[1]] &&
            !seen[row + direction[0]][col + direction[1]]
        ) {
            dfs(matrix, row + direction[0], col + direction[1], seen, result);
        }
    }
}

export function traverseTwoDimensionalArray<T>(matrix: T[][]) {
    const seenItems: boolean[][] = Array.from(
        { length: matrix.length },
        (_, index) => {
            return Array.from<boolean>({ length: matrix[index].length }).fill(
                false
            );
        }
    );
    const result: T[] = [];

    dfs(matrix, 0, 0, seenItems, result);

    return result;
}

export function bfsTraverseTwoDimensionalArray<T>(matrix: T[][]) {
    const seen: boolean[][] = Array.from(
        { length: matrix.length },
        (_, index) => {
            return Array.from<boolean>({ length: matrix[index].length }).fill(
                false
            );
        }
    );
    let row = Math.ceil((matrix.length - 1) / 2);
    let col = Math.ceil((matrix[0].length - 1) / 2);
    let queue = [matrix[row][col]];
    let result = [matrix[row][col]];

    while (queue.length > 0) {
        if (queue.length === 4) {
            row = row - 1;
        } else if (queue.length === 3) {
            col = col + 1;
        } else if (queue.length === 2) {
            row = row + 1;
        } else if (queue.length === 2) {
            col = col - 1;
        }

        queue.shift();

        for (let i = 0; i < 4; i++) {
            const direction = directions[i];

            if (
                row + direction[0] < 0 ||
                row + direction[0] >= matrix.length ||
                col + direction[1] < 0 ||
                col + direction[1] >= matrix[0].length ||
                seen[row + direction[0]][col + direction[1]]
            ) {
                continue;
            }

            if (!seen[row + direction[0]][col + direction[1]]) {
                queue.push(matrix[row + direction[0]][col + direction[1]]);
                result.push(matrix[row + direction[0]][col + direction[1]]);
                seen[row + direction[0]][col + direction[1]] = true;
            }
        }
    }

    return result;
}
