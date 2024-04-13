package main

import (
	"testing"
)

func TestCountPairs(t *testing.T) {
	a := []int{2, 1, 6}
	b := []int{1, 5}
	r := CountPairs(a, b, len(a), len(b))
	var er int64 = 3

	if r != er {
		t.Log("First test case")
		t.Errorf("expected: %+v, got : %+v", er, r)
	}

	a = []int{2, 3, 4, 5}
	b = []int{1, 2, 3}
	r1 := CountPairs(a, b, len(a), len(b))
	var er1 int64 = 5

	if r1 != er1 {
		t.Log("Second test case")
		t.Errorf("expected: %+v, got : %+v", er1, r1)
	}
}
