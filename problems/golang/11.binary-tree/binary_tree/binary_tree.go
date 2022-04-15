package binary_tree

import "github.com/AmirAhmadzadeh/problems/node"

type BinaryTree struct {
	root *node.Node
	size int
}

func New(value int) *BinaryTree {
	return &BinaryTree{
		root: node.New(value),
		size: 1,
	}
}

func (tree *BinaryTree) Insert(value int) *BinaryTree {
	tree.size += 1
	tree.root.Insert(value)
	return tree
}

func (tree *BinaryTree) Debug() {
	tree.root.Debug()
}

func (tree *BinaryTree) GetRoot() *node.Node {
	return tree.root
}

func (tree *BinaryTree) GetSize() int {
	return tree.size
}
