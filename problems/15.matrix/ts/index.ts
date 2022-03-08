const directions = [
    [-1, 0],
    [0, +1],
    [+1, 0],
    [0, -1],
];

export function dfs<T>(
    arr: T[][],
    row: number,
    col: number,
    seen: boolean[][],
    result: T[]
): void {
    if (row < 0 || col < 0 || row >= arr.length || col >= arr[0].length) {
        return;
    }

    result.push(arr[row][col]);
    seen[row][col] = true;

    for (let i = 0; i < directions.length; ++i) {
        const direction = directions[i];
        if (
            arr[row + direction[0]] &&
            arr[row + direction[0]][col + direction[1]] &&
            !seen[row + direction[0]][col + direction[1]]
        ) {
            dfs(arr, row + direction[0], col + direction[1], seen, result);
        }
    }
}

export function traverseTwoDimensionalArray<T extends number>(arr: T[][]) {
    const seenItems: boolean[][] = Array.from(
        { length: arr.length },
        (_, index) => {
            return Array.from<boolean>({ length: arr[index].length }).fill(
                false
            );
        }
    );
    const result: T[] = [];

    dfs(arr, 0, 0, seenItems, result);

    return result;
}
