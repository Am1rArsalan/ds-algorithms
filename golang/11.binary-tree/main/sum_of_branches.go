package main

import (
	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"github.com/AmirAhmadzadeh/binary_tree/node"
)

func calculateSumOfBranchesBfs(binaryTree *binary_tree.BinaryTree) []float64 {
	sums := []float64{}
	queue := []*node.Node{binaryTree.GetRoot()}
	prev := 0

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]

		prev = prev + vertex.Value()

		if vertex.Left() == nil && vertex.Right() == nil {
			sums = append(sums, float64(prev))
		}

		if vertex.Left() != nil {
			queue = append(queue, vertex.Left())
		}

		if vertex.Right() != nil {
			queue = append(queue, vertex.Right())
		}
	}

	return sums
}

func sumOfBranchesCall(vertex *node.Node, sums *[]float64, prev float64) {
	if vertex == nil {
		return
	}

	prev = prev + float64(vertex.Value())

	if vertex.Left() == nil && vertex.Right() == nil {
		*sums = append(*sums, prev)
		return
	}

	if vertex.Left() != nil {
		sumOfBranchesCall(vertex.Left(), sums, prev)
	}

	if vertex.Right() != nil {
		sumOfBranchesCall(vertex.Right(), sums, prev)
	}
}

func calculateSumOfBranches(binaryTree *binary_tree.BinaryTree) []float64 {
	sums := []float64{}
	sumOfBranchesCall(binaryTree.GetRoot(), &sums, 0)

	return sums
}
