import { BinaryTree } from './BinaryTree';
import { Node } from './Node';

export function findClosestNumber(bt: BinaryTree<number>, target: number) {
    let queue = [bt.getRoot()];
    let seen = new Map<number, boolean>();
    let closest = Infinity;

    while (queue.length > 0) {
        const node = queue.shift() as Node<number>;

        node.left && target < node.value && queue.push(node.left);
        node.right && target > node.value && queue.push(node.right);

        if (!seen.get(node.value)) {
            seen.set(node.value, true);
            if (Math.abs(node.value - target) < Math.abs(closest - target)) {
                closest = node.value;
            }
        }
    }

    return closest;
}

function dfs(
    node: Node<number> | null,
    target: number,
    closest: number
): number {
    if (!node) return closest;

    if (Math.abs(target - node.value) < Math.abs(target - closest)) {
        closest = node.value;
    }

    if (node.right && target > node.value) {
        return dfs(node.right, target, closest);
    } else if (node.left && target < node.value) {
        return dfs(node.left, target, closest);
    } else {
        return closest;
    }
}

export function findClosestNumberDfs(bt: BinaryTree<number>, target: number) {
    return dfs(bt.getRoot(), target, Infinity);
}
