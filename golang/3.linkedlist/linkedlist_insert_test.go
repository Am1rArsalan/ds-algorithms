package main

import (
	"testing"
)



func TestInsertOperationOnList(t *testing.T) {
	list := NewLinkedList[int]()
	list.Push(1).Push(2).Push(3).Push(4).Push(5).Push(6).Push(7)
	list.Insert(0)

	if list.head.Value != 0 {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", list.head.Value, 1)
	}

	if list.Length != 8 {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", 8, list.Length)
	}
}
