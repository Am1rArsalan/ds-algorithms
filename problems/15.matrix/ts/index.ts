export function dfs<T>(arr: T[][], row: number, col: number, seen: Set<T>) {
    if (arr[row][col] === undefined) {
        return seen;
    }

    seen.add(arr[row][col]);

    if (arr[row - 1] && arr[row - 1][col] && !seen.has(arr[row - 1][col])) {
        dfs(arr, row - 1, col, seen);
    } else if (arr[row] && arr[row][col + 1] && !seen.has(arr[row][col + 1])) {
        dfs(arr, row, col + 1, seen);
    } else if (
        arr[row + 1] &&
        arr[row + 1][col] &&
        !seen.has(arr[row + 1][col])
    ) {
        dfs(arr, row + 1, col, seen);
    } else if (arr[row] && arr[row][col - 1] && !seen.has(arr[row][col - 1])) {
        dfs(arr, row, col - 1, seen);
    }
}

export function traverseTwoDimensionalArray<T extends number>(arr: T[][]) {
    let seenItems = new Set<T>();
    dfs(arr, 0, 0, seenItems);

    return seenItems;
}
