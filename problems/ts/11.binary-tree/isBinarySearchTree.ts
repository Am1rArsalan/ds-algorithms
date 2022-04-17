import { Node } from './';

export function depthFirstSearch<T extends number>(
    node: Node<T>,
    min: T,
    max: T
) {
    if (!node) {
        return true;
    }

    if (node.value > max || node.value < min) {
        return false;
    }

    if (node.right) {
        if (!depthFirstSearch(node.right, node.value, max)) {
            return false;
        }
    }

    if (node.left) {
        if (!depthFirstSearch(node.left, min, node.value)) {
            return false;
        }
    }

    return true;
}

export function isBinarySearchTree(root: Node<number> | null) {
    if (!root) return root;

    return depthFirstSearch<number>(root, -Infinity, +Infinity);
}
