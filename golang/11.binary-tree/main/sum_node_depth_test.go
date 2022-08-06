package main

import (
	"testing"

	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
)

func generateTestCase() *binary_tree.BinaryTree {
	bt := binary_tree.New(1)

	root := bt.GetRoot()
	right := root.PushRightLeaf(3)
	right.PushRightLeaf(7)
	right.PushLeftLeaf(6)
	left := root.PushLeftLeaf(2)
	left.PushRightLeaf(5)
	left = left.PushLeftLeaf(4)
	left.PushLeftLeaf(8)
	left.PushRightLeaf(9)

	return bt
}

func TestCalculateSumOfNodeDepthDfs(t *testing.T) {
	expectedResult := 16
	result := calculateSumOfDepth(generateTestCase())
	if result != expectedResult {
		t.Errorf("** first test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}

func TestCalculateSumOfNodeDepthBfs(t *testing.T) {
	expectedResult := 16
	result := calculateSumOfDepthBfs(generateTestCase())
	if result != expectedResult {
		t.Errorf("** first test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}
