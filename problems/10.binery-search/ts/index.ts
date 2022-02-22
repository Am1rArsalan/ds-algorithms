

 

type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends (
    ...a: infer X
) => void
    ? X
    : never;
type GrowToSize<T, A extends Array<T>, N extends number> = {
    0: A;
    1: GrowToSize<T, Grow<T, A>, N>;
}[A["length"] extends N ? 0 : 1];
type FixedArray<T, N extends number> = GrowToSize<T, [], N>;

//o(log(N));
export function findDomainForGivenTarget(
    arr: number[],
    target: number
): FixedArray<number, 2> {
    if (arr.length <= 0)  return [-1,-1];
    const firstIndex = binarySearch(arr,target,0, arr.length); 
    if (firstIndex == -1) return [-1,-1];

    let start = firstIndex,end = firstIndex;
    let temp1 = -1 ,temp2 = -1 ; 

    while (start !== -1) { 
        temp1 = start ; 
        start = binarySearch(arr,target, 0, start - 1); 
    }
    start = temp1; 

    while (end !== -1) { 
        temp2 = end ; 
        end = binarySearch(arr,target,end + 1, arr.length - 1) ; 
    }
    end = temp2;

    return [start,end];
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

export function binarySearch(arr: number[],target: number,left=0,right:number): number {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else  {
            left = mid + 1;
        }
    }
    return -1;
}

export function recursionBinarySearch(
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
            return recursionBinarySearch(arr, left, mid - 1, target);
        } else if (target > arr[mid]) {
            return recursionBinarySearch(arr, mid + 1, right, target);
        }
    }

    return -1;
}

export function findIndexByRecursionBinarySearch(
    arr: number[],
    target: number
): number {
    return recursionBinarySearch(arr, 0, arr.length - 1, target);
}



