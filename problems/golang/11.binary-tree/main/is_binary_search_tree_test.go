package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"testing"
)

// fisrt test case
func TestIsBinarySearchTree(t *testing.T) {
	binaryTree := binary_tree.New(12)
	root := binaryTree.GetRoot()
	generatedNode := root.PushLeftLeaf(7)
	generatedNode.PushLeftLeaf(5)
	generatedNode.PushRightLeaf(9)

	generatedNode = root.PushRightLeaf(18)
	generatedNode.PushLeftLeaf(16)
	generatedNode.PushRightLeaf(25)

	result := isBinarySearchTree(root)

	// result should be true
	if !result {
		t.Errorf("1.Expected (%v) is not same as"+
			" actual string (%v)", true, result)
	}
}

func TestIsBinarySearchTree2(t *testing.T) {
	binaryTree := binary_tree.New(13)
	root := binaryTree.GetRoot()

	generatedNode := root.PushLeftLeaf(6)
	generatedNode.PushLeftLeaf(2)

	generatedNode = root.PushRightLeaf(17)
	generatedNode.PushLeftLeaf(10)
	generatedNode.PushRightLeaf(22)

	result := isBinarySearchTree(root)

	// result should be false
	if result {
		t.Errorf("1.Expected (%v) is not same as"+
			" actual string (%v)", false, result)
	}
}
