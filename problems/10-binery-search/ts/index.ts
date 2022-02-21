export function findDomainForGivenTarget(
  arr: number[],
  target: number
): [number, number] {
  let left = 0;
  let right = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      if (arr[mid + 1] === target) {
        //
      }
      if (arr[mid - 1] === target) {
        //
      }
    } else if (arr[mid] > target) {
      left = mid + 1;
    } else if (arr[mid] < target) {
      right = mid - 1;
    }
  }

  return [0, 0];
}

export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
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
