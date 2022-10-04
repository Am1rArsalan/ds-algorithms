package main

import (
	"testing"
)

func TestClassPhotos(t *testing.T) {
    result := ClassPhotos([]int{5,8,1,3,4}, []int{6,9,2,4,5})
    expectedResult := true 

	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}
}




