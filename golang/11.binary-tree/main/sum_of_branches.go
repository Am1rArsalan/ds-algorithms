package main

import (
	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"github.com/AmirAhmadzadeh/binary_tree/node"
)

func sumOfBranchesRecurse(vertex *node.Node, sums *[]float64, prev float64) {
	if vertex != nil {
		prev = prev + float64(vertex.Value())
	}

	if !vertex.HasLeftChild() && !vertex.HasRightChild() {
		*sums = append(*sums, prev)
		return
	}

	if vertex.HasLeftChild() {
		sumOfBranchesRecurse(vertex.Left(), sums, prev)
	}

	if vertex.HasRightChild() {
		sumOfBranchesRecurse(vertex.Right(), sums, prev)
	}
}

func sumOfBranches(binaryTree *binary_tree.BinaryTree) []float64 {
	sums := []float64{}
	sumOfBranchesRecurse(binaryTree.GetRoot(), &sums, 0)

	return sums
}
