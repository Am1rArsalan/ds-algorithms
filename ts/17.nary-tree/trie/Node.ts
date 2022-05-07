export interface Node {
    getValue: () => string;
    getChildren: () => Map<string, Node>;
    setChild: (key: string, value: Node) => void;
    setTerminal: (value: boolean) => void;
    isTerminal: () => boolean;
}
