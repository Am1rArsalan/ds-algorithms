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

export function dfsTraverse<T>(matrix: T[][]) {
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
