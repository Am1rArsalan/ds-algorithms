package main

import (
	"fmt"
	"reflect"
	"testing"
)





func TestReverseList(t *testing.T) {
	list := NewLinkedList[int]()
	list.Push(1).Push(2).Push(3).Push(4).Push(5).Push(6).Push(7)

	if list.Length != 7 {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", 7, list.Length)
	}

	list.Reverse()

	reversedList := NewLinkedList[int]()
	reversedList.Push(7).Push(6).Push(5).Push(4).Push(3).Push(2).Push(1)

	if !reflect.DeepEqual(*reversedList, *list) {
		t.Errorf("Expected list to be (%v) but actual list is is"+
			"(%v)", reversedList, list)
	}
}

func TestReversePartOfList(t *testing.T) {
	list := NewLinkedList[int]()
	list.Push(1).Push(2).Push(3).Push(4).Push(5).Push(6).Push(7)

	if list.Length != 7 {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", 7, list.Length)
	}

	list.ReversePartOfList(2, 5)

	reversedList := NewLinkedList[int]()
	reversedList.Push(1).Push(2).Push(6).Push(5).Push(4).Push(3).Push(7)

	if !reflect.DeepEqual(*reversedList, *list) {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", reversedList, list)
	}

}

func TestReversePartOfList2(t *testing.T) {
	list := NewLinkedList[int]()
	list.Push(1).Push(2).Push(3).Push(4).Push(5).Push(6).Push(7)

	if list.Length != 7 {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", 7, list.Length)
	}

	list.ReversePartOfList(0, 6)
	list.Display()

	reversedList := NewLinkedList[int]()
	reversedList.Push(7).Push(6).Push(5).Push(4).Push(3).Push(2).Push(1)

	if !reflect.DeepEqual(*reversedList, *list) {
		t.Errorf("(second test case ) Expected Length value to be (%v) but the value is"+
			"(%v)", reversedList, list)
	}
}
