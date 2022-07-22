import { BinaryTree } from './BinaryTree';
import { Node } from './Node';

export function branchSum(tree: BinaryTree<number>) {
    let root = tree.getRoot() as Node<number>;

    if (!root) return [];
    const sums = [];
    let runningSum = 0;

    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift() as Node<number>;

        runningSum = node.value + runningSum;

        if (!node.left && !node.right) {
            sums.push(runningSum);
        }

        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }

    return sums;
}

function dfs(node: Node<number> | null, runningSum: number, sums: number[]) {
    if (!node) return sums;

    let newRunningSum = node.value + runningSum;

    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    node?.left && dfs(node.left, newRunningSum, sums);
    node?.right && dfs(node.right, newRunningSum, sums);
}

export function branchSumDfs(tree: BinaryTree<number>) {
    const sums: number[] = [];
    dfs(tree.getRoot() as Node<number>, 0, sums);
    return sums;
}
