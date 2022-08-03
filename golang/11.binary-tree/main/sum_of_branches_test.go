package main

import (
	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"reflect"
	"testing"
)

func TestSumOfBranchesDfs(t *testing.T) {
	bt := binary_tree.New(1)
	//expectedResult := []float64{15, 16, 18, 10, 11}
	root := bt.GetRoot()
	right := root.PushRightLeaf(2)
	right.PushRightLeaf(7)
	right.PushLeftLeaf(6)
	left := root.PushLeftLeaf(2)
	left.PushRightLeaf(5).PushLeftLeaf(10)
	generateNode := left.PushLeftLeaf(8)
	generateNode.PushRightLeaf(9)
	generateNode.PushLeftLeaf(8)
	//result := calculateSumOfBranches(bt)

	//if !reflect.DeepEqual(result, expectedResult) {
	//t.Errorf("Expected (%v) is not same as"+
	//" actual (%v)", expectedResult, result)
	//}
}

func TestSumOfBranchesBfs(t *testing.T) {
	bt := binary_tree.New(1)
	expectedResult := []float64{15, 16, 18, 10, 11}
	root := bt.GetRoot()
	right := root.PushRightLeaf(2)
	right.PushRightLeaf(7)
	right.PushLeftLeaf(6)
	left := root.PushLeftLeaf(2)
	left.PushRightLeaf(5).PushLeftLeaf(10)
	generateNode := left.PushLeftLeaf(8)
	generateNode.PushRightLeaf(9)
	generateNode.PushLeftLeaf(8)
	result := calculateSumOfBranchesBfs(bt)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Expected (%v) is not same as"+
			" actual (%v)", expectedResult, result)
	}
}
