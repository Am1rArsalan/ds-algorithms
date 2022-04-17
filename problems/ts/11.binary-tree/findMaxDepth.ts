import { Node } from './';

export function findMaxDepth(node: Node<number> | null, max = 0): number {
    if (!node) return max;

    max = max + 1;

    return Math.max.apply(null, [
        findMaxDepth(node.left, max),
        findMaxDepth(node.right, max),
    ]);
}
