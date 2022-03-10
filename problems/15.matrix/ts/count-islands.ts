const directions = [
    [-1, 0],
    [0, +1],
    [+1, 0],
    [0, -1],
];

function bfs(matrix: number[][], initialRow: number, initialCol: number) {
    let queue = [[initialRow, initialCol]];

    while (queue.length > 0) {
        let coordinate = queue.shift() as [number, number];
        let row = coordinate[0];
        let col = coordinate[1];

        for (let i = 0; i < directions.length; i++) {
            let direction = directions[i];
            let tempRow = row + direction[0];
            let tempCol = col + direction[1];
            if (matrix[tempRow] && matrix[tempRow][tempCol] > 0) {
                queue.push([tempRow, tempCol]);
                matrix[tempRow][tempCol] = 0;
            }
        }
    }
}

export function dfs(
    matrix: number[][],
    row: number,
    col: number,
    total: number[],
    seen: boolean[][]
) {
    // kill condition
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
        return;
    }

    // finding the total
    if (matrix[row][col] === 1) {
        total.push(1);
        bfs(matrix, row, col);
    }

    for (let i = 0; i < directions.length; ++i) {
        let direction = directions[i];
        let tempRow = direction[0] + row;
        let tempCol = direction[1] + col;

        if (
            matrix[tempRow] &&
            matrix[tempRow][tempCol] !== undefined &&
            !seen[tempRow][tempCol]
        ) {
            seen[tempRow][tempCol] = true;
            dfs(matrix, tempRow, tempCol, total, seen);
        }
    }
}

export function countIslands(matrix: number[][]) {
    if (matrix.length <= 0) return 0;
    let total: number[] = [];
    let seen = Array.from({ length: matrix.length }, () => {
        return Array.from<boolean>({ length: matrix[0].length }).fill(false);
    });

    dfs(matrix, 0, 0, total, seen);

    return total.length;
}
