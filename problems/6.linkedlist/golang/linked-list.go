package main

import "fmt"

type LinkedList struct {
	head   *Node
	Length int
}

func NewLinkedList() *LinkedList {
	return &LinkedList{}
}

func (list *LinkedList) GetHead() *Node {
	return list.head
}

func (list *LinkedList) Insert(value int) *LinkedList {
	if list.head == nil {
		list.head = NewNode(value)
		list.Length++
		return list
	}

	newHead := NewNode(value)
	newHead.Next = list.head
	list.head = newHead
	list.Length++
	return list
}

func (list *LinkedList) Push(value int) *LinkedList {
	if list.head == nil {
		list.head = NewNode(value)
		list.Length++
		return list
	}
	temp := list.head
	for temp.Next != nil {
		temp = temp.Next
	}
	temp.Next = NewNode(value)
	list.Length++
	return list
}

func (list *LinkedList) Pop() Node {
	temp := list.GetHead()
	for temp.Next.Next != nil {
		temp = temp.Next
	}
	removedNode := *temp.Next
	temp.Next = nil
	list.Length--
	return removedNode
}

func (list *LinkedList) Shift() Node {
	removedNode := *list.head
	list.head = list.head.Next
	list.Length--

	return removedNode
}

func (list *LinkedList) Display() {
	temp := list.head

	for temp != nil {
		fmt.Print(" -> ", temp.Value)
		temp = temp.Next
	}
	fmt.Println("\n---------------------------------")
}

func (list *LinkedList) Reverse() {
	temp := list.head
	var prev *Node = nil
	var next *Node = nil

	for temp != nil {
		next = temp.Next
		temp.Next = prev
		prev = temp
		temp = next
	}

	list.head = prev
}

func (list *LinkedList) ReversePartOfList(start, end int) {
	if end >= list.Length {
		return
	}
	current := list.head
	prev := list.head
	counter := 0

	for counter < start {
		prev = current
		current = current.Next
		counter += 1
	}

	var next *Node = nil
	var newPrev *Node = nil
	tail := current

	for counter <= end {
		next = current.Next
		current.Next = newPrev
		newPrev = current
		current = next
		counter += 1
	}

	fmt.Println("what is perv value inside of reverse part of list", prev)
	prev.Next = newPrev
	tail.Next = current
	list.head = prev
}

func (list *LinkedList) AddCycle(cycleIndex int) {
	//reverse logic
}

func (list *LinkedList) DetectAndResolveCycle() {
	//reverse logic
}

func (list *LinkedList) FindCycleNode() *Node {
	return &Node{Value: 10, Next: nil}
}
