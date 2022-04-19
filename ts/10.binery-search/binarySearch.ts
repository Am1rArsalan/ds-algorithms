export function binarySearch(
    arr: number[],
    target: number,
    left = 0,
    right: number
): number {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

export function bs(
    arr: number[],
    left: number,
    right: number,
    target: number
): number {
    const mid = Math.floor((right + left) / 2);
    if (left <= right) {
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            return bs(arr, left, mid - 1, target);
        } else if (target > arr[mid]) {
            return bs(arr, mid + 1, right, target);
        }
    }

    return -1;
}

export function recursiveBinarySearch(arr: number[], target: number): number {
    return bs(arr, 0, arr.length - 1, target);
}
