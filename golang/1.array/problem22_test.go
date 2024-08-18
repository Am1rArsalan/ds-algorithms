package main

import (
	"reflect"
	"testing"
)

func TestFindLeaders2(t *testing.T) {
	tests := []struct {
		arr      []int
		expected []int
	}{
		// Test Case 1: Basic Test Case
		{arr: []int{16, 17, 4, 3, 5, 2}, expected: []int{17, 5, 2}},

		// Test Case 2: Multiple Equal Leaders
		{arr: []int{10, 4, 2, 4, 1}, expected: []int{10, 4, 4, 1}},

		// Test Case 3: Array Sorted in Increasing Order
		{arr: []int{5, 10, 20, 40}, expected: []int{40}},

		// Test Case 4: Array Sorted in Non-Increasing Order
		{arr: []int{30, 10, 10, 5}, expected: []int{30, 10, 10, 5}},

		// Test Case 5: Single Element Array
		{arr: []int{7}, expected: []int{7}},

		// Test Case 6: All Elements Are the Same
		{arr: []int{3, 3, 3, 3, 3}, expected: []int{3, 3, 3, 3, 3}},

		// Test Case 7: Large Numbers
		{arr: []int{10000000, 1000000, 100000, 10000}, expected: []int{10000000, 1000000, 100000, 10000}},

		// Test Case 8: Leading Element at the Start and End
		{arr: []int{7, 5, 4, 3, 2}, expected: []int{7, 5, 4, 3, 2}},

		// Test Case 9: Descending and Ascending Order Mix
		{arr: []int{6, 5, 10, 20, 2, 1}, expected: []int{20, 2, 1}},

		// Test Case 10: Empty Array
		{arr: []int{}, expected: []int{}},

		// Test Case 11: Two Elements with One Larger
		{arr: []int{5, 1}, expected: []int{5, 1}},
	}

	for _, tt := range tests {
		result := FindLeaders2(tt.arr)
		if !reflect.DeepEqual(result, tt.expected) {
			t.Errorf("For arr = %v, expected %v, but got %v", tt.arr, tt.expected, result)
		}
	}
}

func TestFindLeaders(t *testing.T) {
	tests := []struct {
		arr      []int
		expected []int
	}{
		// Test Case 1: Basic Test Case
		{arr: []int{16, 17, 4, 3, 5, 2}, expected: []int{17, 5, 2}},

		// Test Case 2: Multiple Equal Leaders
		{arr: []int{10, 4, 2, 4, 1}, expected: []int{10, 4, 4, 1}},

		// Test Case 3: Array Sorted in Increasing Order
		{arr: []int{5, 10, 20, 40}, expected: []int{40}},

		// Test Case 4: Array Sorted in Non-Increasing Order
		{arr: []int{30, 10, 10, 5}, expected: []int{30, 10, 10, 5}},

		// Test Case 5: Single Element Array
		{arr: []int{7}, expected: []int{7}},

		// Test Case 6: All Elements Are the Same
		{arr: []int{3, 3, 3, 3, 3}, expected: []int{3, 3, 3, 3, 3}},

		// Test Case 7: Large Numbers
		{arr: []int{10000000, 1000000, 100000, 10000}, expected: []int{10000000, 1000000, 100000, 10000}},

		// Test Case 8: Leading Element at the Start and End
		{arr: []int{7, 5, 4, 3, 2}, expected: []int{7, 5, 4, 3, 2}},

		// Test Case 9: Descending and Ascending Order Mix
		{arr: []int{6, 5, 10, 20, 2, 1}, expected: []int{20, 2, 1}},

		// Test Case 10: Empty Array
		{arr: []int{}, expected: []int{}},

		// Test Case 11: Two Elements with One Larger
		{arr: []int{5, 1}, expected: []int{5, 1}},
	}

	for _, tt := range tests {
		result := FindLeaders(tt.arr)
		if !reflect.DeepEqual(result, tt.expected) {
			t.Errorf("For arr = %v, expected %v, but got %v", tt.arr, tt.expected, result)
		}
	}
}
