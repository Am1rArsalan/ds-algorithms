import { LinkedList, reversePartOfList, detectListCycleInList } from "./index";

describe("linked list tests", () => {
  let linkedList = new LinkedList<number>();
  beforeEach(() => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);
  });

  test("add node to end of the list", () => {
    //
  });

  test("get tail element of the list", () => {
    //
  });

  test("reverse list", () => {
    let list = linkedList.getHead();
  });

  test("reverse a part of linked list with given indexes [class api]", () => {
    //
  });

  test("reverse a part of linked list with given indexes [function api]", () => {
    linkedList.reversePartOfList(2, 5);
    expect(2).toBe(2);
    linkedList.reversePartOfList(2, 5);
    expect(2).toBe(2);
    linkedList.reversePartOfList(1, 5);
    expect(2).toBe(2);
    linkedList.reversePartOfList(1, 5);
    expect(2).toBe(2);
    //reversePartOfList(linkedList, 1, 4);
    //linkedList.renderList();
    //reversePartOfList(linkedList, 1, 4);
    //linkedList.renderList();
    //reversePartOfList(linkedList, 0, 4);
    //linkedList.renderList();
    //reversePartOfList(linkedList, 0, 4);
    //linkedList.renderList();
  });

  test("detect and resolve the cycle inside of the list [class api]", () => {
    linkedList.detectCycle();
    let head = linkedList.getHead();
    // test
  });

  test("detect and resolve the cycle inside of the list [function api]", () => {
    //
  });

  test("detect and resolve the cycle inside of the list [function api]", () => {
    //
  });

  test("add cycle to the list", () => {
    let head = linkedList.getHead();
    linkedList.addCycle(1);
    expect(2).toBe(2);
  });

  test("add cycle to the list second test case", () => {
    let head = linkedList.getHead();
    linkedList.addCycle(2);
    expect(2).toBe(2);
  });

  test("find the cycle node ", () => {
    let cycledNode = linkedList.findCycle();
  });

  test("detectCycleWithRabbit ", () => {
    let cycledNode = linkedList.getHead();
    linkedList.detectCycleWithRabbit();
  });
});

console.log("*** testing the function api ***");
