package main

import (
	"reflect"
	"testing"
)

func TestMinHeap(t *testing.T) {
	heap := NewMinHeap([]int{})
	heap2 := NewMinHeap([]int{25, 40, 15, 20, 10, 50, 35})

	heap.Insert(15)
	heap.Insert(35)
	heap.Insert(10)
	heap.Insert(25)
	heap.Insert(20)
	heap.Insert(50)
	heap.Insert(40)

	if !reflect.DeepEqual(heap.GetHeap(), []int{10, 15, 20, 25, 35, 50, 40}) {
		t.Errorf("Expected %v, got %v", []int{10, 15, 20, 25, 35, 50, 40}, heap.GetHeap())
	}

	if !reflect.DeepEqual(heap2.GetHeap(), []int{10, 20, 15, 25, 40, 50, 35}) {
		t.Errorf("Expected %v, got %v", []int{10, 20, 15, 25, 40, 50, 35}, heap2.GetHeap())
	}
}
