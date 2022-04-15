package binary_tree

import (
	"fmt"
	"testing"
)

func TestBinaryTree(t *testing.T) {
	tree := New(1)
	tree.
		Insert(2).
		Insert(3).
		Insert(4).
		Insert(5).
		Insert(6).
		Insert(7)

	tree.Debug()

	fmt.Println("binary tree", tree)
}
