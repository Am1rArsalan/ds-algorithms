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

export function makeListNode(arr: number[]): ListNode | null {
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

export function sumSingleList(list: ListNode | null): number {
  let result = 0;
  let P = 0;
  if (list === null) {
    return null;
  }

  do {
    if (list.val === 0) {
    } else {
      result += list.val * 10 ** P;
    }
    list = list.next;
    ++P;
  } while (list !== null);

  return result;
}

export function addTwoList(l1: ListNode | null, l2: ListNode | null) {
  let l1Result = sumSingleList(l1);
  let l2Result = sumSingleList(l2);

  let R = l1Result + l2Result;
  let stringResult = R.toString();
  let final = stringResult
    .split("")
    .reverse()
    .map((item: string) => parseInt(item));

  return makeListNode(final);
}
