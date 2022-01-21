type ListNode = {
  val: number;
  next: ListNode | null;
};

export const list: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        next: null,
        val: 4,
      },
    },
  },
};

export const list2: ListNode = {
  val: 2,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        next: null,
        val: 5,
      },
    },
  },
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
    l2Result.push(l2.val);
    l1 = l1.next;
    l2 = l2.next;
  } while (l1 !== null);

  return makeNumber(l1Result) + makeNumber(l2Result);
}
