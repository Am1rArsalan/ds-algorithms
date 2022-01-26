type ListNode = {
  val: number;
  next: ListNode | null;
};

export function makeNumber(numbers: number[]): number {
  let result = numbers.reduce(
    (acc: number, curr: number, currentIndex: number) => {
      return acc + curr * 10 ** currentIndex;
    },
    0
  );

  return result;
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
  const l1Result: number[] = [];
  const l2Result: number[] = [];

  if (l1 === null || l2 === null) {
    return null;
  }

  do {
    l1Result.push(l1.val);
    l1 = l1.next;
  } while (l1 !== null);

  do {
    l2Result.push(l2.val);
    l2 = l2.next;
  } while (l2 !== null);

  return makeNumber(l1Result) + makeNumber(l2Result);
}

function generateNext(val: number) {
  return {
    val,
    next: null,
  };
}

export function makeList(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }
  let node: ListNode | null = generateNext(arr[0]);
  let temp = node;

  for (let i = 1; i < arr.length; ++i) {
    temp.next = generateNext(arr[i]);
    temp = temp.next;
  }

  return node;
}

export function getListLength(list: ListNode | null) {
  let temp = list;
  let result = 0;
  while (temp) {
    temp = temp.next;
    result += 1;
  }

  return result;
}

function makeNumberFromList(list: ListNode | null) {
  let temp = list;
  let result = "";

  for (let currentIndex = 0; temp; ++currentIndex) {
    result += temp.val;
    temp = temp.next;
  }

  return result.split("").reverse().join("");
}

export function addTwoList(l1: ListNode | null, l2: ListNode | null) {
  let l1Result = makeNumberFromList(l1);
  let l2Result = makeNumberFromList(l2);

  let result = BigInt(l1Result) + BigInt(l2Result);

  return makeList(
    result
      .toString()
      .split("")
      .reverse()
      .map((item) => +item)
  );
}
