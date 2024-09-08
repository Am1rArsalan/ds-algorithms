package main

import "testing"

func TestCheckTriplet(t *testing.T) {
	tests := []struct {
		name string
		arr  []int
		n    int
		want bool
	}{
		{
			name: "Test Case 1: Pythagorean triplet exists",
			arr:  []int{3, 2, 4, 6, 5},
			n:    5,
			want: true,
		},
		{
			name: "Test Case 2: No Pythagorean triplet",
			arr:  []int{3, 8, 5},
			n:    3,
			want: false,
		},
		{
			name: "Test Case 3: Large array with triplet",
			arr:  []int{10, 4, 6, 12, 5, 13},
			n:    6,
			want: true,
		},
		{
			name: "Test Case 4: Small array with no triplet",
			arr:  []int{1, 2, 3},
			n:    3,
			want: false,
		},
		{
			name: "Test Case 5: Array with all elements equal",
			arr:  []int{5, 5, 5, 5},
			n:    4,
			want: false,
		},
		{
			name: "Test Case 6: Array with negative numbers",
			arr:  []int{-3, -4, 5},
			n:    3,
			want: true,
		},
		{
			name: "Test Case 7: Array with zero and positive numbers",
			arr:  []int{0, 3, 4, 5},
			n:    4,
			want: true,
		},
		{
			name: "Test Case 8: Array with zero and no triplet",
			arr:  []int{0, 1, 2},
			n:    3,
			want: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := checkTriplet(tt.arr); got != tt.want {
				t.Errorf("checkTriplet() = %v, want %v", got, tt.want)
			}
		})
	}
}
