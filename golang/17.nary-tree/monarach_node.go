package main

// monarchy node
type MonarchyNode struct {
	value    string
	children []*MonarchyNode
	isAlive  bool
}

func NewMonarchyNode(value string) *MonarchyNode {
	return &MonarchyNode{
		value:    value,
		children: []*MonarchyNode{},
		isAlive:  true,
	}
}

func (n *MonarchyNode) insertChild(value string) {
	n.children = append(n.children, NewMonarchyNode(value))
}

func (n *MonarchyNode) death() {
	n.isAlive = false
}
