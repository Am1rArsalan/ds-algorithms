import { Node } from './Node';
import { buildNodeFromWord } from './NodeImpl';
import { Trie } from './Trie';

export class TrieImpl implements Trie {
    private root: Node;

    constructor(root: Node) {
        this.root = root;
    }

    public insert(word: string) {
        //apple
        this.root.insert(word);
    }

    // TODO
    public search(word: string) {
        return false;
    }

    // TODO
    public startsWith(word: string) {
        return false;
    }
}
