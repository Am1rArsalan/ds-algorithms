package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"github.com/AmirAhmadzadeh/problems/node"
)

func dfs(node *node.Node, level int, result *[]int) {
	//kill condition
	if node == nil {
		return
	}

	if node.Right() != nil {
		dfs(node.Right(), level+1, result)
	}

	if node.Left() != nil {
		dfs(node.Left(), level+1, result)
	}
}

// dfs
func findVisibleNodesFromRightSide1(tree *binary_tree.BinaryTree) []int {
	root := tree.GetRoot()
	result := []int{}

	dfs(root, 0, &result)

	return result
}

// bfs
func findVisibleNodesFromRightSide2(tree *binary_tree.BinaryTree) []int {
	root := tree.GetRoot()
	queue := []*node.Node{root}
	result := []int{}

	for len(queue) > 0 {
		queueLength := len(queue)
		level := []int{}

		for i := 0; i < queueLength; i++ {
			vertex := queue[0]
			queue = queue[1:]
			if len(level) == 0 {
				level = append(level, vertex.Value())
			}

			if vertex.Right() != nil {
				queue = append(queue, vertex.Right())
			}

			if vertex.Left() != nil {
				queue = append(queue, vertex.Left())
			}

		}

		if len(level) == 1 {
			result = append(result, level[0])
		}
	}

	return result
}
