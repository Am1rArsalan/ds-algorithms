package monarchy

type MonarchyImpl struct {
	monarchy *MonarchyNode
}

func NewMonarchy(value string) MonarchyImpl {
	return MonarchyImpl{
		monarchy: NewMonarchyNode(value),
	}
}

func (m *MonarchyImpl) GetOrderOfSuccession() []string {
	order := []string{}

	dfs(m.monarchy, &order)

	return order
}

func (m *MonarchyImpl) Birth(child, parent string) {
	queue := []*MonarchyNode{m.monarchy}

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]

		if vertex.value == parent {
			vertex.insertChild(child)
			return
		}

		for _, childNode := range vertex.children {
			queue = append(queue, childNode)
		}
	}
}

func (m *MonarchyImpl) Death(name string) {
	queue := []*MonarchyNode{m.monarchy}

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]

		if vertex.value == name {
			vertex.death()
		}

		for _, childNode := range vertex.children {
			queue = append(queue, childNode)
		}
	}

}

func dfs(node *MonarchyNode, order *[]string) {
	if node == nil {
		return
	}

	if node.isAlive {
		*order = append(*order, node.value)
	}

	for _, child := range node.children {
		dfs(child, order)
	}
}
