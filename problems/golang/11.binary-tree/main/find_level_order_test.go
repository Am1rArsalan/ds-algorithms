package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"reflect"
	"testing"
)

func TestFindLevelOrder(t *testing.T) {
	binaryTree := binary_tree.New(3)
	root := binaryTree.GetRoot()
	root.PushRightLeaf(1).PushRightLeaf(4)
	generatedNode := root.PushLeftLeaf(6)
	generatedNode.PushRightLeaf(2)
	generatedNode.PushLeftLeaf(9).PushRightLeaf(5).PushLeftLeaf(8)
	result := findLevelOrder(binaryTree)
	expectedResult := [][]int{{3}, {6, 1}, {9, 2, 4}, {5}, {8}}

	if !reflect.DeepEqual(expectedResult, result) {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}
