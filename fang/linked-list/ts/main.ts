// 6-7
type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
};

class LinkedList<T> {
  private head: NodeType<T> | null = null;

  public getHead() {
    this.checkHead();
    return this.head;
  }

  public setHead(node:NodeType<any>) {
    this.head = node ; 
  }

  push(value: T) {
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

  checkHead() {
    if (this.head) {
      return;
    }

    throw "NO HEAD";
  }

  generateNode(value: T) {
    return {
      value,
      next: null,
    };
  }

  pop() {
    this.checkHead();
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
      console.log("NOOOO HEAD");
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
}

// add this function to class as method
// zero base
function reversePartOfList(
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

  // we have the started node ;
  let p = null,
    nx = null;
  let tail = c;


  while ( CP >= startIndex && CP <=endIndex && c ) { 
    nx = c.next ; 
    c.next = p ; 
    p = c ;
    c = nx ; 
    ++CP
  }

  if (startIndex !== 0 && s ) s.next = p ; 
  if (tail)  tail.next = c ; 


  if ( startIndex === 0 ) { 
    list.setHead(p as NodeType<number>); 
  }
}

(function main() {
  let linkedList = new LinkedList<number>();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.push(5);
  linkedList.push(6);
  linkedList.push(7);
  linkedList.renderList();
  linkedList.reversePartOfList(2, 5);
  linkedList.renderList();

  linkedList.reversePartOfList(2, 5);
  linkedList.renderList();

  linkedList.reversePartOfList(1, 5);
  linkedList.renderList();

  linkedList.reversePartOfList(1, 5);
  linkedList.renderList();

  console.log("*** testing the function api ***") ; 

  reversePartOfList(linkedList, 1, 4)
  linkedList.renderList() ; 
  reversePartOfList(linkedList, 1, 4)
  linkedList.renderList() ; 

  reversePartOfList(linkedList, 0, 4)
  linkedList.renderList() ; 
  reversePartOfList(linkedList, 0, 4)
  linkedList.renderList() ; 

  linkedList.pop()
  linkedList.pop()
  linkedList.pop()
  linkedList.pop()
  linkedList.pop()
  linkedList.renderList()
  linkedList.reversePartOfList(1, 2); 
  linkedList.renderList(); 
})();
