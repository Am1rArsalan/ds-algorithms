package main

import (
	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"github.com/AmirAhmadzadeh/binary_tree/node"
)

// bfs
func calculateSumOfBranchesBfs(binaryTree *binary_tree.BinaryTree) []float64 {
	queue := []*node.Node{binaryTree.GetRoot()}
	sums := []float64{}
	prev := 0

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]

		if vertex != nil {
			prev = prev + vertex.Value()
		}

		if vertex.HasLeftChild() {
			queue = append(queue, vertex.Left())
		}

		if vertex.HasRightChild() {
			queue = append(queue, vertex.Right())
		}

		if !vertex.HasLeftChild() && !vertex.HasRightChild() {
			sums = append(sums, float64(prev))
		}
	}

	return sums
}

func sumOfBranchesCall(vertex *node.Node, sums *[]float64, prev float64) {
	if vertex != nil {
		prev = prev + float64(vertex.Value())
	}

	if vertex.Left() == nil && vertex.Right() == nil {
		*sums = append(*sums, prev)
		return
	}

	if vertex.HasLeftChild() {
		sumOfBranchesCall(vertex.Left(), sums, prev)
	}

	if vertex.HasRightChild() {
		sumOfBranchesCall(vertex.Right(), sums, prev)
	}

}

func calculateSumOfBranches(binaryTree *binary_tree.BinaryTree) []float64 {
	sums := []float64{}
	sumOfBranchesCall(binaryTree.GetRoot(), &sums, 0)

	return sums
}
