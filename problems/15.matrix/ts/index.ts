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

    // top
    if (arr[row - 1] && arr[row - 1][col] && !seen[row - 1][col]) {
        dfs(arr, row - 1, col, seen, result);
    }

    //right
    if (arr[row] && arr[row][col + 1] && !seen[row][col + 1]) {
        dfs(arr, row, col + 1, seen, result);
    }

    // bottom
    if (arr[row + 1] && arr[row + 1][col] && !seen[row + 1][col]) {
        dfs(arr, row + 1, col, seen, result);
    }

    // left
    if (arr[row] && arr[row][col - 1] && !seen[row][col - 1]) {
        dfs(arr, row, col - 1, seen, result);
    }
}

export function traverseTwoDimensionalArray<T extends number>(arr: T[][]) {
    const seenItems: boolean[][] = Array.from(
        { length: arr.length },
        (item, index) => {
            return Array.from<boolean>({ length: arr[index].length }).fill(
                false
            );
        }
    );
    const result: T[] = [];

    dfs(arr, 0, 0, seenItems, result);

    return result;
}
