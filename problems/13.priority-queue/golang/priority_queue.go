package main

import (
	"math"
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

func (p *PriorityQueue) insert(value int) *PriorityQueue {
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
	if idx == 0 || p.isEmpty() {
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
	target := rightChildIndex

	if p.heap[leftChildIndex] < p.heap[rightChildIndex] {
		target = leftChildIndex
	}

	//if p.heap[idx] > p.heap[target] {
	if p.competitor(p.heap[idx], p.heap[target]) {
		temp := p.heap[idx]
		p.heap[idx] = p.heap[target]
		p.heap[target] = temp
		p.heapifyDown(target)
	}
}

func parent(index int) int {
	return int(math.Floor((float64(index-1) / 2)))
}

func (p *PriorityQueue) getHeap() []int {
	return p.heap
}

func (p *PriorityQueue) isEmpty() bool {
	return len(p.heap) == 0
}

//export interface PriorityQueue {
//getSize: () => number;
//peek: () => number;
//remove: (index: number) => void;
//pop: () => number | undefined;
//}
