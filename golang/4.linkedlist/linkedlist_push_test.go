package main

import (
	"testing"
)


func TestPushOperationOnList(t *testing.T) {
	list := NewLinkedList[int]()
	list.Push(1).Push(2).Push(3).Push(4).Push(5).Push(6).Push(7)

	if list.head.Value != 1 {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", list.head.Value, 1)
	}

	if list.Length != 7 {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", 7, list.Length)
	}
}
