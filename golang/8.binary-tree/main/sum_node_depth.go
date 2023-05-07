package main

import (
	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
	"github.com/AmirAhmadzadeh/binary_tree/node"
)

func sumOfDepthDfsRecurse(vertex *node.Node, depth int) int {
	if vertex != nil {
		return depth + sumOfDepthDfsRecurse(vertex.Left(), depth+1) + sumOfDepthDfsRecurse(vertex.Right(), depth+1)
	}

	return 0
}

func sumOfDepthDfs(bt *binary_tree.BinaryTree) int {
	return sumOfDepthDfsRecurse(bt.GetRoot(), 0)
}

func sumOfDepthBfs(bt *binary_tree.BinaryTree) int {
    q := []*node.Node{bt.GetRoot()} 
    s := 0 
    d := 0 
    ql := len(q) 

    for len(q) > 0 { 
        v := q[0] 
        q = q[1:] 
        ql-- 

        if v.HasLeftChild() { 
            q = append(q,v.Left()); 
        }

        if v.HasRightChild() { 
            q = append(q,v.Right()); 
        }

        s += d  

        if ql == 0 { 
            d++; 
            ql = len(q); 
        }

    }

    return s;
}
