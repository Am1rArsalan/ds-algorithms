package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}

///////////////////////////////////// Node
type Node struct {
	Value int
	Next  *Node
}

func NewNode(value int) *Node {
	return &Node{
		Value: value,
		Next:  nil,
	}
}

/////////////////////////////////// LinkedList
type LinkedList struct {
	head *Node
}

func NewLinkedList() *LinkedList {
	return &LinkedList{}
}

func (list LinkedList) GetHead() *Node {
	return list.head
}

func (list LinkedList) GetListLength() int {
	temp := list.head
	count := 0
	for temp != nil {
		count += 1
		temp = temp.Next
	}
	return count
}

func (list LinkedList) Push(value int) *LinkedList {
    newNode := Node { 
        value : Value, 
        Next : 
}

	if list.head == nil {
		fmt.Print("fkajkfda")
		list.head = newNode
		return &list
	}
	temp := list.head
	for temp.Next != nil {
		temp = temp.Next
	}
	temp.Next = newNode
	return &list
}

func (list LinkedList) Pop() *Node {
	temp := list.GetHead()
	for temp.Next.Next != nil {
		temp = temp.Next
	}
	removedNode := &temp.Next
	temp.Next = nil
	return *removedNode
}

func (list LinkedList) Shift() {
	list.head = list.head.Next
}

func (list LinkedList) Display() {
	fmt.Println("1", list.head)
	fmt.Println("2", list)
	temp := list.head

	for temp != nil {
		fmt.Print(" -> ", temp.Value)
		temp = temp.Next
	}
}

func (list LinkedList) Reverse() {
	//reverse logic
}

func (list LinkedList) ReversePartOfList(m, n int) {
	//reverse logic
}

func (list LinkedList) AddCycle(cycleIndex int) {
	//reverse logic
}

func (list LinkedList) DetectAndResolveCycle() {
	//reverse logic
}

func (list LinkedList) FindCycleNode() *Node {
	return &Node{Value: 10, Next: nil}
}
