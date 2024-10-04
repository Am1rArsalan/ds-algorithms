package main

import "testing"

func TestFindLargestRectangleArea(t *testing.T) {
	tests := []struct {
		input []int
		want  int
	}{
		{[]int{2, 1, 5, 6, 2, 3}, 10},
	}

	for _, test := range tests {
		if got := FindTheLargestRectangleArea(test.input); got != test.want {
			t.Errorf("findLargestRectangleArea(%v) = %v, want %v", test.input, got, test.want)
		}
	}
}
