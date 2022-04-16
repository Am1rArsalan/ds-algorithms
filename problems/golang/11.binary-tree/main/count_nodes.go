package main

import (
	"github.com/AmirAhmadzadeh/problems/binary_tree"
	"github.com/AmirAhmadzadeh/problems/node"
)

// bfs
func countNodes1(bt *binary_tree.BinaryTree) int {
	root := bt.GetRoot()
	queue := []*node.Node{root}
	seen := make(map[int]bool)
	result := 0

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]

		if !seen[vertex.Value()] {
			seen[vertex.Value()] = true
			result += 1
		}

		if vertex.Right() != nil {
			queue = append(queue, vertex.Right())
		}

		if vertex.Left() != nil {
			queue = append(queue, vertex.Left())
		}
	}

	return result
}

/// dfs
func dfsCount(result int, seen map[int]bool, queue *[]*node.Node) int {
	if len(*queue) == 0 {
		return result
	}

	vertex := (*queue)[0]
	*queue = (*queue)[1:]

	seen[vertex.Value()] = true
	result += 1

	if vertex.Right() != nil {
		*queue = append(*queue, vertex.Right())
	}

	if vertex.Left() != nil {
		*queue = append(*queue, vertex.Left())
	}

	return dfsCount(result, seen, queue)
}

func countNodes2(bt *binary_tree.BinaryTree) int {
	root := bt.GetRoot()
	seen := make(map[int]bool)
	queue := []*node.Node{root}
	result := 0

	return dfsCount(result, seen, &queue)
}
