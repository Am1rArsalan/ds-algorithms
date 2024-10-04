package main

import (
	"reflect"
	"testing"
)

func TestFindNearestSmallerElementFromRight(t *testing.T) {
	tests := []struct {
		input []int
		want  []int
	}{
		{[]int{1, 3, 0, 2, 5}, []int{0, 0, -1, -1, -1}},
	}

	for _, test := range tests {
		if got := FindNearestSmallerElementFromRight(test.input); !reflect.DeepEqual(got, test.want) {
			t.Errorf("findNearestSmallerElement(%v) = %v, want %v", test.input, got, test.want)
		}
	}
}

func TestFindNearestSmallerElementFromLeft(t *testing.T) {
	tests := []struct {
		input []int
		want  []int
	}{
		{[]int{1, 3, 0, 2, 5}, []int{-1, 1, -1, 0, 2}},
	}

	for _, test := range tests {
		if got := FindNearestSmallerElementFromLeft(test.input); !reflect.DeepEqual(got, test.want) {
			t.Errorf("findNearestSmallerElement(%v) = %v, want %v", test.input, got, test.want)
		}
	}
}
