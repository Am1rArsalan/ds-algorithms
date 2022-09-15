package main

type Node[T any] struct {
	Value T
	Next  *Node[T]
}

func NewNode[T any](value T) *Node[T] {
	return &Node[T]{
		Value: value,
		Next:  nil,
	}
}
