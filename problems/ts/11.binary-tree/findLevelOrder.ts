import { Node } from './';

export function findLevelOrderValues<T>(root: Node<T> | null): T[][] {
    let result = [] as T[][];
    let temp = { ...root };
    let queue = [temp];

    while (queue.length > 0) {
        let queueLength = queue.length;
        let level = [];

        for (let i = 0; i < queueLength; i++) {
            let vertex = queue.shift() as Node<T>;

            level.push(vertex.value);

            vertex.right && queue.push(vertex.right);
            vertex.left && queue.push(vertex.left);
        }

        level.length > 0 && result.push(level);
    }

    return result;
}
