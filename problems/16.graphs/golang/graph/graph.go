package graph_algorithem

import "fmt"

type Graph struct {
	vertices []int
	edges    [][]int
}

func NewGraph() Graph {
	return Graph{
		vertices: []int{},
		edges:    [][]int{},
	}
}

//FIXME
func (g Graph) AddVertex(vertex int) Graph {
	g.vertices = append(g.vertices, vertex)

	if len(g.edges) > vertex {
		fmt.Println("Amir is here")
		g.edges[vertex] = []int{}
	} else {
		///
	}

	return g
}

func (g Graph) AddEdge(from, to int) Graph {
	g.edges[from] = append(g.edges[from], to)
	g.edges[to] = append(g.edges[to], from)

	return g
}

func (g Graph) BfsTraverse(edges [][]int) []int {
	queue := []int{0}
	result := []int{0}
	seen := make(map[int]bool)
	seen[0] = true

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]
		connections := edges[vertex]
		for i := 0; i < len(connections); i++ {
			connection := connections[i]
			if !seen[connection] {
				queue = append(queue, connection)
				result = append(result, connection)
			}
			seen[connection] = true
		}
	}

	return result
}

func (g Graph) DfsTraverse(edges [][]int) []int {
	queue := []int{0}
	result := []int{0}
	seen := make(map[int]bool)
	seen[0] = true

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]
		connections := edges[vertex]
		for i := 0; i < len(connections); i++ {
			connection := connections[i]
			if !seen[connection] {
				queue = append(queue, connection)
				result = append(result, connection)
			}
			seen[connection] = true
		}
	}

	return result
}
