import { DoublyLikedList, NodeType } from "./index";

describe("doubly linkedList tests", () => {
  describe("append child to the list", () => {
    beforeEach(() => {
      let ll = new DoublyLikedList<number>();
      let firstChildList = new DoublyLikedList<number>();
      let ref4: NodeType<number> | null = null;
      let refNode: NodeType<number> | null = null;
      let ll2 = new DoublyLikedList<number>();
      let ref2 = ll2.push(2.3);
      let ll3 = new DoublyLikedList();
      let ref3 = ll.push(4);
      ll2.push(2.1);
      ll2.push(2.2);
      ll3.push(2.31);
      ll3.push(2.32);
      ll3.push(2.33);
      firstChildList.push(1.1);
      firstChildList.push(1.2);
      firstChildList.push(1.3);
      firstChildList.push(1.4);
      firstChildList.push(1.5);
      refNode = ll.push(2);
      ref4 = ll.push(1);
    });

    test("append child to a list", () => {
      ll.appendChild(
        firstChildList.getHead() as NodeType<number>,
        ref4 as NodeType<number>
      );
      let head = ll.getHead();
    });

    test("append child to ll2 list", () => {
      ll2.appendChild(ll3.getHead() as NodeType<number>, ref2);
      ll2.push(2.4);
      ll.appendChild(
        ll2.getHead() as NodeType<number>,
        refNode as NodeType<number>
      );
      ll.push(3);
    });
  });

  describe("part two flat list", () => {
    let ll = new DoublyLikedList<number>();
    let firstChildList = new DoublyLikedList<number>();
    let ll2 = new DoublyLikedList<number>();
    let ll3 = new DoublyLikedList();

    beforeEach(() => {
      ll2.push(2.1);
      ll2.push(2.2);
      ll3.push(2.31);
      ll3.push(2.32);
      ll3.push(2.33);
      firstChildList.push(1.1);
      firstChildList.push(1.2);
      firstChildList.push(1.3);
      firstChildList.push(1.4);
      firstChildList.push(1.5);
      refNode = ll.push(2);
      ref4 = ll.push(1);
    });

    test("add node to end of the list", () => {
      ll.push(5);
      ll.renderList();
      ll.flatList();
      ll.renderList();
      ll.renderList(true);
    });
  });
});
