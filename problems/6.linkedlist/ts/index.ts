export type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
};

export class LinkedList<T> {
  private length: number = 0;
  private head: NodeType<T> | null = null;

  public getHead() {
    this.checkHead();
    return this.head;
  }

  public getListLength() {
    return this.length;
  }

  public setHead(node: NodeType<any>) {
    this.head = node;
  }

  private checkHead() {
    if (this.head) {
      return;
    }

    throw Error("NO HEAD");
  }

  private generateNode(value: T) {
    return {
      value,
      next: null,
    };
  }

  push(value: T) {
    this.length++;
    if (!this.head) {
      this.head = this.generateNode(value);
      return this.head;
    }
    let temp = this.head;

    do {
      if (temp.next) temp = temp.next;
    } while (temp.next !== null);

    temp.next = this.generateNode(value);
    temp = temp.next;

    return temp;
  }

  pop() {
    this.checkHead();
    this.length > 0 && this.length--;
    let temp = this.head;
    for (; temp?.next?.next !== null; ) {
      if (temp?.next?.next) temp = temp?.next;
    }
    const deletedNode = temp.next;
    temp.next = null;
    return deletedNode;
  }

  shift() {
    this.checkHead();
    if (this.head?.next) this.head = this.head?.next;
  }

  renderList() {
    console.log("renderList");
    this.checkHead();

    let temp = this.head;
    do {
      console.log(temp?.value);
      if (temp?.next) temp = temp.next;
    } while (temp?.next !== null);

    console.log(temp?.value);
  }

  static renderGivenHead(startNode: NodeType<any> | null) {
    if (startNode) {
      let temp = { ...startNode };
      do {
        console.log(temp?.value);
        if (temp?.next) temp = temp.next;
      } while (temp?.next !== null);

      console.log(temp?.value);
    } else {
      console.log("NO HEAD");
    }
  }

  reverse() {
    this.checkHead();
    let temp = this.head;
    if (!temp?.next) return this.head;
    let prev = null;

    for (; temp !== null; ) {
      if (!temp) break;
      let next: NodeType<T> | null = temp?.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    this.head = prev;
    return this.head;
  }

  reversePartOfList(startIndex: number, endIndex: number) {
    let currentPosition = 1,
      current = this.head,
      start = this.head;

    while (currentPosition < startIndex && current) {
      start = current;
      current = current?.next;
      ++currentPosition;
    }

    let tail = current,
      prev = null,
      next = null;

    while (
      currentPosition >= startIndex &&
      currentPosition <= endIndex &&
      current
    ) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      ++currentPosition;
    }

    if (start && startIndex !== 1) start.next = prev;
    if (tail) tail.next = current;

    if (startIndex === 1) {
      this.head = prev;
    }
  }

  addCycle(cycleIndex: number) {
    let temp = this.head;
    let cycleNode = this.head;
    let i = 0;
    while (cycleNode && i < cycleIndex) {
      cycleNode = cycleNode.next;
      ++i;
    }

    while (temp?.next) {
      temp = temp?.next;
    }
    if (temp) temp.next = cycleNode;
  }

  detectAndResolveCycle() {
    let temp = this.head;
    let seenNodes = new Set<NodeType<T>>();
    let prev = null;

    while (temp) {
      if (seenNodes.has(temp)) {
        if (prev) prev.next = null;
        return temp;
      } else {
        seenNodes.add(temp);
      }
      prev = temp;
      temp = temp.next;
    }

    return null;
  }

  findCycleNode() {
    let seenNodes = new Set<NodeType<T>>();
    let currentNode = this.head;
    while (!seenNodes.has(currentNode as NodeType<T>) && currentNode) {
      if (currentNode.next === null) {
        return null;
      }
      seenNodes.add(currentNode);
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  detectCycleWithRabbit() {
    let R = this.head,
      T = this.head,
      SN = this.head;

    do {
      R = R?.next as NodeType<T>;
      T = T?.next as NodeType<T>;

      if (R === null || R?.next === null) {
        return false;
      } else {
        R = R.next;
      }
      if (R === T) break;
    } while (true);

    let MN = R;
    while (MN !== SN) {
      MN = MN?.next as NodeType<T>;
      SN = SN?.next as NodeType<T>;
    }

    return MN;
  }
}

export function detectListCycleInList(list: LinkedList<number>) {
  let head = list.getHead();
  let seenNodes = new Set<NodeType<number>>();
  let temp = head;
  let prev = null;

  while (temp) {
    if (seenNodes.has(temp)) {
      if (prev) prev.next = null;
      return temp;
    } else {
      seenNodes.add(temp);
    }
    prev = temp;
    temp = temp.next;
  }
  return null;
}

// zero base
export function reversePartOfList(
  list: LinkedList<number>,
  startIndex: number,
  endIndex: number
) {
  let CP = 0;
  let s = list.getHead(),
    c = list.getHead();

  while (CP < startIndex && c) {
    s = c;
    c = c.next;
    ++CP;
  }

  let p = null,
    nx = null;
  let tail = c;

  while (CP >= startIndex && CP <= endIndex && c) {
    nx = c.next;
    c.next = p;
    p = c;
    c = nx;
    ++CP;
  }

  if (startIndex !== 0 && s) s.next = p;
  if (tail) tail.next = c;

  if (startIndex === 0) {
    list.setHead(p as NodeType<number>);
  }
}
