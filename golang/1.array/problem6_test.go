package main

import (
	"reflect"
	"testing"
)

func Test_squared_stored_array(t *testing.T) {
	arr := []int{1, 2, 3, 5, 6, 8, 9}
	sol := []int{1, 4, 9, 25, 36, 64, 81}

	if !reflect.DeepEqual(SquaredStoredArray(arr), sol) {
		t.Errorf("first test case failed")
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}

	arr = []int{-3, -1, 2, 5, 10}
	sol = []int{1, 4, 9, 25, 100}

	if !reflect.DeepEqual(SquaredStoredArray(arr), sol) {
		t.Errorf("second test case failed")
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}

	arr = []int{-6, -4, -2, 0, 1}
	sol = []int{0, 1, 4, 16, 36}
	if !reflect.DeepEqual(SquaredStoredArray(arr), sol) {
		t.Errorf("third test case failed")
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}

}
