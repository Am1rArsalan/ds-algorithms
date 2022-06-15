#problems


##problem 1: 
design api for linked list 

##problem 2: 
reverse a given linked list 


##problem 4:
reverse a part of linked list


```ts
export interface LinkedList<T> {
    getHead: () => NodeType<T> | null;
    getListLength: () => number;
    push: (value: T) => NodeType<T>;
    pop: () => NodeType<T>;
    shift: () => T | undefined;
    reverse: () => NodeType<T> | null;
    reversePartOfList: (m: number, n: number) => void;
    addCycle: (cycleIndex: number) => void;
    detectAndResolveCycle: () => void;
    findCycleNode: () => NodeType<T> | null;
}```
