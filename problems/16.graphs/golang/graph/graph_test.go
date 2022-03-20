package graph

import (
	"fmt"
	"testing"
)

func TestBfsTraverse(t *testing.T) {
	graph := NewGraph()
	graph = graph.addVertex(0)

	//.addVertex(1).addVertex(2).addVertex(3).addVertex(4).addVertex(5).addVertex(6).addVertex(7).addVertex(8)
	//graph = graph.addEdge(0, 3)
	//.addEdge(3, 2).addEdge(2, 8).addEdge(3, 4).addEdge(3, 5).addEdge(4, 6).addEdge(6, 7)

	fmt.Println("graph edges", graph.edges)
	fmt.Println("graph vertices", graph.vertices)
	//fmt.Println("graph's vertices are ", graph.vertices)
	//graph = graph.addEdge(0, 1)
}
