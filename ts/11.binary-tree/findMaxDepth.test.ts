import { BinaryTree, BinaryTreeImpl, Node, NodeImpl } from './';
import { describe, beforeEach, test, assert } from 'vitest';
import { findMaxDepth } from './';

describe('binary tree: problem#1', () => {
    let binaryTree: BinaryTree<number>;
    beforeEach(() => {
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(1));
    });

    test('[best test case] find the max depth of the binary tree', () => {
        let root = binaryTree.getRoot() as Node<number>;
        // right
        root.pushRightLeaf(3);
        // left
        let generateNode = root.pushLeftLeaf(2);
        generateNode.pushLeftLeaf(4);
        generateNode = generateNode.pushRightLeaf(5);
        generateNode.pushRightLeaf(6);

        assert.equal(findMaxDepth({ ...root }), 4);
    });

    test('find the max depth of the binary tree with only the root node', () => {
        let root = binaryTree.getRoot() as Node<number>;
        assert.equal(findMaxDepth({ ...root }), 1);
    });

    test('[worst test case] find the max depth of the binary tree', () => {
        let root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(2)
            .pushRightLeaf(3)
            .pushRightLeaf(4)
            .pushRightLeaf(5)
            .pushRightLeaf(6);
        assert.equal(findMaxDepth({ ...root }), 6);
    });
});
