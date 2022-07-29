package main

import (
	"reflect"
	"testing"
)

func Test_validate_subsequence(t *testing.T) {
	arr := []int{5, 1, 22, 25, 6, -1, 8, 10}
	innerArr := []int{1, 6, -1, 10}

	if !reflect.DeepEqual(arr, innerArr) {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}
}

func Test_validate_subsequence2(t *testing.T) {
	arr := []int{5, 1, 22, 25, 6, -1, 8, 10}
	innerArr := []int{1, 6, 10, -1}
	if !reflect.DeepEqual(arr, innerArr) {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}
}
