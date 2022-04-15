import { binarySearch } from './';

type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends (
    ...a: infer X
) => void
    ? X
    : never;
type GrowToSize<T, A extends Array<T>, N extends number> = {
    0: A;
    1: GrowToSize<T, Grow<T, A>, N>;
}[A['length'] extends N ? 0 : 1];
type FixedArray<T, N extends number> = GrowToSize<T, [], N>;

//o(log(N));
export function findDomainForGivenTarget(
    arr: number[],
    target: number
): FixedArray<number, 2> {
    if (arr.length <= 0) return [-1, -1];
    const firstIndex = binarySearch(arr, target, 0, arr.length);
    if (firstIndex == -1) return [-1, -1];

    let start = firstIndex,
        end = firstIndex;
    let temp1 = -1,
        temp2 = -1;

    while (start !== -1) {
        temp1 = start;
        start = binarySearch(arr, target, 0, start - 1);
    }
    start = temp1;

    while (end !== -1) {
        temp2 = end;
        end = binarySearch(arr, target, end + 1, arr.length - 1);
    }
    end = temp2;

    return [start, end];
}

// o(N)
export function findDomainForGivenTargetWithoutBinarySearch(
    arr: number[],
    target: number
): FixedArray<number, 2> {
    const result = new Array<number>(2).fill(0) as FixedArray<number, 2>;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target && result[0] == 0) {
            result[0] = i;
        } else if (arr[i] === target && result[1] < i) {
            result[1] = i;
        }
    }

    return result;
}
