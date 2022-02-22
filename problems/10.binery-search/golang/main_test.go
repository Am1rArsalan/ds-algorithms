package main

import (
	"testing"
)

func TestBinarySearch(t *testing.T) {
	arr := []int{1, 2, 3, 4, 5, 6}
	result := BinarySearch(arr, 5, 0, len(arr)-1)
	expectedResult := 4

	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" (%v)", expectedResult, result)
	} else {
		t.Logf("Expected String(%v) is same as"+
			" (%v)", expectedResult, result)
	}

}

func TestFindDomainForGivenTarget(t *testing.T) {
	leftIndex, rightIndex := FindDomainForGivenTarget([]int{1, 3, 3, 5, 5, 5, 8, 9}, 5)
	expectedLeftIndex, expectedRightIndex := 3, 5
	if leftIndex == expectedLeftIndex && rightIndex == expectedRightIndex {
		t.Errorf("Expected (%v),(%v) is not same as"+
			" (%v) (%v)", leftIndex, rightIndex, expectedLeftIndex, expectedRightIndex)
	}

	leftIndex, rightIndex = FindDomainForGivenTarget([]int{1, 2, 3, 4, 5, 6}, 5)
	expectedLeftIndex, expectedRightIndex = 3, 3
	if leftIndex == expectedLeftIndex && rightIndex == expectedRightIndex {
		t.Errorf("Expected (%v),(%v) is not same as"+
			" (%v) (%v)", leftIndex, rightIndex, expectedLeftIndex, expectedRightIndex)
	}

	leftIndex, rightIndex = FindDomainForGivenTarget([]int{1, 2, 3, 4, 5}, 9)
	expectedLeftIndex, expectedRightIndex = -1, -1
	if leftIndex == expectedLeftIndex && rightIndex == expectedRightIndex {
		t.Errorf("Expected (%v),(%v) is not same as"+
			" (%v) (%v)", leftIndex, rightIndex, expectedLeftIndex, expectedRightIndex)
	}
}
