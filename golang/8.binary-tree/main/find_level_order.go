package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"github.com/AmirAhmadzadeh/problems/node"
)

func findLevelOrderDfsCall(node *node.Node, level int, result *[][]int) {
	if node == nil {
		return
	}

	if len(*result) <= level {
		*result = append(*result, []int{node.Value()})
	} else {
		(*result)[level] = append((*result)[level], node.Value())
	}

	if node.Left() != nil {
		findLevelOrderDfsCall(node.Left(), level+1, result)
	}

	if node.Right() != nil {
		findLevelOrderDfsCall(node.Right(), level+1, result)
	}
}

func findLevelOrderDfs(tree *binary_tree.BinaryTree) [][]int {
	result := [][]int{}
	root := tree.GetRoot()

	findLevelOrderDfsCall(root, 0, &result)

	return result
}

func findLevelOrderBfs(tree *binary_tree.BinaryTree) [][]int {
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
