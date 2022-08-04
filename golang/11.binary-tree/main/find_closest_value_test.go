package main

import (
	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"testing"
)

func TestClosestValue(t *testing.T) {
	binaryTree := binary_tree.New(10)
	root := binaryTree.GetRoot()

	right := root.PushRightLeaf(15)
	left := root.PushLeftLeaf(5)
	left.PushRightLeaf(5)
	left.PushLeftLeaf(2).PushLeftLeaf(1)
	right.PushRightLeaf(22)
	right.PushLeftLeaf(13).PushRightLeaf(14)

	result := findClosestValueInBinaryTree(binaryTree, 12)

	if result != float64(13) {
		t.Errorf("** first test case ** Expected (%v) is not same as"+
			" actual (%v)", 13, result)
	}
}

func TestClosestValueDfs(t *testing.T) {
	binaryTree := binary_tree.New(10)
	root := binaryTree.GetRoot()

	right := root.PushRightLeaf(15)
	left := root.PushLeftLeaf(5)
	left.PushRightLeaf(5)
	left.PushLeftLeaf(2).PushLeftLeaf(1)
	right.PushRightLeaf(22)
	right.PushLeftLeaf(13).PushRightLeaf(14)

	result := findClosestValueInBinaryTreeDfs(binaryTree, 12)

	if result != float64(13) {
		t.Errorf("** dfs version ** Expected (%v) is not same as"+
			"(%v)", 13, result)
	}
}
