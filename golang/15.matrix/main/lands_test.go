package main

import (
	"log"
	"testing"
	"time"
)

func TestCountDfsIslandsDfs(t *testing.T) {
	start := time.Now()
	result := countIslandsDfs([][]int{{1, 1, 1, 1, 0}, {1, 1, 0, 1, 0}, {1, 1, 0, 0, 1}, {0, 0, 0, 1, 1}})
	timeOfExecution := time.Since(start)
	log.Printf("(DFS) count islands took %s", timeOfExecution)

	if result != 2 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 2, result)
	}

	result = countIslandsDfs([][]int{{0, 1, 0, 1, 0}, {1, 0, 1, 0, 1}, {0, 1, 1, 1, 0}, {1, 0, 1, 0, 1}})
	if result != 7 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 7, result)
	}

	result = countIslandsDfs([][]int{{1, 1, 1, 1, 1}, {1, 1, 1, 1, 1}, {1, 1, 1, 1, 1}, {1, 1, 1, 1, 1}})
	if result != 1 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 1, result)
	}

	result = countIslandsDfs([][]int{})
	if result != 0 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 0, result)
	}

	result = countIslandsDfs([][]int{{1}})
	if result != 1 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 1, result)
	}

	result = countIslandsDfs([][]int{{0}})
	if result != 0 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 1, result)
	}
}

func TestCountBfsIslandsBfs(t *testing.T) {
	start := time.Now()
	result := countIslandsBfs([][]int{{1, 1, 1, 1, 0}, {1, 1, 0, 1, 0}, {1, 1, 0, 0, 1}, {0, 0, 0, 1, 1}})
	timeOfExecution := time.Since(start)
	log.Printf("(BFS) count islands took %s", timeOfExecution)

	if result != 2 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 2, result)
	}

	result = countIslandsBfs([][]int{{0, 1, 0, 1, 0}, {1, 0, 1, 0, 1}, {0, 1, 1, 1, 0}, {1, 0, 1, 0, 1}})
	if result != 7 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 7, result)
	}

	result = countIslandsBfs([][]int{{1, 1, 1, 1, 1}, {1, 1, 1, 1, 1}, {1, 1, 1, 1, 1}, {1, 1, 1, 1, 1}})
	if result != 1 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 1, result)
	}

	result = countIslandsBfs([][]int{})
	if result != 0 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 0, result)
	}

	result = countIslandsBfs([][]int{{1}})
	if result != 1 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 1, result)
	}

	result = countIslandsBfs([][]int{{0}})
	if result != 0 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 1, result)
	}
}
