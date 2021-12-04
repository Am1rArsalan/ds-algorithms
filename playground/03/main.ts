function makeDuplicateCounter(arr: number[]) {
  let map: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < arr.length; ++i) {
    let item = arr[i];
    if (map.has(item)) {
      map.set(item, (map.get(item) as number) + 1);
    } else {
      map.set(item, 1);
    }
  }

  return map;
}

console.log(makeDuplicateCounter([2, 3, 4, 5, 6, 5]));
