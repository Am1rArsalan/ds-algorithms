package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"testing"
)

// bfs first test case
func TestCountNodes1(t *testing.T) {
	binaryTree := binary_tree.New(1)
	root := binaryTree.GetRoot()

	generatedNode := root.PushLeftLeaf(2)
	childNode := generatedNode.PushLeftLeaf(4)
	childNode.PushLeftLeaf(8)
	childNode.PushRightLeaf(9)
	childNode = generatedNode.PushRightLeaf(5)
	childNode.PushLeftLeaf(10)
	childNode.PushRightLeaf(11)
	generatedNode = root.PushRightLeaf(3)
	childNode = generatedNode.PushLeftLeaf(6)
	childNode.PushLeftLeaf(12)
	childNode.PushRightLeaf(13)
	childNode = generatedNode.PushRightLeaf(7)
	childNode.PushLeftLeaf(14)
	childNode.PushRightLeaf(15)

	result := countNodes1(binaryTree)
	expectedResult := 15

	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}

// bfs second test case
func TestCountNodes2(t *testing.T) {
	binaryTree := binary_tree.New(1)
	root := binaryTree.GetRoot()

	generatedNode := root.PushLeftLeaf(2)
	childNode := generatedNode.PushLeftLeaf(4)
	childNode.PushLeftLeaf(8)
	childNode.PushRightLeaf(9)
	childNode = generatedNode.PushRightLeaf(5)
	childNode.PushLeftLeaf(10)
	childNode.PushRightLeaf(11)
	//
	generatedNode = root.PushRightLeaf(3)
	childNode = generatedNode.PushLeftLeaf(6)
	childNode.PushLeftLeaf(12)

	generatedNode.PushRightLeaf(7)

	result := countNodes1(binaryTree)
	expectedResult := 12

	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}

// bfs third test case
func TestCountNodes3(t *testing.T) {
	binaryTree := binary_tree.New(1)
	root := binaryTree.GetRoot()
	generatedNode := root.PushLeftLeaf(2)
	childNode := generatedNode.PushLeftLeaf(4)
	childNode.PushLeftLeaf(8)
	childNode = generatedNode.PushRightLeaf(5)
	generatedNode = root.PushRightLeaf(3)
	generatedNode.PushLeftLeaf(6)
	generatedNode.PushRightLeaf(7)

	result := countNodes1(binaryTree)
	expectedResult := 8
	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}

// dfs first test case
func TestDfsCountNodes1(t *testing.T) {
	binaryTree := binary_tree.New(1)
	root := binaryTree.GetRoot()

	generatedNode := root.PushLeftLeaf(2)
	childNode := generatedNode.PushLeftLeaf(4)
	childNode.PushLeftLeaf(8)
	childNode.PushRightLeaf(9)
	childNode = generatedNode.PushRightLeaf(5)
	childNode.PushLeftLeaf(10)
	childNode.PushRightLeaf(11)
	generatedNode = root.PushRightLeaf(3)
	childNode = generatedNode.PushLeftLeaf(6)
	childNode.PushLeftLeaf(12)
	childNode.PushRightLeaf(13)
	childNode = generatedNode.PushRightLeaf(7)
	childNode.PushLeftLeaf(14)
	childNode.PushRightLeaf(15)

	result := countNodes2(binaryTree)
	expectedResult := 15

	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}

// dfs second test case
func TestDfsCountNodes2(t *testing.T) {
	binaryTree := binary_tree.New(1)
	root := binaryTree.GetRoot()

	generatedNode := root.PushLeftLeaf(2)
	childNode := generatedNode.PushLeftLeaf(4)
	childNode.PushLeftLeaf(8)
	childNode.PushRightLeaf(9)
	childNode = generatedNode.PushRightLeaf(5)
	childNode.PushLeftLeaf(10)
	childNode.PushRightLeaf(11)
	//
	generatedNode = root.PushRightLeaf(3)
	childNode = generatedNode.PushLeftLeaf(6)
	childNode.PushLeftLeaf(12)

	generatedNode.PushRightLeaf(7)

	result := countNodes2(binaryTree)
	expectedResult := 12

	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}

// dfs third test case
func TestDfsCountNodes3(t *testing.T) {
	binaryTree := binary_tree.New(1)
	root := binaryTree.GetRoot()
	generatedNode := root.PushLeftLeaf(2)
	childNode := generatedNode.PushLeftLeaf(4)
	childNode.PushLeftLeaf(8)
	childNode = generatedNode.PushRightLeaf(5)
	generatedNode = root.PushRightLeaf(3)
	generatedNode.PushLeftLeaf(6)
	generatedNode.PushRightLeaf(7)

	result := countNodes2(binaryTree)
	expectedResult := 8
	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}
