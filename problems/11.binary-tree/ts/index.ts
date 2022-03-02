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

export function compareLeftSide<T>(node: Node<T> | null, value?: T): boolean {
    if (!node || value === undefined) {
        return true;
    }

    if (value > node.value) {
        return false;
    }

    if (node.right) return compareLeftSide<T>(node.right, value);
    if (node.left) return compareLeftSide<T>(node.left, value);

    return true;
}

export function compareRightSide<T>(node: Node<T> | null, value?: T): boolean {
    if (!node || value === undefined) {
        return true;
    }

    if (value < node.value) {
        return false;
    }

    if (node.right) return compareRightSide<T>(node.right, value);
    if (node.left) return compareRightSide<T>(node.left, value);

    return true;
}

export function detectBinarySearchTree<T>(root: Node<T>) {
    let queue = [[root]];

    while (queue.length > 0) {
        let current = queue.shift() as Node<T>[];
        let level: Node<T>[] = [];

        while (current.length) {
            let node = current.shift() as Node<T> | null;
            if (!compareRightSide(node?.right as Node<T> | null, node?.value)) {
                return false;
            }

            if (!compareLeftSide(node?.left as Node<T> | null, node?.value)) {
                return false;
            }
            node && node.right && level.push(node.right);
            node && node.left && level.push(node.left);
        }

        level.length > 0 && queue.push(level);
    }

    return true;
}
