import { assert, test } from 'vitest';
import { BinaryTreeImpl } from './BinaryTree';
import { NodeImpl } from './NodeImpl';
import { Node } from './Node';
import { branchSum } from './branch-sum';


test('first test case', () => {
    let bt = new BinaryTreeImpl<number>(new NodeImpl(1));
    const arr = [15, 16, 18, 10, 11];
    //        1
    //     2       3
    //  4    5   6    7
    // 8  9   10
    let root = bt.getRoot() as Node<number>;
    let right = root.pushRightLeaf(3);
    right.pushRightLeaf(7);
    right.pushLeftLeaf(6);
    let left = root.pushLeftLeaf(2);
    left.pushRightLeaf(5).pushRightLeaf(10);
    let generateNode = left.pushLeftLeaf(4);
    generateNode.pushLeftLeaf(8);
    generateNode.pushRightLeaf(9);
    let result = branchSum(bt);
    assert.deepEqual(result, arr);
});
