package binary_tree

import "github.com/AmirAhmadzadeh/problems/node"

type BinaryTree struct {
	root *node.Node
}

func New(value int) BinaryTree {
	return BinaryTree{
		root: node.New(value),
	}
}

func (tree *BinaryTree) Insert(value int) *BinaryTree {
	tree.root.Insert(value)
	return tree
}

func (tree *BinaryTree) Debug() {
	tree.root.Debug()
}
