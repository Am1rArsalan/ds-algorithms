import {
  LinkedList,
  reversePartOfList,
  detectListCycleInList,
  NodeType,
} from "./index";
import {
  listAfterAddingOneItem,
  initialList,
  reversedList,
  partiallyReversedList,
  partiallyReversedList2,
} from "./list.po";

describe("linked list tests", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);
  });

  test("add node to end of the list", () => {
    expect(linkedList.getHead()).toEqual(initialList);
    expect(linkedList.getListLength()).toBe(7);
    linkedList.push(8);
    expect(linkedList.getHead()).toEqual(listAfterAddingOneItem);
    expect(linkedList.getListLength()).toBe(8);
    expect(linkedList.pop().value).toBe(8);
  });

  test("Get tail element of the list", () => {
    const deletedNode = linkedList.pop();
    expect(deletedNode).toEqual({ value: 7, next: null });
    expect(linkedList.getListLength()).toBe(6);
  });

  test("reverse list", () => {
    expect(linkedList.reverse()).toEqual(reversedList);
  });

  test("reverse a part of linked list with given indexes [class api]", () => {
    linkedList.reversePartOfList(1, 7);
    expect(linkedList.getHead()).toEqual(reversedList);

    linkedList.reversePartOfList(1, 7);
    expect(linkedList.getHead()).toEqual(initialList);

    linkedList.reversePartOfList(2, 5);
    expect(linkedList.getHead()).toEqual(partiallyReversedList);

    linkedList.reversePartOfList(2, 5);
    expect(linkedList.getHead()).toEqual(initialList);

    linkedList.reversePartOfList(1, 5);
    expect(linkedList.getHead()).toEqual(partiallyReversedList2);
    linkedList.reversePartOfList(1, 5);
    expect(linkedList.getHead()).toEqual(initialList);
  });

  test("reverse a part of linked list with given indexes [function api]", () => {
    reversePartOfList(linkedList, 0, 6);
    expect(linkedList.getHead()).toEqual(reversedList);

    reversePartOfList(linkedList, 0, 6);
    expect(linkedList.getHead()).toEqual(initialList);

    reversePartOfList(linkedList, 1, 4);
    expect(linkedList.getHead()).toEqual(partiallyReversedList);

    reversePartOfList(linkedList, 1, 4);
    expect(linkedList.getHead()).toEqual(initialList);

    reversePartOfList(linkedList, 0, 4);
    expect(linkedList.getHead()).toEqual(partiallyReversedList2);
    reversePartOfList(linkedList, 0, 4);
    expect(linkedList.getHead()).toEqual(initialList);
  });

  test("add cycle and find cycle's first node", () => {
    expect(linkedList.getListLength()).toEqual(7);
    linkedList.addCycle(1);
    const foundedNode = linkedList.findCycleNode() as NodeType<number>;
    expect(foundedNode.value).toEqual(2);
  });

  test("detect and resolve the cycle inside of the list [class api]", () => {
    linkedList.addCycle(3);
    const foundedCycleNode = linkedList.findCycleNode() as NodeType<number>;
    expect(foundedCycleNode.value).toEqual(4);
    linkedList.detectAndResolveCycle();
    expect(linkedList.getHead()).toEqual(initialList);
  });

  test("detect and resolve the cycle inside of the list [function api]", () => {
    linkedList.addCycle(3);
    const foundedCycleNode = linkedList.findCycleNode() as NodeType<number>;
    expect(foundedCycleNode.value).toEqual(4);
    detectListCycleInList(linkedList);
    expect(linkedList.getHead()).toEqual(initialList);
  });
});
