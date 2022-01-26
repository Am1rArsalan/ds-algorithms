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
  let P = 0;
  if (list === null) {
    return null;
  }
  let listResult = [];

  do {
    listResult.push(list.val);
    list = list.next;
    ++P;
  } while (list !== null);

  return +listResult.reverse().join("");
}

function reverseList(list: ListNode | null) {
  let prev = null;
  let temp = list;
  let next = null;

  for (; temp; ) {
    prev = temp;
    next = temp.next;
    temp.next = prev;
    temp = next;
  }

  return prev;
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

export function addTwoList(l1: ListNode | null, l2: ListNode | null) {
  let iterateRate = 0;
  if (getListLength(l1) > getListLength(l2)) {
    iterateRate = getListLength(l1);
  } else {
    iterateRate = getListLength(l2);
  }

  let list = generateNext(Number(l1.val) + Number(l2.val));
  let newList = list;

  for (let i = 1; i < iterateRate; ++i) {
    let L1 = l1?.val > 0 ? l1.val : 0;
    let L2 = l2?.val > 0 ? l2.val : 0;
    if (!newList) {
      newList = generateNext(L1 + L2);
    } else {
      newList.next = generateNext(L1 + L2);
      newList = newList.next;
    }
    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  return list;
}
