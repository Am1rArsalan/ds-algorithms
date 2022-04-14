package main

import (
	"fmt"
	"io"
)

type Node struct {
	left  *Node
	right *Node
	data  int64
}

type BinaryTree struct {
	root *Node
}

func (t *BinaryTree) insert(data int64) *BinaryTree {
	if t.root == nil {
		t.root = &Node{data: data, left: nil, right: nil}
	} else {
		t.root.insert(data)
	}
	return t
}

func (n *Node) insert(data int64) {
	if n == nil {
		return
	} else if data <= n.data {
		if n.left == nil {
			n.left = &Node{data: data, left: nil, right: nil}
		} else {
			n.left.insert(data)
		}
	} else {
		if n.right == nil {
			n.right = &Node{data: data, left: nil, right: nil}
		} else {
			n.right.insert(data)
		}
	}
}

func (n *Node) insertRight(data int64) {
	if n == nil {
		return
	}

	if n.right == nil {
		n.right = &Node{data: data, left: nil, right: nil}
	} else {
		n.right.insert(data)
	}
}

func (n *Node) insertLeft(data int64) {
	if n == nil {
		return
	}

	if n.left == nil {
		n.left = &Node{data: data, left: nil, right: nil}
	} else {
		n.left.insert(data)
	}
}

func print(w io.Writer, node *Node, ns int, ch rune) {
	if node == nil {
		return
	}

	for i := 0; i < ns; i++ {
		fmt.Fprint(w, " ")
	}
	fmt.Fprintf(w, "%c:%v\n", ch, node.data)
	print(w, node.left, ns+2, 'L')
	print(w, node.right, ns+2, 'R')
}
