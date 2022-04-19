package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"testing"
)

func TestFindMaxDepth1(t *testing.T) {
	binaryTree := binary_tree.New(1)
	root := binaryTree.GetRoot()
	// right
	root.PushRightLeaf(2)
	// left
	generateNode := root.PushLeftLeaf(2)
	generateNode.PushLeftLeaf(4)
	generateNode = generateNode.PushRightLeaf(5)
	generateNode.PushRightLeaf(6)
	expectedResult := 4
	result := findMaxDepth(binaryTree)

	if expectedResult != result {
		t.Errorf("1.Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	binaryTree = binary_tree.New(1)
	expectedResult = 1
	result = findMaxDepth(binaryTree)
	if expectedResult != result {
		t.Errorf("2.Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}

// worst test case
func TestFindMaxDepth2(t *testing.T) {
	binaryTree := binary_tree.New(1)
	root := binaryTree.GetRoot()

	root.
		PushRightLeaf(2).
		PushRightLeaf(3).
		PushRightLeaf(4).
		PushRightLeaf(5).
		PushRightLeaf(6)

	expectedResult := 6
	result := findMaxDepth(binaryTree)

	if expectedResult != result {
		t.Errorf("1.Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}
