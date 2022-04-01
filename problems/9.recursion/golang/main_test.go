package main

import (
	"reflect"
	"testing"
)

func TestQuickSort(t *testing.T) {
	arr := []int{7, 1, 3, 5, 2, 6, 4}
	quickSort(arr, 0, len(arr)-1)
	expectedResult := []int{1, 2, 3, 4, 5, 6, 7}

	if !reflect.DeepEqual(arr, expectedResult) {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, arr)
	}
}

func TestReturnKthElementInSortedArray(t *testing.T) {
	arr := []int{7, 1, 3, 5, 2, 6, 4}
	result := returnKthLargestElement(arr, 2)
	expectedResult := 6

	if expectedResult != result {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}
