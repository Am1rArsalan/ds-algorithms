import { Node } from './Node';
import { NodeImpl } from './NodeImpl';
import { Trie } from './Trie';

export class TrieImpl implements Trie {
    private root: Node[];
    constructor() {
        this.root = [];
    }

    public insert(word: string) {
        const node = this.buildNode(word);
        this.root.push(node);
    }

    private buildNode(word: string): Node {
        let node = new NodeImpl(word[0]);
        let temp = node;

        for (let i = 1; i < word.length && temp; i++) {
            let char = word[i];
            temp = temp.insertChild(char) as NodeImpl;
        }

        return node;
    }

    private convertListToWord(list: Node | null) {
        let temp = list;
        let result = '';

        while (temp) {
            result += temp.getValue();
            temp = temp.getChild();
        }

        return result;
    }

    // Optimize this method
    public search(word: string) {
        let found = false;
        for (let i = 0; i < this.root.length; i++) {
            let child = this.root[i];
            const str = this.convertListToWord(child);

            if (str === word) {
                found = true;
                break;
            }
        }

        return found;
    }

    // Optimize this method
    public startsWith(word: string) {
        let result = true;
        for (let i = 0; i < this.root.length; i++) {
            let child = this.root[i];
            const str = this.convertListToWord(child);

            if (str.startsWith(word)) {
                result = true;
                break;
            }
        }

        return result;
    }
}
