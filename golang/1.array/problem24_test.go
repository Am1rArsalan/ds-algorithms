package main

import (
	"reflect"
	"testing"
)

func TestReverseInGroups(t *testing.T) {
	tests := []struct {
		arr      []int
		k        int
		expected []int
	}{
		{
			k:        3,
			arr:      []int{1, 2, 3, 4, 5},
			expected: []int{3, 2, 1, 5, 4},
		},
		{
			k:        5,
			arr:      []int{5, 6, 8, 9},
			expected: []int{9, 8, 6, 5},
		},
	}

	for i, test := range tests {
		result := ReverseInGroups(test.arr, test.k)
		if !reflect.DeepEqual(result, test.expected) {
			t.Errorf("Test case %d failed: Expected %d but got %d", i+1, test.expected, result)
		}
	}
}
