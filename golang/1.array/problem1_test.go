package main

import (
	"reflect"
	"testing"
)

func TestFindSumTargetIndexes(t *testing.T) {
	expectedResult := []int{1, 4}
	result := find_sum_target_indexes([]int{1, 2, 3, 7, 9}, 11)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("** first test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = []int{1, 5}
	result = find_sum_target_indexes([]int{1, 2, 3, 4, 6, 9}, 11)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("** second test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = nil
	result = find_sum_target_indexes([]int{1, 2, 3, 4, 5}, 25)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("** second test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = []int{0, 1}
	result = find_sum_target_indexes([]int{1, 6}, 7)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("** second test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = nil
	result = find_sum_target_indexes([]int{1, 6}, 11)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("** second test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = nil
	result = find_sum_target_indexes([]int{}, 5)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("**second test case** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = []int{0}
	result = find_sum_target_indexes([]int{5}, 5)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("** second test case ** Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}


