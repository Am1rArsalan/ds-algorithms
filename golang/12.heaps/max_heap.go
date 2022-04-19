package main

import (
	"math"
	"reflect"
)

type MaxHeap struct {
	heap []int
}

func NewMaxHeap(initialHeap []int) *MaxHeap {
	maxHeap := &MaxHeap{
		heap: initialHeap,
	}
	maxHeap.buildHeap()

	return maxHeap
}

func (h *MaxHeap) buildHeap() {
	for i := int(math.Floor(float64(len(h.heap) / 2))); i >= 0; i-- {
		h.heapifyDown(i)
	}
}

func (h *MaxHeap) Insert(value int) {
	h.heap = append(h.heap, value)
	h.heapifyUp(len(h.heap) - 1)
}

func (h *MaxHeap) Peek() int {
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

func (h *MaxHeap) GetHeap() []int {
	return h.heap
}

func (h *MaxHeap) heapifyDown(parentIndex int) {
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

func (h *MaxHeap) heapifyUp(childIndex int) {
	if childIndex == 0 {
		return
	}
	parentIndex := int(math.Floor(float64(childIndex) / 2))

	if parentIndex >= 0 && parentIndex < len(h.heap) {
		if h.heap[childIndex] > h.heap[parentIndex] {
			swapper := reflect.Swapper(h.heap)
			swapper(parentIndex, childIndex)

			h.heapifyUp(parentIndex)
		}
	}
}
