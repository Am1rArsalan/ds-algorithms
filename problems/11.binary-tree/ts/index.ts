import { Node } from './Node';

export function findMaxDepth(node: Node<number> | null, max = 0): number {
    if (!node) return max;

    max = max + 1;

    return Math.max.apply(null, [
        findMaxDepth(node.left, max),
        findMaxDepth(node.right, max),
    ]);
}

export function findLevelOrderValues<T>(root: Node<T> | null): T[][] {
    let result: T[][] = [];
    if (!root) return result;

    let queue = [[root]];

    while (queue.length > 0) {
        let current = queue.shift() as Node<T>[];
        let level: Node<T>[] = [];

        result.push(
            current.map((node) => {
                node.left && level.push(node.left);
                node.right && level.push(node.right);
                return node.value;
            })
        );

        if (level.length > 0) queue.push(level);
    }

    return result;
}
