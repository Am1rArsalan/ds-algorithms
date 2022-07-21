import { BinaryTree } from './BinaryTree';
import { Node } from './Node';

export function findClosestNumber(bt: BinaryTree<number>, target: number) {
    let queue = [bt.getRoot()];
    let seen = new Map<number, boolean>();
    let closest = Infinity;

    while (queue.length > 0) {
        const node = queue.shift() as Node<number>;

        node.left && queue.push(node.left);
        node.right && queue.push(node.right);

        if (!seen.get(node.value)) {
            seen.set(node.value, true);
            if (Math.abs(node.value - target) < Math.abs(closest - target)) {
                closest = node.value;
            }
        }
    }

    return closest;
}
