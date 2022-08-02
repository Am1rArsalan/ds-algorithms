package main

import (
	"testing"
)

func Test_validate_subsequence(t *testing.T) {
	arr := []int{5, 1, 22, 25, 6, -1, 8, 10}
	innerArr := []int{1, 6, -1, 10}
	result := validateSubsequences(arr, innerArr)
	// should be true

	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}
}

func Test_validate_subsequence2(t *testing.T) {
	arr := []int{5, 1, 22, 25, 6, -1, 8, 10}
	innerArr := []int{1, 6, 10, -1}
	result := validateSubsequences(arr, innerArr)
	// should be false

	if result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}
}
