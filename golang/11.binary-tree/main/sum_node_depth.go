package main

import (
	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"github.com/AmirAhmadzadeh/binary_tree/node"
)

func calculateSumOfDepthCall(vertex *node.Node, depth int) int {
	if vertex != nil {
		return depth + calculateSumOfDepthCall(vertex.Left(), depth+1) + calculateSumOfDepthCall(vertex.Right(), depth+1)
	}

	return 0
}

func calculateSumOfDepth(bt *binary_tree.BinaryTree) int {
	return calculateSumOfDepthCall(bt.GetRoot(), 0)
}

func calculateSumOfDepthBfs(bt *binary_tree.BinaryTree) int {
	queue := []*node.Node{bt.GetRoot()}
	queueLength := len(queue)
	sum := 0
	depth := 0

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]
		queueLength = queueLength - 1

		if vertex != nil {
			if vertex.HasLeftChild() {
				queue = append(queue, vertex.Left())
			}

			if vertex.HasRightChild() {
				queue = append(queue, vertex.Right())
			}

			sum += depth
			if queueLength == 0 {
				depth += 1
				queueLength = len(queue)
			}
		}
	}

	return sum
}
