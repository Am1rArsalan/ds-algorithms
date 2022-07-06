fn main() {
    let my_list = LinkedList::new(&Node::new("head_value"));
}

struct Node {
    value: String,
    next: Box<Option<Node>>,
}

impl Node {
    fn new(t: &str) -> Self {
        Self {
            value: t.to_owned(),
            next: Box::new(None),
        }
    }
}

struct LinkedList {
    head: Node,
}

impl LinkedList {
    fn new(head: &Node) {
        todo!();
    }

    fn push() {
        todo!();
    }
}
