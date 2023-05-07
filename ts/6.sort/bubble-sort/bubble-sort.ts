// o(n^2) 
export function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; ++i) {
        let end = arr.length - i;
        for (let j = 0; j < end; ++j) {

            if (arr[j + 1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
