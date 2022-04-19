const directions = [
    [-1, 0],
    [0, +1],
    [+1, 0],
    [0, -1],
];

export function bfsTraverse<T>(matrix: T[][]) {
    const seen: boolean[][] = Array.from(
        { length: matrix.length },
        (_, index) => {
            return Array.from<boolean>({ length: matrix[index].length }).fill(
                false
            );
        }
    );
    let initialRow = Math.ceil((matrix.length - 1) / 2);
    let initialCol = Math.ceil((matrix[0].length - 1) / 2);
    let queue = [[initialRow, initialCol]];
    let result = [matrix[initialRow][initialCol]];
    seen[initialRow][initialCol] = true;

    while (queue.length > 0) {
        const [row, col] = queue.shift() as [number, number];

        for (let i = 0; i < directions.length; ++i) {
            let direction = directions[i];
            if (
                matrix[row + direction[0]] &&
                matrix[row + direction[0]][col + direction[1]] &&
                !seen[row + direction[0]][col + direction[1]]
            ) {
                const element = matrix[row + direction[0]][col + direction[1]];
                result.push(element);
                queue.push([row + direction[0], col + direction[1]]);
                seen[row + direction[0]][col + direction[1]] = true;
            }
        }
    }
    return result;
}
