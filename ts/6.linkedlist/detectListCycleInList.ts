import { NodeType } from './index';
import { LinkedList } from './LinkedList';

export function detectListCycleInList(list: LinkedList<number>) {
    let head = list.getHead();
    let seenNodes = new Set<NodeType<number>>();
    let temp = head;
    let prev = null;

    while (temp) {
        if (seenNodes.has(temp)) {
            if (prev) prev.next = null;
            return temp;
        } else {
            seenNodes.add(temp);
        }
        prev = temp;
        temp = temp.next;
    }
    return null;
}
