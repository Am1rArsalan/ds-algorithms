package main

import (
	"reflect"
	"testing"
)

func TestFindTrappedArea(t *testing.T) {
	result := findTrappedArea([]int{0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2})
	expectedResult := 8

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** received (%v) but expected"+
			"(%v)", result, expectedResult)
	}
}

func TestFindTrappedArea2(t *testing.T) {
	result := FindTrappedArea([]int{0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2})
	expectedResult := 8

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** received (%v) but expected"+
			"(%v)", result, expectedResult)
	}
}

func TestFindTrappedArea3(t *testing.T) {
	result := Problem3([]int{0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2})
	expectedResult := 8

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** received (%v) but expected"+
			"(%v)", result, expectedResult)
	}
}

func TestFindTrappedArea4(t *testing.T) {
	result := findMaxTrappingWater([]int{0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2})
	expectedResult := 8

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**first test case ** received (%v) but expected"+
			"(%v)", result, expectedResult)
	}
}
