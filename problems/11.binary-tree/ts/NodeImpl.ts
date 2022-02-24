import { Node } from "./Node";

export class NodeImpl<T> implements Node<T> {
  value: T;
  right: Node<T> | null;
  left: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  pushLeftLeaf(value: T): Node<T> {
    const generateNode = new NodeImpl<T>(value);
    this.left = generateNode;
    return generateNode;
  }

  pushRightLeaf(value: T): Node<T> {
    const generateNode = new NodeImpl<T>(value);
    this.right = generateNode;
    return generateNode;
  }
}
