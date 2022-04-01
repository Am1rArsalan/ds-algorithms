package main

import (
	"reflect"
	"testing"
)

func TestQuickSort(t *testing.T) {
	arr := []int{5, 3, 1, 6, 4, 2}
	quickSort(arr, 0, len(arr)-1)
	expectedResult := []int{1, 2, 3, 4, 5, 6}

	if !reflect.DeepEqual(arr, expectedResult) {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, arr)
	}
}
