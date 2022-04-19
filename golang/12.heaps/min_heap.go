package main

import (
	"math"
	"reflect"
)

type MinHeap struct {
	heap []int
}

func NewMinHeap(initialHeap []int) MinHeap {
	maxHeap := MinHeap{
		heap: []int{},
	}
	maxHeap.buildHeap(initialHeap)

	return maxHeap
}

func (h MinHeap) buildHeap(initialHeap []int) {
	for _, value := range initialHeap {
		h.heap = append(h.heap, value)
		h.heapifyUp(len(h.heap) - 1)
	}
}

func (h MinHeap) Insert(value int) {
	h.heap = append(h.heap, value)
	h.heapifyUp(len(h.heap) - 1)
}

func (h MinHeap) Peek() int {
	if len(h.heap) == 0 {
		return math.MinInt32
	}

	max := h.heap[0]
	h.heap = h.heap[1:]
	swapper := reflect.Swapper(h.heap)
	swapper(0, len(h.heap)-1)
	h.heapifyDown(0)

	return max
}

func (h MinHeap) GetHeap() []int {
	return h.heap
}

func (h MinHeap) heapifyDown(parentIndex int) {
	leftChildIndex := 2*parentIndex + 1
	rightChildIndex := 2*parentIndex + 2

	targetIndex := leftChildIndex

	if rightChildIndex < len(h.heap) && leftChildIndex < len(h.heap) {
		if h.heap[leftChildIndex] < h.heap[rightChildIndex] {
			targetIndex = rightChildIndex
		}
	}

	if targetIndex < len(h.heap) {
		if h.heap[targetIndex] > h.heap[parentIndex] {
			swapper := reflect.Swapper(h.heap)
			swapper(targetIndex, parentIndex)
			h.heapifyDown(targetIndex)
		}
	}
}

func (h MinHeap) heapifyUp(childIndex int) {
	parentIndex := int(math.Floor(float64(childIndex) / 2))

	if parentIndex > 0 && parentIndex < len(h.heap) {
		if h.heap[parentIndex] < h.heap[childIndex] {
			swapper := reflect.Swapper(h.heap)
			swapper(parentIndex, childIndex)

			h.heapifyUp(parentIndex)
		}
	}
}
