import { BinaryTree, BinaryTreeImpl, Node, NodeImpl } from './';
import { countNodes } from './';
import { describe, test, assert } from 'vitest';

describe('binary tree: problem#3', () => {
    test('count number of nodes in a complete tree ( complete and full tree)', () => {
        let binaryTree: BinaryTree<number>;
        let root: Node<number>;
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(1));
        root = binaryTree.getRoot() as Node<number>;
        let generatedNode = root.pushLeftLeaf(2);
        let childNode = generatedNode.pushLeftLeaf(4);
        childNode.pushLeftLeaf(8);
        childNode.pushRightLeaf(9);
        childNode = generatedNode.pushRightLeaf(5);
        childNode.pushLeftLeaf(10);
        childNode.pushRightLeaf(11);
        //
        generatedNode = root.pushRightLeaf(3);
        childNode = generatedNode.pushLeftLeaf(6);
        childNode.pushLeftLeaf(12);
        childNode.pushRightLeaf(13);
        childNode = generatedNode.pushRightLeaf(7);
        childNode.pushLeftLeaf(14);
        childNode.pushRightLeaf(15);
        assert.equal(countNodes<number>({ ...root }), 15);
    });

    test('count number of nodes in a complete tree (second test case with 12 nodes)', () => {
        let binaryTree: BinaryTree<number>;
        let root: Node<number>;
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(1));
        root = binaryTree.getRoot() as Node<number>;
        let generatedNode = root.pushLeftLeaf(2);
        let childNode = generatedNode.pushLeftLeaf(4);
        childNode.pushLeftLeaf(8);
        childNode.pushRightLeaf(9);
        childNode = generatedNode.pushRightLeaf(5);
        childNode.pushLeftLeaf(10);
        childNode.pushRightLeaf(11);
        //
        generatedNode = root.pushRightLeaf(3);
        childNode = generatedNode.pushLeftLeaf(6);
        childNode.pushLeftLeaf(12);

        generatedNode.pushRightLeaf(7);
        assert.equal(countNodes<number>({ ...root }), 12);
    });

    test('count number of nodes in a complete tree (worst test case)', () => {
        let binaryTree: BinaryTree<number>;
        let root: Node<number>;
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(1));
        root = binaryTree.getRoot() as Node<number>;
        let generatedNode = root.pushLeftLeaf(2);
        let childNode = generatedNode.pushLeftLeaf(4);
        childNode.pushLeftLeaf(8);
        childNode = generatedNode.pushRightLeaf(5);
        //
        generatedNode = root.pushRightLeaf(3);
        generatedNode.pushLeftLeaf(6);
        generatedNode.pushRightLeaf(7);

        assert.equal(countNodes<number>({ ...root }), 8);
    });
});
