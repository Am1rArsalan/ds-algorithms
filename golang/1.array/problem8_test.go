package main

import (
	"testing"
)

func TestFindMinimumWaitingTime(t *testing.T) {
	expectedResult := 0
	result := FindMinimumWatingTime([]int{100})

	if result != expectedResult {
		t.Errorf("** first test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = 1
	result = FindMinimumWatingTime([]int{100, 1})

	if result != expectedResult {
		t.Errorf("** first test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = 17
	result = FindMinimumWatingTime([]int{3,2,1,2,6})

	if result != expectedResult {
		t.Errorf("** first test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}
