package main

import (
	"testing"
)

func TestCalMinutes1(t *testing.T) {
	expectedResult := 13
	result := calculateMinutes1([]int{2, 2, 4, 6, -1, 4, 4, 5}, []int{0, 0, 4, 0, 7, 3, 6, 0}, 4)

	if expectedResult != result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", expectedResult, result)
	}
}

func TestCalMinutes2(t *testing.T) {
	expectedResult := 13
	result := calculateMinutes2([]int{2, 2, 4, 6, -1, 4, 4, 5}, []int{0, 0, 4, 0, 7, 3, 6, 0}, 4)

	if expectedResult != result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", expectedResult, result)
	}
}
