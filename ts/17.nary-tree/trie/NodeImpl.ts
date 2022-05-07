import { Node } from './Node';

export class NodeImpl implements Node {
    private value: string;
    private children: Map<string, Node>;
    private terminal: boolean = false;

    private constructor(value: string) {
        this.value = value;
        this.children = new Map();
        this.terminal = false;
    }

    public static newNode(value: string) {
        return new NodeImpl(value) as Node;
    }

    public setTerminal(value: boolean) {
        this.terminal = value;
    }

    public isTerminal() {
        return this.terminal;
    }

    public getValue(): string {
        return this.value;
    }

    public insert(word: string) {
        //this.children.set(node);
        //return node;
    }

    public getChildren() {
        return this.children;
    }
}

export function buildNodeFromWord(word: string) {
    //"pple
    const node = NodeImpl.newNode(word[0]);
    // node : { value : p , children : Map{} } ;
    let temp = node;
    word = word.slice(1);
    // word :ple

    for (let i = 0; i < word.length && temp; i++) {
        const newNode = NodeImpl.newNode(word[0]);
        // newNode = { value : p , children : Map{}}
        temp.insertChild(word[0], newNode);
        // newNode = { value : p , children : Map{}}
        temp = newNode;
        word = word.slice(1);
    }

    console.log(JSON.stringify(node, null, 2));

    return node;
}
