package main

import "fmt"

type LinkedList[T any] struct {
	head   *Node[T]
	Length int
}

func NewLinkedList[T any]() *LinkedList[T] {
	return &LinkedList[T]{}
}

func (list *LinkedList[T]) GetHead() *Node[T] {
	return list.head
}

func (list *LinkedList[T]) Insert(value T) *LinkedList[T] {
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

func (list *LinkedList[T]) Push(value T) *LinkedList[T] {
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

func (list *LinkedList[T]) Pop() Node[T] {
	temp := list.GetHead()
	for temp.Next.Next != nil {
		temp = temp.Next
	}
	removedNode := *temp.Next
	temp.Next = nil
	list.Length--
	return removedNode
}

func (list *LinkedList[T]) Shift() Node[T] {
	removedNode := *list.head
	list.head = list.head.Next
	list.Length--

	return removedNode
}

func (list *LinkedList[T]) Display() {
	temp := list.head

	for temp != nil {
		fmt.Print(" -> ", temp.Value)
		temp = temp.Next
	}
	fmt.Println("\n---------------------------------")
}


func (list *LinkedList[T]) Reverse() {
	temp := list.head
	var prev *Node[T] = nil
	var next *Node[T] = nil

	for temp != nil {
		next = temp.Next
		temp.Next = prev
		prev = temp
		temp = next
	}

	list.head = prev
}

func (list *LinkedList[T]) ReversePartOfList(start, end int) {
	if end >= list.Length {
		return
	}
	current := list.head
	var startNode *Node[T] = nil
	counter := 0

	for counter < start {
		startNode = current
		current = current.Next
		counter += 1
	}

	var next *Node[T] = nil
	var prev *Node[T] = nil
	tail := current

	for counter <= end {
		next = current.Next
		current.Next = prev
		prev = current
		current = next
		counter += 1
	}

	fmt.Println("what is startNode value inside of reverse part of list",
		startNode)

	if startNode != nil {
		startNode.Next = prev
	}

	if tail != nil {
		tail.Next = current
	}

	if start == 0 {
		list.head = prev
	}
}



func DisplayWithGivenHead[T any](head *Node[T]) {
	temp := head

	for temp != nil {
		fmt.Print(" -> ", temp.Value)
		temp = temp.Next
	}

	fmt.Println("\n---------------------------------")
}

func (list *LinkedList[T]) RemoveDuplicateElements() { 
    seen := make(map[any]bool) 
    node := list.head 
    var prev *Node[T] = nil 


    for node != nil { 
        if _,ok := seen[node.Value]; ok && prev != nil { 
            prev.Next = node.Next
            node = prev.Next
        } else { 
            seen[node.Value] = true 
            prev = node 
            node = node.Next
        }
    }
}

func (list *LinkedList[T]) HasDuplicateElement() bool { 
    hasDuplicateElement := false 
    return hasDuplicateElement
}


func (list *LinkedList[T]) AddCycle(cycleIndex int) {
    //
}

func (list *LinkedList[T]) DetectAndResolveCycle() {
    //
}

//func (list *LinkedList[T]) FindCycleNode() *Node[T] {
//return &Node[T]{Value: 10, Next: nil}
//}
