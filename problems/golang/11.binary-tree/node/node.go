package node

import "fmt"

type Node struct {
	value int
	left  *Node
	right *Node
}

func New(value int) *Node {
	return &Node{
		value: value,
		left:  nil,
		right: nil,
	}
}

func (n *Node) PushRightLeaf(value int) *Node {
	newNode := New(value)

	n.right = newNode

	return newNode
}

func (n *Node) PushLeftLeaf(value int) *Node {
	if n.left == nil {
		n.left = New(value)
	} else {
		n.left.Insert(value)
	}
	return n.left
}

func (n *Node) Insert(value int) *Node {
	if value > n.value {
		if n.right != nil {
			return n.right.Insert(value)
		}
		return n.PushRightLeaf(value)
	}

	if n.left != nil {
		return n.left.Insert(value)
	}

	return n.PushLeftLeaf(value)
}

func (n *Node) Debug() {
	if n.left != nil {
		n.left.Debug()
	}

	fmt.Println(n.value)

	if n.right != nil {
		n.right.Debug()
	}
}
