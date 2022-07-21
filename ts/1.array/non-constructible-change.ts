export function nonConstructibleChange(arr: number[]) {
    arr.sort((a, b) => {
        return a > b ? 1 : -1;
    });

    let change = 0;
    for (let i = 0; i < arr.length; ++i) {
        let num = arr[i];
        if (change + 1 < num) {
            return change + 1;
        }
        change += num;
    }

    return change + 1;
}
