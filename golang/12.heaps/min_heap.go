package main

import (
	"math"
	"reflect"
)

type MinHeap struct {
	heap []int
}

func NewMinHeap(initialHeap []int) *MinHeap {
	minHeap := &MinHeap{
		heap: initialHeap,
	}

	minHeap.buildHeap()

	return minHeap
}

func (h *MinHeap) buildHeap() {
	for i := int(math.Floor((float64(len(h.heap)-1) / 2))); i >= 0; i-- {
		h.heapifyDown(i)
	}
}

func (h *MinHeap) Insert(value int) {
	h.heap = append(h.heap, value)
	h.heapifyUp(len(h.heap) - 1)
}

func (h *MinHeap) Peek() int {
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

func (h *MinHeap) GetHeap() []int {
	return h.heap
}

func (h *MinHeap) heapifyDown(parentIndex int) {
	leftChildIndex := 2*parentIndex + 1
	rightChildIndex := 2*parentIndex + 2

	targetIndex := leftChildIndex

	if rightChildIndex < len(h.heap) && leftChildIndex < len(h.heap) {
		if h.heap[rightChildIndex] < h.heap[leftChildIndex] {
			targetIndex = rightChildIndex
		}
	}

	if targetIndex < len(h.heap) {
		if h.heap[parentIndex] > h.heap[targetIndex] {
			swapper := reflect.Swapper(h.heap)
			swapper(targetIndex, parentIndex)
			h.heapifyDown(targetIndex)
		}
	}
}

func (h *MinHeap) heapifyUp(childIndex int) {
	if childIndex == 0 {
		return
	}

	parentIndex := int(math.Floor(float64(childIndex) / 2))

	if parentIndex >= 0 && parentIndex < len(h.heap) {
		if h.heap[parentIndex] > h.heap[childIndex] {
			swapper := reflect.Swapper(h.heap)
			swapper(parentIndex, childIndex)

			h.heapifyUp(parentIndex)
		}
	}
}
