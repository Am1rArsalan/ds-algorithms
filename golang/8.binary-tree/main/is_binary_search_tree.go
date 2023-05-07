package main

import (
	"github.com/AmirAhmadzadeh/problems/node"
	"math"
)

func isBinarySearchTreeCall(node *node.Node, min float64, max float64) bool {
	if node == nil {
		return true
	}

	if float64(node.Value()) < min || float64(node.Value()) > max {
		return false
	}

	if node.Right() != nil {
		if !isBinarySearchTreeCall(node.Right(), float64(node.Value()), max) {
			return false
		}
	}

	if node.Left() != nil {
		if !isBinarySearchTreeCall(node.Left(), min, float64(node.Value())) {
			return false
		}
	}

	return true
}

func isBinarySearchTree(root *node.Node) bool {
	return isBinarySearchTreeCall(root, math.Inf(-1), math.Inf(1))
}
