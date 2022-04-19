import { describe, test, assert } from 'vitest';
import {
    BinaryTree,
    BinaryTreeImpl,
    Node,
    NodeImpl,
    isBinarySearchTree,
} from './';

describe('binary tree: problem#4', () => {
    let binaryTree: BinaryTree<number>;
    let root: Node<number>;

    test('', () => {
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(12));
        root = binaryTree.getRoot() as Node<number>;
        let generatedNode = root.pushLeftLeaf(7);
        generatedNode.pushLeftLeaf(5);
        generatedNode.pushRightLeaf(9);

        generatedNode = root.pushRightLeaf(18);
        generatedNode.pushLeftLeaf(16);
        generatedNode.pushRightLeaf(25);

        assert.equal(isBinarySearchTree({ ...root }), true);
    });

    test('should check whether the tree is bst or not', () => {
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(13));
        root = binaryTree.getRoot() as Node<number>;
        let generatedNode = root.pushLeftLeaf(6);
        generatedNode.pushLeftLeaf(2);

        generatedNode = root.pushRightLeaf(17);
        generatedNode.pushLeftLeaf(10);
        generatedNode.pushRightLeaf(22);

        assert.equal(isBinarySearchTree({ ...root }), false);
    });
});
