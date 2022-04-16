package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"github.com/AmirAhmadzadeh/problems/node"
)

func findLevelOrder(tree *binary_tree.BinaryTree) [][]int {
	result := [][]int{}
	root := tree.GetRoot()
	queue := []*node.Node{root}

	for len(queue) > 0 {
		queueLength := len(queue)
		level := []int{}

		for count := 0; count < queueLength; count++ {
			vertex := queue[0]
			queue = queue[1:]
			level = append(level, vertex.Value())

			if vertex.Left() != nil {
				queue = append(queue, vertex.Left())
			}

			if vertex.Right() != nil {
				queue = append(queue, vertex.Right())
			}
		}

		result = append(result, level)
	}

	return result
}
