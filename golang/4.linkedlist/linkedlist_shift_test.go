package main

import (
	"testing"
)

func TestShift(t *testing.T) {
	list := NewLinkedList[int]()
	list.Push(1).Push(2).Push(3).Push(4).Push(5).Push(6).Push(7)
	removedNode := list.Shift()

	if removedNode.Value != 1 {
		t.Errorf("Expected removed node value to be (%v) but "+
			"actual value (%v)", 1, removedNode.Value)
	}

	if list.Length != 6 {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", 6, list.Length)
	}
}
