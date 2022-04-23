function swap(arr: number[], i: number, j: number) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function partition(arr: number[], left: number, right: number) {
    const pivotValue = arr[right];
    let partitionIndex = left - 1;

    for (let i = left; i < right; i++) {
        if (pivotValue > arr[i]) {
            ++partitionIndex;
            swap(arr, partitionIndex, i);
        }
    }

    swap(arr, partitionIndex + 1, right);
    return partitionIndex + 1;
}

export function quickSelect(
    arr: number[],
    left: number,
    right: number,
    indexToFind: number
): number {
    if (left >= right) {
        return arr[indexToFind];
    }

    const partitionIndex = partition(arr, left, right);

    if (partitionIndex === indexToFind) {
        return arr[indexToFind];
    } else if (partitionIndex > indexToFind) {
        return quickSelect(arr, left, partitionIndex - 1, indexToFind);
    } else {
        return quickSelect(arr, partitionIndex + 1, right, indexToFind);
    }
}

export function returnKthLargestElement(arr: number[], k: number) {
    return quickSelect(arr, 0, arr.length - 1, arr.length - k);
}
