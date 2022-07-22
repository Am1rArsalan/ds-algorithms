import { BinaryTree } from '.';
import { Node } from './Node';

export function sumDepth(tree: BinaryTree<number>) {
    const queue = [{ node: tree.getRoot() as Node<number>, depth: 0 }];
    let sumDepth = 0;

    while (queue.length > 0) {
        const vertex = queue.shift();

        if (!vertex) continue;

        const { depth, node } = vertex;

        sumDepth += depth;

        node.left && queue.push({ node: node.left, depth: depth + 1 });
        node.right && queue.push({ node: node.right, depth: depth + 1 });
    }

    return sumDepth;
}

function dfs(node: Node<number> | null, depth: number): number {
    if (!node) return 0;

    return depth + dfs(node.left, depth + 1) + dfs(node.right, depth + 1);
}

export function sumDepthDfs(tree: BinaryTree<number>) {
    return dfs(tree.getRoot(), 0);
}
