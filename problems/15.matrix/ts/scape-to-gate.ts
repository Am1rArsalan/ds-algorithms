const Empty = Infinity;
const Wall = -1;
const Gate = 0;

const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

// dfs
export function calculateStepsToGate(
    matrix: number[][],
    row: number,
    col: number,
    steps: number
) {
    if (
        row >= matrix.length ||
        row < 0 ||
        col >= matrix[0].length ||
        col < 0 ||
        steps > matrix[row][col]
    ) {
        return;
    }

    matrix[row][col] = steps;

    for (let i = 0; i < directions.length; ++i) {
        let direction = directions[i];
        let directionRow = row + direction[0];
        let directionCol = col + direction[1];

        if (
            matrix[directionRow] &&
            matrix[directionRow][directionCol] !== undefined &&
            matrix[directionRow][directionCol] !== Wall &&
            matrix[directionRow][directionCol] !== Gate
        ) {
            calculateStepsToGate(matrix, directionRow, directionCol, steps + 1);
        }
    }
}

// bfs
export function scapeToGate(matrix: number[][]) {
    const initialRow = Math.ceil((matrix.length - 1) / 2);
    const initialCol = Math.ceil((matrix[0].length - 1) / 2);
    let seen = Array.from({ length: matrix.length }, (_, i: number) =>
        Array<boolean>(matrix[i].length).fill(false)
    );
    seen[initialRow][initialCol] = true;
    let queue = [[initialRow, initialCol]];
    matrix[initialRow][initialCol] === Gate &&
        calculateStepsToGate(matrix, initialRow, initialCol, 0);

    while (queue.length > 0) {
        // o(CONSTANT
        let coordinate = queue.shift() as [number, number];
        let row = coordinate[0];
        let col = coordinate[1];

        for (let i = 0; i < directions.length; ++i) {
            let direction = directions[i];
            let tempRow = row + direction[0];
            let tempCol = col + direction[1];

            if (
                matrix[tempRow] &&
                matrix[tempRow][tempCol] !== undefined &&
                !seen[tempRow][tempCol]
            ) {
                if (matrix[tempRow][tempCol] === Gate) {
                    calculateStepsToGate(matrix, tempRow, tempCol, 0);
                }
                queue.push([tempRow, tempCol]);
                seen[tempRow][tempCol] = true;
            }
        }
    }

    console.log('final matrix is', matrix);
    return matrix;
}
