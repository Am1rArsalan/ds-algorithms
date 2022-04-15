package binary_search

import (
	"testing"
)

func TestBinarySearch(t *testing.T) {
	arr := []int{1, 2, 3, 4, 5, 6}
	target := 5
	result := BinarySearch(arr, target, 0, len(arr)-1)
	expectedResult := 4

	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" (%v)", expectedResult, result)
	} else {
		t.Logf("Expected String(%v) is same as"+
			" (%v)", expectedResult, result)
	}
}
