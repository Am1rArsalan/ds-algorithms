// o(N^2) 
export function insertionSort(arr: number[]) {
    if (arr.length < 2) return;

    for (let j = 0; j < arr.length; j++) {
        let keyIndex = j + 1
        if (keyIndex >= arr.length) break;

        let key = arr[keyIndex];

        for (let i = keyIndex - 1; i >= 0; i--) {
            let L = arr[i];

            if (L > key) {
                const temp = arr[i];
                arr[keyIndex] = temp;
                arr[i] = key;

                // change the key 
                keyIndex = keyIndex - 1;
                key = arr[keyIndex];
            }
        }
    }
}
