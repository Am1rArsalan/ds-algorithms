export function validateSubsequences(arr: number[], innerArr: number[]) {
    let innerArrIndex = 0;

    for (
        let arrIndex = 0;
        innerArrIndex < innerArr.length && arrIndex < arr.length;
        arrIndex++
    ) {
        if (arr[arrIndex] == innerArr[innerArrIndex]) {
            innerArrIndex++;
        }
    }

    return innerArrIndex === innerArr.length;
}
