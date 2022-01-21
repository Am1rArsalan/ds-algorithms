function findDuplicateNumbers(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; ++i) {
    let item = arr[i];
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  return map;
}

let map = findDuplicateNumbers([2, 3, 4, 5, 6, 5]);
console.log(map);
