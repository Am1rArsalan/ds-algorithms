package graph

import (
	"reflect"
	"sort"
	"testing"
)

func createGraphForTest() Graph {
	graph := NewGraph()
	graph = graph.AddVertex(0).
		AddVertex(1).
		AddVertex(2).
		AddVertex(3).
		AddVertex(4).
		AddVertex(5).
		AddVertex(6).
		AddVertex(7).
		AddVertex(8)

	graph = graph.
		AddEdge(0, 1).
		AddEdge(0, 3).
		AddEdge(3, 2).
		AddEdge(2, 8).
		AddEdge(3, 4).
		AddEdge(3, 5).
		AddEdge(4, 6).
		AddEdge(6, 7)

	return graph
}

func TestGraphAddVertexAndAddEdge(t *testing.T) {
	graph := createGraphForTest()
	expectedEdges := [][]int{{1, 3}, {0}, {3, 8}, {0, 2, 4, 5}, {3, 6}, {3}, {4, 7}, {6}, {2}}

	if !reflect.DeepEqual(graph.edges, expectedEdges) {
		t.Errorf("graph edges are %v, expected %v", graph.edges, expectedEdges)
	}

	if !reflect.DeepEqual(graph.vertices, []int{0, 1, 2, 3, 4, 5, 6, 7, 8}) {
		t.Errorf("graph vertices are %v, expected %v", graph.edges, []int{0, 1, 2, 3, 4, 5, 6, 7, 8})
	}
}

func TestBfs(t *testing.T) {
	graph := createGraphForTest()
	result := graph.BfsTraverse()

	sort.Slice(result, func(i, j int) bool {
		return result[i] < result[j]
	})

	if !reflect.DeepEqual(result, graph.vertices) {
		t.Errorf("graph vertices are %v, expected %v", result, graph.vertices)
	}
}

func TestDfs(t *testing.T) {
	graph := createGraphForTest()
	result := graph.DfsTraverse()

	sort.Slice(result, func(i, j int) bool {
		return result[i] < result[j]
	})

	if !reflect.DeepEqual(result, graph.vertices) {
		t.Errorf("graph vertices are %v, expected %v", result, graph.vertices)
	}
}
