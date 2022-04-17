import { describe, test, assert, beforeEach } from 'vitest';
import {
    Node,
    NodeImpl,
    BinaryTree,
    BinaryTreeImpl,
    rightView,
    findRightSideVisibleNodes,
} from './';

describe('binary tree: problem#3', () => {
    let binaryTree: BinaryTree<number>;
    let root: Node<number>;

    beforeEach(() => {
        binaryTree = new BinaryTreeImpl<number>(new NodeImpl(1));
        root = binaryTree.getRoot() as Node<number>;
        root.pushRightLeaf(3).pushRightLeaf(6);
        const generatedNode = root.pushLeftLeaf(2);
        generatedNode.pushRightLeaf(5);
        generatedNode.pushLeftLeaf(4).pushRightLeaf(7).pushLeftLeaf(8);
    });

    test('find nodes list which is visible from the right side', () => {
        assert.deepEqual(
            findRightSideVisibleNodes<number>({ ...root }),
            [1, 3, 6, 7, 8]
        );
    });

    // dfs
    test('find nodes list which is visible from the right side', () => {
        assert.deepEqual(rightView<number>({ ...root }), [1, 3, 6, 7, 8]);
    });
});
