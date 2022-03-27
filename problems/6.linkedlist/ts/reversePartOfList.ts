import { NodeType } from './index';
import { LinkedList } from './LinkedList';

// zero base
export function reversePartOfList(
    list: LinkedList<number>,
    startIndex: number,
    endIndex: number
) {
    let CP = 0;
    let s = list.getHead(),
        c = list.getHead();

    while (CP < startIndex && c) {
        s = c;
        c = c.next;
        ++CP;
    }

    let p = null,
        nx = null;
    let tail = c;

    while (CP >= startIndex && CP <= endIndex && c) {
        nx = c.next;
        c.next = p;
        p = c;
        c = nx;
        ++CP;
    }

    if (startIndex !== 0 && s) s.next = p;
    if (tail) tail.next = c;

    if (startIndex === 0) {
        list.setHead(p as NodeType<number>);
    }
}
