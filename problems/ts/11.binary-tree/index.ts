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

export function findLevelOrderValuesVisibleFromRight<T>(
    root: Node<T> | null
): T[] {
    let result: T[][] = [];
    if (!root) return result.flat();

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

    return result.map((item: T[]) => [item[item.length - 1]]).flat();
}

export function dfs<T>(node: Node<T>, level: number, result: T[]) {
    if (!node) return result;

    level >= result.length && result.push(node.value);

    node.right && dfs(node.right, level + 1, result);
    node.left && dfs(node.left, level + 1, result);
}

export function rightView<T>(root: Node<T> | null): T[] {
    let result: T[] = [];
    if (!root) return result;

    dfs(root, 0, result);

    return result;
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

export function countNodesOfCompleteTree<T>(root: Node<T> | null) {
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

export function isValidBinarySearch(root: Node<number> | null) {
    if (!root) return root;

    return depthFirstSearch<number>(root, -Infinity, +Infinity);
}
