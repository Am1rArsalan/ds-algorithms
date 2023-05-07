package main

import (
	"testing"
)

func TestCrystalballs(t *testing.T) {
	leftIndex, rightIndex := FindDomainForGivenTarget([]int{1, 3, 3, 5, 5, 5, 8, 9}, 5)
	expectedLeftIndex, expectedRightIndex := 3, 5
	if leftIndex != expectedLeftIndex || rightIndex != expectedRightIndex {
		t.Errorf("1.Expected (%v),(%v) is not same as"+
			" (%v) (%v)", leftIndex, rightIndex, expectedLeftIndex, expectedRightIndex)
	}
}
