export type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
  prev: NodeType<T> | null;
  child?: NodeType<T> | null;
};

export class DoublyLikedList<T> {
  private head: NodeType<T> | null = null;
  private tail: NodeType<T> | null = null;

  appendChild(node: NodeType<T>, ref: NodeType<T>) {
    ref.child = node;
  }

  renderList(reverse: Partial<boolean> = false) {
    console.log("renderList");
    let temp = reverse ? this.tail : this.head;
    let nodeProperty: "prev" | "next" = reverse ? "prev" : "next";
    while (temp) {
      console.log(temp.value);
      temp = temp[nodeProperty];
    }
  }

  pop() {
    let temp = this.head;
    while (temp?.next) {
      temp = temp.next;
    }
    if (temp) {
      this.tail = temp;
      temp.next = null;
    }
  }

  generateNode(value: T) {
    return {
      value,
      next: null,
      prev: null,
    } as NodeType<T>;
  }

  push(value: T) {
    let newNode = this.generateNode(value);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
      return this.tail;
    }
    let temp = this.head;
    while (temp?.next) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.prev = temp;
    this.tail = temp.next;
    return this.tail;
  }

  checkHead() {
    if (!this.head) {
      return Error("Head is not Exist");
    }
  }

  getTail() {
    return this.tail;
  }

  getHead() {
    return this.head;
  }

  flatList() {
    let current = this.head;
    while (current) {
      let temp = current;
      if (temp.child) {
        let cl = temp.child as NodeType<T> | null;
        let nx = temp.next;
        temp.next = cl;
        if (cl) cl.prev = temp;
        while (cl?.next) {
          cl = cl.next;
        }
        if (cl) cl.next = nx;
        if (nx) nx.prev = cl;
      }
      current = current.next;
    }
  }
}

export function flatDoublyLinkedList(list: DoublyLikedList<number>) {
  let head = list.getHead();
  let current = head;
  while (current) {
    let temp = current;
    if (temp.child) {
      let cl = temp.child;
      let nx = temp.next;
      temp.next = cl;
      cl.prev = temp;
      while (cl?.next) {
        cl = cl.next;
      }
      if (cl) cl.next = nx;
      if (nx) nx.prev = cl;
    }
    current = current.next;
  }
}
