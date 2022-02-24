export interface Node<T> {
  value: T;
  right: Node<T> | null;
  left: Node<T> | null;
  pushLeftLeaf: (value: T) => Node<T>;
  pushRightLeaf: (value: T) => Node<T>;
}
