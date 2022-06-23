


fn main() {
    let list = LinkedList<i32> { 
        head : Node { 
            value, 
            next : None ,
        }
    }
}


struct Node<T> {
    value: T,
    next : Option<Node<T>>
}

struct LinkedList<T> {
    head: Node<T>,
}

impl LinkedList<T> {
    fn push() {
        todo!();
    }
}




