package main

import (
	"fmt"

	"github.com/AmirAhmadzadeh/problems/node"
)

func isBinarySearchTree(root *node.Node) bool {
	queue := []*node.Node{root}
	seen := make(map[int]bool)
	isBinarySearch := true
	result := []int{}

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]
		if !seen[vertex.Value()] {
			seen[vertex.Value()] = true
			result = append(result, vertex.Value())
			if vertex.Left() != nil {
				queue = append(queue, vertex.Left())

				if vertex.Left().Value() > vertex.Value() {
					isBinarySearch = false
					break
				}
			}

			if vertex.Right() != nil {
				queue = append(queue, vertex.Right())
				if vertex.Right().Value() < vertex.Value() {
					isBinarySearch = false
					break
				}
			}

		}
	}

	fmt.Println("result is", result)
	return isBinarySearch
}
