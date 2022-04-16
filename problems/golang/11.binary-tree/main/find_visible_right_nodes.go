package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"github.com/AmirAhmadzadeh/problems/node"
)

func dfs(result *[]int, queue *[]*node.Node) []int {
	if len(*queue) == 0 {
		return *result
	}

	queueLength := len(*queue)
	level := []int{}

	for i := 0; i < queueLength; i++ {
		vertex := (*queue)[0]
		*queue = (*queue)[1:]
		if len(level) == 0 {
			level = append(level, vertex.Value())
		}

		if vertex.Right() != nil {
			*queue = append(*queue, vertex.Right())
		}

		if vertex.Left() != nil {
			*queue = append(*queue, vertex.Left())
		}
	}

	if len(level) == 1 {
		*result = append(*result, level[0])
	}

	return dfs(result, queue)
}

// bfs
func findVisibleNodesFromRightSide1(tree *binary_tree.BinaryTree) []int {
	root := tree.GetRoot()
	result := []int{}
	queue := []*node.Node{root}

	return dfs(&result, &queue)
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
