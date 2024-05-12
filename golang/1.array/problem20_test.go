package main

import (
	"reflect"
	"testing"
)

// sort array of 0s, 1s, and 2s
func TestSort012(t *testing.T) {
	arr := []int{0, 2, 1, 2, 0}
	expected := []int{0, 0, 1, 2, 2}
	actual := Sort012(arr)

	if !reflect.DeepEqual(actual, expected) {
		t.Errorf("TestSort012 - Expected: %v, got: %v", expected, actual)
	}

	arr = []int{0, 1, 0}
	expected = []int{0, 0, 1}
	actual = Sort012(arr)

	if !reflect.DeepEqual(actual, expected) {
		t.Errorf("TestSort012 - Expected: %v, got: %v", expected, actual)
	}

	arr = []int{1, 2, 1, 0, 2, 0}
	expected = []int{0, 0, 1, 1, 2, 2}
	actual = Sort012(arr)

	if !reflect.DeepEqual(actual, expected) {
		t.Errorf("TestSort - Expected: %v, got: %v", expected, actual)
	}
}

