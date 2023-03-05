package main

import (
	"testing"

	"github.com/AmirAhmadzadeh/binary_tree/binary_tree"
)

func generateBaseTree() *binary_tree.BinaryTree { 
    baseTree := binary_tree.New(1)
    r := baseTree.GetRoot() 

    // right
    r.PushRightLeaf(3);


    // left
    gn := r.PushLeftLeaf(2);
    gn.PushLeftLeaf(4);
    gn = gn.PushRightLeaf(5);
    gn.PushRightLeaf(6);


    return baseTree
}


// trees structure are different  
// test should fail 
func TestCompareBinaryTwoTrees(t *testing.T) {
    a := generateBaseTree()


    b := binary_tree.New(1)
    r := b.GetRoot() 

    // right
    r.PushRightLeaf(3);

    // left
    gn := r.PushLeftLeaf(2);
    gn.PushLeftLeaf(4);
    gn = gn.PushRightLeaf(5);


    result := CompareTwoBinaryTrees(a.GetRoot(), b.GetRoot());

    if result { 
        t.Errorf(" the structure of trees are different, this test case should expected false but got true ")
    }
}

// trees values are different therefor this test 
// case should fail 
func TestCompareBinaryTwoTrees2(t *testing.T) {
    a := generateBaseTree()


    b := binary_tree.New(1)
    r := b.GetRoot() 

    // right
    r.PushRightLeaf(3);

    // left
    gn := r.PushLeftLeaf(2);
    gn.PushLeftLeaf(4);
    gn = gn.PushRightLeaf(5);
    gn.PushRightLeaf(7);



    if CompareTwoBinaryTrees(a.GetRoot(), b.GetRoot()) { 
        t.Errorf("these two trees have different values, the result that got is true but expected false")
    }
}

// both trees are identical therefor this 
// test case should pass
func TestCompareBinaryTwoTrees3(t *testing.T) {
    a := generateBaseTree()


    b := binary_tree.New(1)
    r := b.GetRoot() 

    // right
    r.PushRightLeaf(3);

    // left
    gn := r.PushLeftLeaf(2);
    gn.PushLeftLeaf(4);
    gn = gn.PushRightLeaf(5);
    gn.PushRightLeaf(6);



    if !CompareTwoBinaryTrees(a.GetRoot(), b.GetRoot()) { 
        t.Errorf(" the structure of trees are different, this test case should expected true but got false")
    }
}

