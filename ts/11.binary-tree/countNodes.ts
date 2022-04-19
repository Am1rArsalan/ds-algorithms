import { Node } from './';

export function isNodeExists<T>(
    node: Node<T> | null,
    indexToFind: number,
    height: number
) {
    let left = 0;
    let right = 2 ** height - 1;

    for (let i = 0; i < height; i++) {
        let mid = Math.ceil((left + right) / 2);
        if (indexToFind >= mid) {
            node = node?.right as Node<T> | null;
            left = mid;
        } else {
            node = node?.left as Node<T> | null;
            right = mid - 1;
        }
    }

    return node !== null;
}

export function getCompleteTreeHeight<T>(node: Node<T> | null): number {
    if (!node) return 0;
    let height = 0;

    while (node.left) {
        height += 1;
        node = node.left;
    }
    return height;
}

export function countNodes<T>(root: Node<T> | null) {
    if (!root) return 0;

    let height = getCompleteTreeHeight({ ...root });
    if (height === 0) return 1;

    let result = 2 ** height - 1;

    let left = 0;
    let right = 2 ** height - 1;

    while (left < right) {
        let mid = Math.ceil((left + right) / 2);
        if (isNodeExists({ ...root }, mid, height)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return result + left + 1;
}
