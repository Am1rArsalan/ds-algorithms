import { BinaryTree } from './BinaryTree';
import { Node } from './Node';

export function branchSum(tree: BinaryTree<number>) {
    let root = tree.getRoot();

    if (!root) return;
    let queue = [root];
    let prev = 0;
    let sums: number[] = [];
    while (queue.length) {
        let vertex = queue.shift();

        if (vertex) {
            prev = vertex.value + prev;
        }

        vertex && !vertex.left && !vertex.right && sums.push(prev);
        vertex && vertex.left && queue.push(vertex.left);
        vertex && vertex.right && queue.push(vertex.right);
    }

    return sums;
}

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

export function branchSumDfs(tree: BinaryTree<number>) {
    const sums: number[] = [];
    dfs(tree.getRoot() as Node<number>, 0, sums);
    return sums;
}
