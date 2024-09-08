package main

import (
	"fmt"
	"testing"
)

// Assuming the function is named `kthSmallest` and takes arguments (arr []int, k int) int

func TestKthSmallest(t *testing.T) {
	tests := []struct {
		arr      []int
		k        int
		expected int
	}{
		{
			arr:      []int{7, 10, 4, 3, 20, 15},
			k:        3,
			expected: 7,
		},
		{
			arr:      []int{2, 3, 1, 20, 15},
			k:        4,
			expected: 15,
		},
		{
			arr:      []int{5},
			k:        1,
			expected: 5,
		},
		{
			arr:      []int{8, 16, 24, 32, 40},
			k:        5,
			expected: 40,
		},
		{
			arr:      []int{22, 11, 33, 44, 55},
			k:        1,
			expected: 11,
		},
		{
			arr:      []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
			k:        6,
			expected: 6,
		},
		{
			arr:      []int{9, 3, 2, 5, 7, 1, 8},
			k:        2,
			expected: 2,
		},
		{
			arr:      []int{-10, -50, -30, -20, -40},
			k:        4,
			expected: -20,
		},
		{
			arr:      []int{30, 10, 20, 50, 40},
			k:        5,
			expected: 50,
		},
	}

	for i, tt := range tests {
		t.Run(fmt.Sprintf("test case %+v", i+1), func(t *testing.T) {
			result := kthSmallest(tt.arr, tt.k)
			if result != tt.expected {
				t.Errorf("expected %d, got %d", tt.expected, result)
			}
		})
	}
}
