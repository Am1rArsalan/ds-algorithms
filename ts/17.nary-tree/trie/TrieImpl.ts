import { Node } from './Node';
import { Trie } from './Trie';
import { NodeImpl } from './NodeImpl';

export class TrieImpl implements Trie {
    private root: Node;

    constructor(root: Node) {
        this.root = root;
    }

    public insert(word: string) {
        if (word.length == 0) {
            return;
        }
        this._insert(word, this.root);
    }

    private _insert(word: string, node: Node) {
        const key = word[0];

        if (node.getChildren().has(key) && word.length > 0) {
            if (word.length == 1) {
                (node.getChildren().get(key) as Node).setTerminal(true);
            }
            this._insert(word.slice(1), node.getChildren().get(key) as Node);
            return;
        }

        const newNode = NodeImpl.newNode(key);
        if (word.length === 1) {
            newNode.setTerminal(true);
        }
        node.setChild(key, newNode);

        if (word.slice(1).length > 0) {
            this._insert(word.slice(1), newNode);
            return;
        }
    }

    public search(word: string) {
        if (word.length == 0) {
            return false;
        }
        return this._search(word, this.root);
    }

    private _search(word: string, node: Node): boolean {
        if (word.length == 1) {
            return (node.getChildren().get(word) as Node).isTerminal();
        }
        if (node.getChildren().has(word[0])) {
            return this._search(
                word.slice(1),
                node.getChildren().get(word[0]) as Node
            );
        }
        return false;
    }

    public startsWith(word: string) {
        if (word.length == 0) {
            return false;
        }
        return this._startsWith(word, this.root);
    }

    private _startsWith(word: string, node: Node): boolean {
        if (word.length == 1) {
            return node.getChildren().has(word);
        }
        if (node.getChildren().has(word[0])) {
            return this._startsWith(
                word.slice(1),
                node.getChildren().get(word[0]) as Node
            );
        }
        return false;
    }
}
