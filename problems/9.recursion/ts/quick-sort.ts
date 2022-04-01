function swap(arr: number[], i: number, j: number) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function partition(arr: number[], left: number, right: number) {
    let partitionIndex = left - 1;
    const pivotValue = arr[right];

    for (let i = left; i < right; i++) {
        if (pivotValue > arr[i]) {
            partitionIndex++;
            swap(arr, partitionIndex, i);
        }
    }

    swap(arr, partitionIndex + 1, right);
    return partitionIndex + 1;
}

export function quickSort(arr: number[], left: number, right: number) {
    if (left >= right) {
        return;
    }

    const partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
}
