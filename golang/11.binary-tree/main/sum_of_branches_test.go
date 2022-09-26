package main

import (
	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"reflect"
	"testing"
)

func generateBinaryTreeForTestCases() *binary_tree.BinaryTree {
	bt := binary_tree.New(1)
	root := bt.GetRoot()
	right := root.PushRightLeaf(3)
	right.PushRightLeaf(7)
	right.PushLeftLeaf(6)
	left := root.PushLeftLeaf(2)
	left.PushRightLeaf(5).PushRightLeaf(10)
	generateNode := left.PushLeftLeaf(4)
	generateNode.PushLeftLeaf(8)
	generateNode.PushRightLeaf(9)

	return bt
}

func TestSumOfBranchesDfs(t *testing.T) {
	bt := generateBinaryTreeForTestCases()
	expectedResult := []float64{15, 16, 18, 10, 11}

    result := sumOfBranches(bt)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Expected (%v) is not same as"+
			" actual (%v)", expectedResult, result)
	}
}

