package main

import (
	"fmt"
	"math"

	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"github.com/AmirAhmadzadeh/binary_tree/node"
)

func findClosestValueInBinaryTree(tree *binary_tree.BinaryTree, value int) float64 {
	result := math.Inf(+1)
	queue := []*node.Node{tree.GetRoot()}
	seen := make(map[int]bool)

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]
		if !seen[vertex.Value()] {
			seen[vertex.Value()] = true
			if math.Abs(float64(vertex.Value()-value)) <= math.Abs(result-float64(value)) {
				result = float64(vertex.Value())
			}
			if vertex.Left() != nil {
				queue = append(queue, vertex.Left())
			}
			if vertex.Right() != nil {
				queue = append(queue, vertex.Right())
			}
		}
	}

	return result
}

func findClosestValueInBinaryTreeDfsCall(vertex *node.Node, target float64, closest float64) float64 {
	fmt.Println("vertex", vertex.Value(), closest)
	if vertex == nil {
		return closest
	}

	if math.Abs(float64(vertex.Value())-target) < math.Abs(closest-target) {
		closest = float64(vertex.Value())
	}

	if vertex.Left() != nil {
		return findClosestValueInBinaryTreeDfsCall(vertex.Left(), target, closest)
	} else if vertex.Right() != nil {
		return findClosestValueInBinaryTreeDfsCall(vertex.Right(), target, closest)
	}

	return closest
}

func findClosestValueInBinaryTreeDfs(binaryTree *binary_tree.BinaryTree, target float64) float64 {
	closest := math.Inf(1)
	closest = findClosestValueInBinaryTreeDfsCall(binaryTree.GetRoot(), target, closest)

	return closest
}
