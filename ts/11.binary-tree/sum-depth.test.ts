import { test, assert, describe, beforeEach } from 'vitest';
import { BinaryTreeImpl, NodeImpl } from '.';
import { Node } from './Node';
import { sumDepth, sumDepthDfs } from './sum-depth';

describe('sum of bt node depths', () => {
    let bt = new BinaryTreeImpl<number>(new NodeImpl(1));
    const expectedResult = 16;
    beforeEach(() => {
        let root = bt.getRoot() as Node<number>;
        let right = root.pushRightLeaf(3);
        right.pushRightLeaf(7);
        right.pushLeftLeaf(6);
        let left = root.pushLeftLeaf(2);
        left.pushRightLeaf(5);
        left = left.pushLeftLeaf(4);
        left.pushLeftLeaf(8);
        left.pushRightLeaf(9);
    });

    test('bfs', () => {
        assert.equal(sumDepth(bt), expectedResult);
    });
    test('dfs', () => {
        assert.equal(sumDepthDfs(bt), expectedResult);
    });
});
