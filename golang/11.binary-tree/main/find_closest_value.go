package main

import (
	"math"

	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"github.com/AmirAhmadzadeh/binary_tree/node"
)

func findClosestValueInBinaryTree(tree *binary_tree.BinaryTree, target int) float64 {
	result := math.Inf(+1)
	queue := []*node.Node{tree.GetRoot()}

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]
		if math.Abs(float64(vertex.Value()-target)) <= math.Abs(result-float64(target)) {
			result = float64(vertex.Value())
		}
		if vertex.Left() != nil && target < vertex.Value() {
			queue = append(queue, vertex.Left())
		}
		if vertex.Right() != nil && target > vertex.Value() {
			queue = append(queue, vertex.Right())
		}
	}

	return result
}

func findClosestValueInBinaryTreeDfsCall(vertex *node.Node, target float64, closest float64) float64 {
	if vertex == nil {
		return closest
	}
	if math.Abs(target-float64(vertex.Value())) < math.Abs(target-closest) {
		closest = float64(vertex.Value())
	}

	if vertex.Right() != nil && target > float64(vertex.Value()) {
		return findClosestValueInBinaryTreeDfsCall(vertex.Right(), target, closest)
	} else if vertex.Left() != nil && target < float64(vertex.Value()) {
		return findClosestValueInBinaryTreeDfsCall(vertex.Left(), target, closest)
	}

	return closest
}

func findClosestValueInBinaryTreeDfs(binaryTree *binary_tree.BinaryTree, target float64) float64 {
	return findClosestValueInBinaryTreeDfsCall(binaryTree.GetRoot(), target, math.Inf(1))
}
