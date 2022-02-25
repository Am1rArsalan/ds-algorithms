import {
    findMaxDepth,
    findLevelOrderValues,
    findLevelOrderValuesVisibleFromRight,
} from './index';
import { BinaryTree } from './BinaryTree';
import { NodeImpl } from './NodeImpl';
import { Node } from './Node';
import { describe, beforeEach, it, assert } from 'vitest';

describe('binary tree: problem#1', () => {
    let binaryTree: BinaryTree<number>;
    beforeEach(() => {
        binaryTree = new BinaryTree<number>(new NodeImpl(1));
    });

    it('[best test case] find maximum depth of a given binary tree (class api)', () => {
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

    it('find the max depth of the binary tree with only root node {class api }', () => {
        let root = binaryTree.getRoot() as Node<number>;
        assert.equal(binaryTree.findMaxDepth({ ...root }), 1);
    });

    it('[worst test case] find the max depth of the binary tree {class api }', () => {
        let root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(2)
            .pushRightLeaf(3)
            .pushRightLeaf(4)
            .pushRightLeaf(5)
            .pushRightLeaf(6);
        assert.equal(binaryTree.findMaxDepth({ ...root }), 6);
    });

    it('[best test case] find the max depth of the binary tree {function api}', () => {
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

    it('find the max depth of the binary tree with only the root node {function api}', () => {
        let root = binaryTree.getRoot() as Node<number>;
        assert.equal(findMaxDepth({ ...root }), 1);
    });

    it('[worst test case] find the max depth of the binary tree {class api }', () => {
        let root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(2)
            .pushRightLeaf(3)
            .pushRightLeaf(4)
            .pushRightLeaf(5)
            .pushRightLeaf(6);
        assert.equal(findMaxDepth({ ...root }), 6);
    });
});

describe('binary tree: problem#2', () => {
    let binaryTree: BinaryTree<number>;

    it('[best test case] find maximum depth of a given binary tree (class api)', () => {
        binaryTree = new BinaryTree<number>(new NodeImpl(3));
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

    it('[best test case] find maximum depth of a given binary tree (function api)', () => {
        binaryTree = new BinaryTree<number>(new NodeImpl(3));
        const root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(1).pushRightLeaf(4);
        const generatedNode = root.pushLeftLeaf(6);
        generatedNode.pushRightLeaf(2);
        generatedNode.pushLeftLeaf(9).pushRightLeaf(5).pushLeftLeaf(8);

        assert.deepEqual(findLevelOrderValues<number>({ ...root }), [
            [3],
            [6, 1],
            [9, 2, 4],
            [5],
            [8],
        ]);
    });
});

describe('binary tree: problem#3', () => {
    let binaryTree: BinaryTree<number>;
    let root: Node<number>;
    beforeEach(() => {
        binaryTree = new BinaryTree<number>(new NodeImpl(1));
        root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(3).pushRightLeaf(6);
        const generatedNode = root.pushLeftLeaf(2);
        generatedNode.pushRightLeaf(5);
        generatedNode.pushLeftLeaf(4).pushRightLeaf(7).pushLeftLeaf(8);
    });

    it('[best test case] find maximum depth of a given binary tree (class api)', () => {
        assert.deepEqual(
            binaryTree.findLevelOrderValuesVisibleFromRight(),
            [1, 3, 6, 7, 8]
        );
    });

    it('[best test case] find maximum depth of a given binary tree (function api)', () => {
        assert.deepEqual(
            findLevelOrderValuesVisibleFromRight<number>({ ...root }),
            [1, 3, 6, 7, 8]
        );
    });
});
