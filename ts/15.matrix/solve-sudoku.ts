function getBoxId(row: number, col: number) {
    const c = Math.floor(col / 3);
    const r = Math.floor(row / 3) * 3;

    return c + r;
}

export function solveSudoku(matrix: number[][]) {
    const n = matrix.length;
    const rows = Array(n);
    const cols = Array(n);
    const boxes = Array(n);

    for (let i = 0; i < n; i++) {
        rows[i] = new Map<number, boolean>();
        cols[i] = new Map<number, boolean>();
        boxes[i] = new Map<number, boolean>();
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const item = matrix[row][col];
            if (item !== 0) {
                rows[row].set(item, true);
                cols[col].set(item, true);
                boxes[getBoxId(row, col)].set(item, true);
            }
        }
    }

    recursive(matrix, rows, cols, boxes, 0, 0);

    console.log(matrix);
    return matrix;
}

function recursive(
    matrix: number[][],
    rows: Map<number, boolean>[],
    cols: Map<number, boolean>[],
    boxes: Map<number, boolean>[],
    row: number,
    col: number
) {
    if (row === matrix.length || col === matrix[0].length) {
        return true;
    }

    if (matrix[row][col] == 0) {
        for (let i = 1; i <= matrix.length; i++) {
            matrix[row][col] = i;

            if (isValid(rows[row], cols[col], boxes[getBoxId(row, col)], i)) {
                let nextRow = col + 1 > matrix.length - 1 ? row + 1 : row;
                let nextCol = col + 1 > matrix.length - 1 ? 1 : col + 1;
                recursive(matrix, rows, cols, boxes, nextRow, nextCol);
                return;
            }

            matrix[row][col] = 0;
        }
    }

    const item = matrix[row][col];
    if (
        rows[row].get(item) ||
        cols[col].get(item) ||
        boxes[getBoxId(row, col)].get(item)
    ) {
        return;
    }

    rows[row].set(item, true);
    cols[col].set(item, true);
    boxes[getBoxId(row, col)].set(item, true);
}

function isValid(
    rows: Map<number, boolean>,
    cols: Map<number, boolean>,
    boxes: Map<number, boolean>,
    value: number
) {
    return !boxes.get(value) || !rows.get(value) || !cols.get(value);
}
