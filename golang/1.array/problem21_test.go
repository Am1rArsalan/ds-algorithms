package main

import "testing"

func TestFindEquilibriumPoint2(t *testing.T) {
	tests := []struct {
		arr      []int
		expected int
	}{
		// Test Case 1: Basic Test Case
		{arr: []int{1, 3, 5, 2, 2}, expected: 3},

		// Test Case 2: Single Element Array
		{arr: []int{1}, expected: 1},

		// Test Case 3: No Equilibrium Point
		{arr: []int{1, 2, 3}, expected: -1},

		// Test Case 4: All Elements Are the Same
		{arr: []int{5, 5, 5, 5, 5}, expected: 3},

		// Test Case 5: Large Numbers
		{arr: []int{1000000000, 1, 1000000000}, expected: 2},

		// Test Case 6: Multiple Equilibrium Points
		{arr: []int{1, 0, 1, 0, 1, 0, 1}, expected: 4},

		// Test Case 7: Empty Array
		{arr: []int{}, expected: -1},

		// Test Case 8: Array with All Zeroes
		{arr: []int{0, 0, 0, 0, 0}, expected: 1},

		// Test Case 9: Large Array with No Equilibrium Point
		{arr: []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, expected: -1},
	}

	for _, tt := range tests {
		result := FindEquilibriumPoint2(tt.arr)
		if result != tt.expected {
			t.Errorf("For arr = %v, expected %d, but got %d", tt.arr, tt.expected, result)
		}
	}
}

func TestFindEquilibriumPoint(t *testing.T) {
	tests := []struct {
		arr      []int
		expected int
	}{
		// Test Case 1: Basic Test Case
		{arr: []int{1, 3, 5, 2, 2}, expected: 3},

		// Test Case 2: Single Element Array
		{arr: []int{1}, expected: 1},

		// Test Case 3: No Equilibrium Point
		{arr: []int{1, 2, 3}, expected: -1},

		// Test Case 4: All Elements Are the Same
		{arr: []int{5, 5, 5, 5, 5}, expected: 3},

		// Test Case 5: Large Numbers
		{arr: []int{1000000000, 1, 1000000000}, expected: 2},

		// Test Case 6: Multiple Equilibrium Points
		{arr: []int{1, 0, 1, 0, 1, 0, 1}, expected: 4},

		// Test Case 7: Empty Array
		{arr: []int{}, expected: -1},

		// Test Case 8: Array with All Zeroes
		{arr: []int{0, 0, 0, 0, 0}, expected: 1},

		// Test Case 9: Large Array with No Equilibrium Point
		{arr: []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, expected: -1},
	}

	for _, tt := range tests {
		result := FindEquilibriumPoint(tt.arr)
		if result != tt.expected {
			t.Errorf("For arr = %v, expected %d, but got %d", tt.arr, tt.expected, result)
		}
	}
}
