const arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1, 0, -1];

function returnNumber() {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > arr[i + 1]) {
      return arr[i];
    }
  }

  return -1;
}

console.log(returnNumber());

const arr2: number[] = Array.from(
  {
    length: 100,
  },
  () => Math.floor(Math.random() * 100)
);

function findLowestValues() {
  const arr3 = arr2.sort().splice(0, 10);
  return Array.from(
    { length: 3 },
    () => arr3[Math.floor(Math.random() * arr3.length)]
  );
}

console.log(arr2);
console.log(findLowestValues());
