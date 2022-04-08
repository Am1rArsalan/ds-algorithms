package main

import (
	"errors"
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

func (p *PriorityQueue) getSize() int {
	return len(p.heap)
}

func (p *PriorityQueue) peek() (int, error) {
	if p.isEmpty() {
		return 0.0, errors.New("Empty heap")
	}

	root := p.heap[0]
	poppedValue := p.heap[len(p.heap)-1]
	p.heap = p.heap[:len(p.heap)-1]
	p.heap[0] = poppedValue
	p.heapifyDown(0)

	return root, nil
}

func (p *PriorityQueue) remove(idx int) {
	p.heap[idx] = p.heap[len(p.heap)-1]
	p.heap = p.heap[:len(p.heap)-1]
	p.heapifyDown(idx)
}

func (p *PriorityQueue) pop() (int, error) {
	if p.isEmpty() {
		return 0.0, errors.New("Empty heap")
	}
	removed := p.heap[len(p.heap)-1]
	p.remove(len(p.heap) - 1)
	return removed, nil
}
