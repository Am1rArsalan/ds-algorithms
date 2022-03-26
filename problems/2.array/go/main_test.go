package main

import (
	"reflect"
	"testing"
)

func TestFindSumTargetIndexes(t *testing.T) {
	result := findMaxArea([]int{1, 2, 3, 4, 6, 8, 5})
	expectedResult := 12

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}

	result = findMaxArea([]int{1, 2, 3})
	expectedResult = 2

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}

	result = findMaxArea([]int{1, 2, 2})
	expectedResult = 2

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}

	result = findMaxArea([]int{1, 2})
	expectedResult = 1

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}

	result = findMaxArea([]int{})
	expectedResult = 0

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}

	result = findMaxArea([]int{7, 1, 2, 3, 9})
	expectedResult = 28

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}
}
