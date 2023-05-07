package main

import (
	"math"

	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"github.com/AmirAhmadzadeh/binary_tree/node"
)

func findClosestValueInBinaryTree(tree *binary_tree.BinaryTree, T int) float64 {
    C := math.Inf(+1) ;
    q := []*node.Node{tree.GetRoot()}


    for len(q) > 0 { 
        v := q[0]; 
        q = q[1:];

        if v.Left() != nil { 
            q = append(q, v.Left()) ;
        }

        if v.Right() != nil { 
            q = append(q, v.Right()) ;
        }

        if math.Abs(C - float64(v.Value()))  < math.Abs(float64(T) - float64(v.Value())) { 
            C = float64(v.Value()); 
        }
    }

    return C; 
}

func findClosestValueInBinaryTreeDfsCall(V *node.Node, T float64, C float64) float64 {
	if V == nil {
		return C
	}
	if math.Abs(T-float64(V.Value())) < math.Abs(T-C) {
		C = float64(V.Value())
	}

	if V.Right() != nil && T > float64(V.Value()) {
		return findClosestValueInBinaryTreeDfsCall(V.Right(), T, C)
	} else if V.Left() != nil && T < float64(V.Value()) {
		return findClosestValueInBinaryTreeDfsCall(V.Left(), T, C)
	}

	return C
}

func findClosestValueInBinaryTreeDfs(binaryTree *binary_tree.BinaryTree, T float64) float64 {
	return findClosestValueInBinaryTreeDfsCall(binaryTree.GetRoot(), T, math.Inf(1))
}
