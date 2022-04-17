import { Node } from './';

export function findRightSideVisibleNodes<T>(root: Node<T> | null): T[] {
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
