package main

import (
	"math"
	"reflect"
)

type PriorityQueue struct {
	heap []int
}

func NewPriorityQueue(initial []int) *PriorityQueue {
	instance := PriorityQueue{
		heap: []int{},
	}

	instance.buildHeap(initial)

	return &instance
}

func (p PriorityQueue) insert(value int) {
	p.heap = append(p.heap, value)
	p.heapifyUp(len(p.heap) - 1)
}

func (p PriorityQueue) buildHeap(initial []int) {
	for _, value := range initial {
		p.heap = append(p.heap, value)
		p.heapifyUp(len(p.heap) - 1)
	}
}

func (p PriorityQueue) heapifyUp(idx int) {
	parentIndex := parent(idx)

	if parentIndex > 0 && p.heap[parentIndex] < p.heap[idx] {
		swapFn := reflect.Swapper(p.heap)
		swapFn(parentIndex, idx)
		p.heapifyUp(parentIndex)
	}
}

func (p PriorityQueue) heapifyDown(idx int) {
	/////////
}

func parent(index int) int {
	return int(math.Floor((float64(index-1) / 2)))
}

//export interface PriorityQueue {
//insert: (value: number) => void;
//getHeap: () => number[];
//getSize: () => number;
//peek: () => number;
//remove: (index: number) => void;
//pop: () => number | undefined;
//isEmpty: () => boolean;
//}
