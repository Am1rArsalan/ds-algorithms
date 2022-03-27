package main

import (
	"fmt"
	"reflect"
	"testing"
)

func TestXxx(t *testing.T) {
	///////////////////////////////
	// create a new linked list
	///////////////////////////////
	//.Push(2).Push(3).Push(4).Push(5).Push(6).Push(7)
	linkedList := NewLinkedList()
	linkedList.Push(1)
	linkedList.Display()
	fmt.Println("list length is ?", linkedList.GetListLength())

	result := 12
	expectedResult := 12

	if !reflect.DeepEqual(result, expectedResult) {
		////////
	}
}
