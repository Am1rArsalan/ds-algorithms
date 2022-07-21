export function sortedSquared(arr: number[]) {
    const result = new Array(arr.length).fill(0);
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let current = arr.length - 1;

    while (startIndex <= endIndex && current >= 0) {
        if (Math.abs(arr[startIndex]) >= Math.abs(arr[endIndex])) {
            result[current] = arr[startIndex] ** 2;
            startIndex++;
        } else if (Math.abs(arr[endIndex]) > Math.abs(arr[startIndex])) {
            result[current] = arr[endIndex] ** 2;
            endIndex--;
        }

        current--;
    }

    return result;
}
