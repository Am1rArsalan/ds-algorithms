package main

import "testing"

func TestFindNonConstructibleChange(t *testing.T) {
	arr := []int{5, 7, 1, 1, 2, 3, 22}
	result := findNonConstructibleChange(arr)

	if result != 20 {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", 20, result)
	}
}
