export interface Vertex<T> {
    value: T;
    getVertexValue(): T;
}

export class VertexImpl<T> implements Vertex<T> {
    constructor(public value: T) {
        //
    }

    public getVertexValue() {
        return this.value;
    }
}
