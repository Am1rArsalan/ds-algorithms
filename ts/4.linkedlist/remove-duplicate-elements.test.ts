import { LinkedListImpl } from './LinkedList';
import { assert   , test } from 'vitest';
import { removeDuplicateElementsOnLinkedList } from './remove-duplicate-elements';


test("remove duplicate element from the linked list" , () => { 
	const list = new LinkedListImpl<number>()
	list.push(1).push(2).push(1).push(3).push(5).push(4).push(5).push(6).push(7)

    list.renderList();
    assert.equal(list.getListLength(), 9)

    
    list.renderList();
    removeDuplicateElementsOnLinkedList(list); 
    assert.equal(list.getListLength(), 7);
})  
