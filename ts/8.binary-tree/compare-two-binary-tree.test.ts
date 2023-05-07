import { BinaryTreeImpl, Node, NodeImpl } from './';
import { describe, test, assert, beforeEach } from 'vitest';
import compareTwoBinaryTree from './compare-two-binary-tree';

describe('compare two binary tree', () => {
    const a = new BinaryTreeImpl<number>(new NodeImpl(1));
    beforeEach(() => {
        const root = a.getRoot() as Node<number>;
        // right
        root.pushRightLeaf(3);
        // left
        let generateNode = root.pushLeftLeaf(2);
        generateNode.pushLeftLeaf(4);
        generateNode = generateNode.pushRightLeaf(5);
        generateNode.pushRightLeaf(6);
    });

    test('should be equal', () => {
        const b = new BinaryTreeImpl<number>(new NodeImpl(1));
        const root = b.getRoot() as Node<number>;
        // right
        root.pushRightLeaf(3);
        // left
        let generbteNode = root.pushLeftLeaf(2);
        generbteNode.pushLeftLeaf(4);
        generbteNode = generbteNode.pushRightLeaf(5);
        generbteNode.pushRightLeaf(6);

        assert.equal(
            compareTwoBinaryTree<number>(a.getRoot(), b.getRoot()),
            true
        );
    });

    test('should faile[tree structure are different]', () => {
        const b = new BinaryTreeImpl<number>(new NodeImpl(1));
        const root = b.getRoot() as Node<number>;
        // right
        root.pushRightLeaf(3);
        // left
        let generbteNode = root.pushLeftLeaf(2);
        generbteNode.pushLeftLeaf(4);
        generbteNode = generbteNode.pushRightLeaf(5);

        assert.equal(
            compareTwoBinaryTree<number>(a.getRoot(), b.getRoot()),
            false
        );
    });

    test('should faeil [trees values are different]', () => {
        const b = new BinaryTreeImpl<number>(new NodeImpl(1));
        const root = b.getRoot() as Node<number>;
        // right
        root.pushRightLeaf(3);
        // left
        let generateNode = root.pushLeftLeaf(2);
        generateNode.pushLeftLeaf(4);
        generateNode = generateNode.pushRightLeaf(5);
        generateNode.pushRightLeaf(7);

        assert.equal(
            compareTwoBinaryTree<number>(a.getRoot(), b.getRoot()),
            false
        );
    });
});
