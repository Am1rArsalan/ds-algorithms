package main

import (
	"math"

	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"github.com/AmirAhmadzadeh/problems/node"
)

func calculateMaxDepth(node *node.Node, max float64) float64 {
	if node == nil {
		return max
	}

	max += 1
	return math.Max(calculateMaxDepth(node.Right(), max), calculateMaxDepth(node.Left(), max))
}

func findMaxDepth(tree *binary_tree.BinaryTree) int {
	return int(calculateMaxDepth(tree.GetRoot(), 0.0))
}
