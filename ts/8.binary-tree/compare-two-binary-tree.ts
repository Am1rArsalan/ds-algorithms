import { Node } from './';

function compareTwoBinaryTree<T>(
    a?: Node<T> | null,
    b?: Node<T> | null
): boolean {
    if (a === undefined && b === undefined) {
        return true;
    }

    if (a === undefined || b === undefined) {
        return false;
    }

    if (a?.value !== b?.value) {
        return false;
    }

    return (
        compareTwoBinaryTree(a?.left, b?.left) &&
        compareTwoBinaryTree(a?.right, b?.right)
    );
}

export default compareTwoBinaryTree;
