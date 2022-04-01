package main

import (
	"testing"
)

func TestReturnKthElementInSortedArray(t *testing.T) {
	arr := []int{5, 3, 1, 6, 4, 2}
	result := returnKthLargestElement(arr, 2)
	expectedResult := 5

	if expectedResult != result {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}
