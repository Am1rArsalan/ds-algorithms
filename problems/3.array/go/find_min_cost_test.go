package main

import (
	"reflect"
	"testing"
)

// top down
func TestFindMinCost(t *testing.T) {
	result := findMinCost([]int{20, 15, 30, 5})
	expectedResult := 20

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", expectedResult, result)
	}
}

// bottom up
func TestFindMinCost2(t *testing.T) {
	result := findMinCost2([]int{20, 15, 30, 5})
	expectedResult := 20

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", expectedResult, result)
	}
}
