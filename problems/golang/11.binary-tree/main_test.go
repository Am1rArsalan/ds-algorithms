package main

import (
	"os"
	"testing"
)

//let root = binaryTree.getRoot() as Node<number>;
//assert.equal(binaryTree.findMaxDepth({ ...root }), 1);

//let root = binaryTree.getRoot() as Node<number>;
//root.pushRightLeaf(2)
//.pushRightLeaf(3)
//.pushRightLeaf(4)
//.pushRightLeaf(5)
//.pushRightLeaf(6);
//assert.equal(binaryTree.findMaxDepth({ ...root }), 6);

func TestFindMaxDepth(t *testing.T) {

	//let generateNode = root.pushLeftLeaf(2);
	//generateNode.pushLeftLeaf(4);
	//generateNode = generateNode.pushRightLeaf(5);
	//generateNode.pushRightLeaf(6);

	root := &BinaryTree{}

	print(os.Stdout, tree.root, 0, 'M')

	// right
	//root.pushRightLeaf(3)

	//assert.equal(binaryTree.findMaxDepth({ ...root }), 4);
}
