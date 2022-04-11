package priority_queue

import (
	"errors"
	"math"
	"reflect"
)

type PriorityQueue struct {
	heap       []int
	competitor func(a, b int) bool
}

func NewPriorityQueue(initial []int, competitor func(a, b int) bool) *PriorityQueue {
	instance := PriorityQueue{
		heap:       []int{},
		competitor: competitor,
	}

	instance.buildHeap(initial)
	return &instance
}

func (p *PriorityQueue) GetSize() int {
	return len(p.heap)
}

func (p *PriorityQueue) Peek() (int, error) {
	if p.IsEmpty() {
		return 0.0, errors.New("Empty heap")
	}

	root := p.heap[0]
	poppedValue := p.heap[len(p.heap)-1]
	p.heap = p.heap[:len(p.heap)-1]

	if p.GetSize() == 0 {
		p.heap = append(p.heap, poppedValue)
	} else {
		p.heap[0] = poppedValue
	}

	p.heapifyDown(0)

	return root, nil
}

func (p *PriorityQueue) Remove(idx int) {
	p.heap[idx] = p.heap[len(p.heap)-1]
	p.heap = p.heap[:len(p.heap)-1]
	p.heapifyDown(idx)
}

func (p *PriorityQueue) pop() (int, error) {
	if p.IsEmpty() {
		return 0.0, errors.New("Empty heap")
	}
	removed := p.heap[len(p.heap)-1]
	p.Remove(len(p.heap) - 1)
	return removed, nil
}

func (p *PriorityQueue) Insert(value int) *PriorityQueue {
	p.heap = append(p.heap, value)
	p.heapifyUp(len(p.heap) - 1)
	return p
}

func (p *PriorityQueue) buildHeap(initial []int) {
	for _, value := range initial {
		p.heap = append(p.heap, value)
		p.heapifyUp(len(p.heap) - 1)
	}
}

func (p *PriorityQueue) heapifyUp(idx int) {
	if idx == 0 || p.IsEmpty() {
		return
	}
	parentIndex := parent(idx)

	//if p.heap[parentIndex] > p.heap[idx] {
	if p.competitor(p.heap[parentIndex], p.heap[idx]) {
		temp := p.heap[idx]
		p.heap[idx] = p.heap[parentIndex]
		p.heap[parentIndex] = temp
		p.heapifyUp(parentIndex)
	}
}

func leftChild(idx int) int {
	return idx*2 + 1
}

func rightChild(idx int) int {
	return idx*2 + 2
}

func (p *PriorityQueue) heapifyDown(idx int) {
	leftChildIndex := leftChild(idx)
	rightChildIndex := rightChild(idx)
	targetIndex := leftChildIndex

	if rightChildIndex < p.GetSize() {
		if p.competitor(p.heap[leftChildIndex], p.heap[rightChildIndex]) {
			targetIndex = rightChildIndex
		}
	}

	if targetIndex < p.GetSize() && p.competitor(p.heap[idx], p.heap[targetIndex]) {
		swapperFn := reflect.Swapper(p.heap)
		swapperFn(targetIndex, idx)
		p.heapifyDown(targetIndex)
	}

}

func parent(index int) int {
	return int(math.Floor((float64(index-1) / 2)))
}

func (p *PriorityQueue) getHeap() []int {
	return p.heap
}

func (p *PriorityQueue) IsEmpty() bool {
	return len(p.heap) == 0
}
