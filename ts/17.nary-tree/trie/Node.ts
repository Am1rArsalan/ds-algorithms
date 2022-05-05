export interface Node {
    insertChild: (value: string) => Node | null;
    getValue: () => string;
    getChild: () => Node | null;
}
