package main

import (
	"fmt"
	"testing"
)


func TestRemoveDuplicateElements(t *testing.T) {
	list := NewLinkedList[int]()
	list.Push(1).Push(2).Push(1).Push(3).Push(5).Push(4).Push(5).Push(6).Push(7)

	if list.Length != 9 {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", 9, list.Length)
	}


    fmt.Println("before") 
    list.Display(); 
    list.RemoveDuplicateElements()
    fmt.Println("after") 
    list.Display(); 

	if list.Length != 7 {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", 7, list.Length)
	}


	//if list.HasDuplicateElement() {
		//t.Errorf("Still we have duplicate elements in the list")
	//}
}
