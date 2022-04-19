package main

import (
	"testing"
)

func TestFindDomainForGivenTarget(t *testing.T) {
	leftIndex, rightIndex := FindDomainForGivenTarget([]int{1, 3, 3, 5, 5, 5, 8, 9}, 5)
	expectedLeftIndex, expectedRightIndex := 3, 5
	if leftIndex != expectedLeftIndex || rightIndex != expectedRightIndex {
		t.Errorf("1.Expected (%v),(%v) is not same as"+
			" (%v) (%v)", leftIndex, rightIndex, expectedLeftIndex, expectedRightIndex)
	}

	leftIndex, rightIndex = FindDomainForGivenTarget([]int{1, 2, 3, 4, 5, 6}, 4)
	expectedLeftIndex, expectedRightIndex = 3, 3
	if leftIndex != expectedLeftIndex || rightIndex != expectedRightIndex {
		t.Errorf("2.Expected (%v),(%v) is not same as"+
			" (%v) (%v)", expectedLeftIndex, expectedRightIndex, leftIndex, rightIndex)
	}

	leftIndex, rightIndex = FindDomainForGivenTarget([]int{1, 2, 3, 4, 5}, 9)
	expectedLeftIndex, expectedRightIndex = -1, -1
	if leftIndex != expectedLeftIndex || rightIndex != expectedRightIndex {
		t.Errorf("3.Expected (%v),(%v) is not same as"+
			" (%v) (%v)", leftIndex, rightIndex, expectedLeftIndex, expectedRightIndex)
	}
}
