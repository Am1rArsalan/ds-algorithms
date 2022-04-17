import { Node } from './';

export function findRightSideVisibleNodes<T>(root: Node<T> | null): T[] {
    const result = [] as T[];
    const temp = { ...root };
    const queue = [temp];

    while (queue.length > 0) {
        const level = [];
        const queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            const vertex = queue.shift();

            if (level.length == 0) {
                level.push(vertex?.value);
            }
            vertex?.right && queue.push(vertex.right);
            vertex?.left && queue.push(vertex.left);
        }

        level.length > 0 && result.push(level[0] as T);
    }

    return result;
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
