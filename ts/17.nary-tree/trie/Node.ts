export interface Node {
    getValue: () => string;
    getChildren: () => Map<string, Node>;
    insert: (word: string) => Node;
    setTerminal: (value: boolean) => void;
    isTerminal: () => boolean;
}
