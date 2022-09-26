import { BinaryTree } from './BinaryTree';
import { Node } from './Node';


function dfs(node: Node<number> | null, runningSum: number, sums: number[]) {
    if (!node) return sums;

    runningSum = node.value + runningSum;

    if (!node.left && !node.right) {
        sums.push(runningSum);
        return;
    }

    node.left && dfs(node.left, runningSum, sums);
    node.right && dfs(node.right, runningSum, sums);
}

export function branchSum(tree: BinaryTree<number>) {
    const sums: number[] = [];
    dfs(tree.getRoot() as Node<number>, 0, sums);
    return sums;
}
