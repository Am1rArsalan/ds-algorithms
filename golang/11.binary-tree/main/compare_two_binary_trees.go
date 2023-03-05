package main

import "github.com/AmirAhmadzadeh/binary_tree/node"; 


func CompareTwoBinaryTrees(a *node.Node, b *node.Node) bool {
    if a == nil && b == nil { 
        return true 
    }

    if a == nil || b == nil { 
        return false  
    }

    if a.Value() != b.Value() { 
        return false  
    }

    return CompareTwoBinaryTrees(a.Left(), b.Left()) && CompareTwoBinaryTrees(a.Right(), b.Right()); 
}


