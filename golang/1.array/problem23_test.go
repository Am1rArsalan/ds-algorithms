package main

import (
	"testing"
)

func TestMinimumPlatforms(t *testing.T) {
	tests := []struct {
		n        int
		arr      []int
		dep      []int
		expected int
	}{
		{
			n:        6,
			arr:      []int{900, 940, 950, 1100, 1500, 1800},
			dep:      []int{910, 1200, 1120, 1130, 1900, 2000},
			expected: 3,
		},
		{
			n:        3,
			arr:      []int{900, 1235, 1100},
			dep:      []int{1000, 1240, 1200},
			expected: 1,
		},
		{
			n:        3,
			arr:      []int{1000, 935, 1100},
			dep:      []int{1200, 1240, 1130},
			expected: 3,
		},
		{
			n:        4,
			arr:      []int{1000, 1000, 1000, 1000},
			dep:      []int{1030, 1030, 1030, 1030},
			expected: 4,
		},
		{
			n: 10000,
			arr: func() []int {
				arr := make([]int, 10000)
				for i := 0; i < 10000; i++ {
					arr[i] = 1000 + i
				}
				return arr
			}(),
			dep: func() []int {
				dep := make([]int, 10000)
				for i := 0; i < 10000; i++ {
					dep[i] = 1000 + i + 10
				}
				return dep
			}(),
			expected: 1,
		},
		{
			n:        1,
			arr:      []int{1000},
			dep:      []int{1030},
			expected: 1,
		},
		{
			n:        3,
			arr:      []int{900, 910, 920},
			dep:      []int{910, 920, 930},
			expected: 1,
		},
		{
			n:        3,
			arr:      []int{2300, 2345, 2350},
			dep:      []int{2359, 2359, 2359},
			expected: 2,
		},
		{
			n:        4,
			arr:      []int{1000, 1010, 1020, 1030},
			dep:      []int{1040, 1040, 1040, 1040},
			expected: 4,
		},
	}

	for i, test := range tests {
		result := MinimumPlatforms(test.n, test.arr, test.dep)
		if result != test.expected {
			t.Errorf("Test case %d failed: Expected %d but got %d", i+1, test.expected, result)
		}
	}
}
