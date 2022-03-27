import { NodeType, detectListCycleInList, reversePartOfList } from './index';
import { LinkedListImpl } from './LinkedList';
import {
    listAfterAddingOneItem,
    initialList,
    reversedList,
    partiallyReversedList,
    partiallyReversedList2,
} from './list.po';
import { describe, assert, it, beforeEach } from 'vitest';

describe('linked list tests', () => {
    let linkedList: LinkedListImpl<number>;

    beforeEach(() => {
        linkedList = new LinkedListImpl<number>();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);
        linkedList.push(5);
        linkedList.push(6);
        linkedList.push(7);
    });

    it('add node to end of the list', () => {
        assert.deepEqual(linkedList.getHead(), initialList);
        assert.equal(linkedList.getListLength(), 7);
        linkedList.push(8);
        assert.deepEqual(linkedList.getHead(), listAfterAddingOneItem);
        assert.equal(linkedList.getListLength(), 8);
        assert.equal(linkedList.pop().value, 8);
    });

    it('Get tail element of the list', () => {
        const deletedNode = linkedList.pop();
        assert.deepEqual(deletedNode, { value: 7, next: null });
        assert.equal(linkedList.getListLength(), 6);
    });

    it('reverse list', () => {
        assert.deepEqual(linkedList.reverse(), reversedList);
    });

    it('reverse a part of linked list with given indexes [class api]', () => {
        linkedList.reversePartOfList(1, 7);
        assert.deepEqual(linkedList.getHead(), reversedList);

        linkedList.reversePartOfList(1, 7);
        assert.deepEqual(linkedList.getHead(), initialList);

        linkedList.reversePartOfList(2, 5);
        assert.deepEqual(linkedList.getHead(), partiallyReversedList);

        linkedList.reversePartOfList(2, 5);
        assert.deepEqual(linkedList.getHead(), initialList);

        linkedList.reversePartOfList(1, 5);
        assert.deepEqual(linkedList.getHead(), partiallyReversedList2);
        linkedList.reversePartOfList(1, 5);
        assert.deepEqual(linkedList.getHead(), initialList);
    });

    it('reverse a part of linked list with given indexes [function api]', () => {
        reversePartOfList(linkedList, 0, 6);
        assert.deepEqual(linkedList.getHead(), reversedList);

        reversePartOfList(linkedList, 0, 6);
        assert.deepEqual(linkedList.getHead(), initialList);

        reversePartOfList(linkedList, 1, 4);
        assert.deepEqual(linkedList.getHead(), partiallyReversedList);

        reversePartOfList(linkedList, 1, 4);
        assert.deepEqual(linkedList.getHead(), initialList);

        reversePartOfList(linkedList, 0, 4);
        assert.deepEqual(linkedList.getHead(), partiallyReversedList2);
        reversePartOfList(linkedList, 0, 4);
        assert.deepEqual(linkedList.getHead(), initialList);
    });

    it("add cycle and find cycle's first node", () => {
        assert.equal(linkedList.getListLength(), 7);
        linkedList.addCycle(1);
        const foundedNode = linkedList.findCycleNode() as NodeType<number>;
        assert.equal(foundedNode.value, 2);
    });

    it('detect and resolve the cycle inside of the list [class api]', () => {
        linkedList.addCycle(3);
        const foundedCycleNode = linkedList.findCycleNode() as NodeType<number>;
        assert.equal(foundedCycleNode.value, 4);
        linkedList.detectAndResolveCycle();
        assert.deepEqual(linkedList.getHead(), initialList);
    });

    it('detect and resolve the cycle inside of the list [function api]', () => {
        linkedList.addCycle(3);
        const foundedCycleNode = linkedList.findCycleNode() as NodeType<number>;
        assert.equal(foundedCycleNode.value, 4);
        detectListCycleInList(linkedList);
        assert.deepEqual(linkedList.getHead(), initialList);
    });
});
