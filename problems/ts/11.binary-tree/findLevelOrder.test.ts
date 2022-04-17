import { NodeImpl, Node, BinaryTreeImpl, findLevelOrderValues } from './';
import { test, assert } from 'vitest';

test('Find level order', () => {
    let binaryTree = new BinaryTreeImpl<number>(new NodeImpl(3));
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
