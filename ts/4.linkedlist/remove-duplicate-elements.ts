import { LinkedList, NodeType } from './LinkedList';

export function removeDuplicateElementsOnLinkedList<T>(list: LinkedList<T>) {
    let h = list.getHead();
    let n = h;
    let prev: NodeType<T> | null = null;
    const seen = new Map<T, boolean>();

    while (n !== null) {
        if (seen.get(n.value) && prev) {
            prev.next = n.next;
            n = prev.next;
            continue;
        }

        seen.set(n.value, true);
        prev = n;
        n = n.next;
    }
}
