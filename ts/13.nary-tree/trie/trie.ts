export interface Trie {
    insert: (word: string) => void;
    search: (word: string) => boolean;
    startsWith: (word: string) => boolean;
}
