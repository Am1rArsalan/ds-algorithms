package main

import (
	"reflect"
	"testing"
)

// Min Heap
func TestPriorityQueue1(t *testing.T) {
	competitor := func(a, b int) bool { return a > b }
	priorityQueue := NewPriorityQueue([]int{}, competitor)

	priorityQueue.
		insert(15).
		insert(35).
		insert(10).
		insert(25).
		insert(20).
		insert(50).
		insert(40)

	if !reflect.DeepEqual(priorityQueue.getHeap(), []int{10, 20, 15, 35, 25, 50, 40}) {
		t.Errorf(" Expected (%v) but got"+
			"(%v)", []int{10, 20, 15, 35, 25, 50, 40}, priorityQueue.getHeap())
	}
}

// min heap with initial slice of heap
func TestPriorityQueue2(t *testing.T) {
	competitor := func(a, b int) bool {
		return a > b
	}
	priorityQueue := NewPriorityQueue([]int{25, 40, 15, 20, 10, 50, 35}, competitor)

	if !reflect.DeepEqual(priorityQueue.getHeap(), []int{10, 15, 25, 40, 20, 50, 35}) {
		t.Errorf(" Expected (%v) but got"+
			"(%v)", []int{10, 15, 25, 40, 20, 50, 35}, priorityQueue.getHeap())
	}
}

// Max Heap
func TestPriorityQueue3(t *testing.T) {
	competitor := func(a, b int) bool { return a < b }
	priorityQueue := NewPriorityQueue([]int{}, competitor)

	priorityQueue.
		insert(15).
		insert(35).
		insert(10).
		insert(25).
		insert(20).
		insert(50).
		insert(40)

	if !reflect.DeepEqual(priorityQueue.getHeap(), []int{50, 25, 40, 15, 20, 10, 35}) {
		t.Errorf(" Expected (%v) but got"+
			"(%v)", []int{50, 25, 40, 15, 20, 10, 35}, priorityQueue.getHeap())
	}
}

// Max heap with initial slice of heap
func TestPriorityQueue4(t *testing.T) {
	competitor := func(a, b int) bool {
		return a < b
	}

	priorityQueue := NewPriorityQueue([]int{25, 40, 15, 20, 10, 50, 35}, competitor)

	if !reflect.DeepEqual(priorityQueue.getHeap(), []int{50, 25, 40, 20, 10, 15, 35}) {
		t.Errorf("Expected (%v) but got"+
			"(%v)", []int{50, 25, 40, 20, 10, 15, 35}, priorityQueue.getHeap())
	}
}