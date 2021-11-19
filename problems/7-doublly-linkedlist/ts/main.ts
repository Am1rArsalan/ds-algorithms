type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
  prev: NodeType<T> | null;
  child?: NodeType<T> | null;
};

class DoublyLikedList<T> {
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

function flatDoublyLinkedList(list: DoublyLikedList<number>) {
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

let ll = new DoublyLikedList<number>();
let ref4 = ll.push(1);
let firstChildList = new DoublyLikedList<number>();
firstChildList.push(1.1);
firstChildList.push(1.2);
firstChildList.push(1.3);
firstChildList.push(1.4);
firstChildList.push(1.5);
ll.appendChild(firstChildList.getHead() as NodeType<number>, ref4);
let refNode = ll.push(2);
let ll2 = new DoublyLikedList<number>();
ll2.push(2.1);
ll2.push(2.2);
let ref2 = ll2.push(2.3);
let ll3 = new DoublyLikedList();
ll3.push(2.31);
ll3.push(2.32);
ll3.push(2.33);
ll2.appendChild(ll3.getHead() as NodeType<number>, ref2);
ll2.push(2.4);

ll.appendChild(ll2.getHead() as NodeType<number>, refNode);
ll.push(3);
let ref3 = ll.push(4);

let ll4 = new DoublyLikedList();
ll4.push(4.1);
ll4.push(4.2);
ll4.push(4.3);
ll4.push(4.4);
ll4.push(4.5);
ll.appendChild(ll4.getHead() as NodeType<number>, ref3);
ll.push(5);
ll.renderList();
ll.flatList();
ll.renderList();
ll.renderList(true);
