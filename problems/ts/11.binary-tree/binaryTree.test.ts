import { BinaryTree, BinaryTreeImpl, Node, NodeImpl } from './';
import { describe, beforeEach, test, assert } from 'vitest';

describe('binaryTree class', () => {
    let binaryTree: BinaryTree<number>;
    beforeEach(() => {
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(1));
    });

    test('[best test case] find maximum depth of a given binary tree', () => {
        const root = binaryTree.getRoot() as Node<number>;
        // right
        root.pushRightLeaf(3);
        // left
        let generateNode = root.pushLeftLeaf(2);
        generateNode.pushLeftLeaf(4);
        generateNode = generateNode.pushRightLeaf(5);
        generateNode.pushRightLeaf(6);

        assert.equal(binaryTree.findMaxDepth({ ...root }), 4);
    });

    test('find the max depth of the binary tree which only root node', () => {
        let root = binaryTree.getRoot() as Node<number>;
        assert.equal(binaryTree.findMaxDepth({ ...root }), 1);
    });

    test('[worst test case] find the max depth of the binary tree', () => {
        let root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(2)
            .pushRightLeaf(3)
            .pushRightLeaf(4)
            .pushRightLeaf(5)
            .pushRightLeaf(6);
        assert.equal(binaryTree.findMaxDepth({ ...root }), 6);
    });

    test('Find level order problem', () => {
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(3));
        const root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(1).pushRightLeaf(4);
        const generatedNode = root.pushLeftLeaf(6);
        generatedNode.pushRightLeaf(2);
        generatedNode.pushLeftLeaf(9).pushRightLeaf(5).pushLeftLeaf(8);

        assert.deepEqual(binaryTree.findLevelOrderValues(), [
            [3],
            [6, 1],
            [9, 2, 4],
            [5],
            [8],
        ]);
    });

    test('find visible nodes from right side problem', () => {
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(1));
        const root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(3).pushRightLeaf(6);
        const generatedNode = root.pushLeftLeaf(2);
        generatedNode.pushRightLeaf(5);
        generatedNode.pushLeftLeaf(4).pushRightLeaf(7).pushLeftLeaf(8);
        assert.deepEqual(
            binaryTree.findRightSideVisibleNodes(),
            [1, 3, 6, 7, 8]
        );
    });
});
