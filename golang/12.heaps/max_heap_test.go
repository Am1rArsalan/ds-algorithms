package main

import (
	"reflect"
	"testing"
)

func TestMaxHeap(t *testing.T) {
	heap := NewMaxHeap([]int{})
	heap2 := NewMaxHeap([]int{25, 40, 15, 20, 10, 50, 35})

	heap.Insert(15)
	heap.Insert(35)
	heap.Insert(10)
	heap.Insert(25)
	heap.Insert(20)
	heap.Insert(50)
	heap.Insert(40)

	reflect.DeepEqual(heap.GetHeap(), []int{50, 25, 40, 15, 20, 10, 35})
	reflect.DeepEqual(heap2.GetHeap(), []int{50, 40, 35, 20, 10, 15, 25})
}
