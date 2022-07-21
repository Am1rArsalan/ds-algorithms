import { assert, describe, test } from 'vitest';
import { BinaryTreeImpl } from './BinaryTree';
import { NodeImpl } from './NodeImpl';
import { Node } from './Node';
import { findClosestNumber } from './find-closest-value';

describe('find closest value', () => {
    test('first test case', () => {
        let binaryTree = new BinaryTreeImpl<number>(new NodeImpl(10));
        let root = binaryTree.getRoot() as Node<number>;
        let right = root.pushRightLeaf(15);
        let left = root.pushLeftLeaf(5);
        left.pushRightLeaf(5);
        left.pushLeftLeaf(2).pushLeftLeaf(1);
        right.pushRightLeaf(22);
        right.pushLeftLeaf(13).pushRightLeaf(14);

        let result = findClosestNumber(binaryTree, 12);

        assert.equal(result, 13);
    });
});
