function isSorted(arr: number[]) {
    let isSorted = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i + 1]) {
            if (arr[i + 1] < arr[i]) {
                isSorted = false;
                break;
            }
        }
    }

    return isSorted;
}

export function validateSubsequences(arr: number[], innerArr: number[]) {
    let isValid = true;
    let seen = new Map<number, number>();

    for (let i = 0; i < innerArr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            if (innerArr[i] == arr[j]) {
                seen.set(innerArr[i], j);
            }
        }
    }

    if (seen.size !== innerArr.length) {
        isValid = false;
    } else if (!isSorted([...seen.values()])) {
        isValid = false;
    }

    return isValid;
}
