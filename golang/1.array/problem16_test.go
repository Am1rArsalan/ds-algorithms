package main

import (
	"reflect"
	"testing"
)

func TestMergeWithoutExtraSpace(t *testing.T) {
	r1, r2 := MergeWithoutExtraSpace([]int{1, 3, 5, 7}, []int{0, 2, 6, 8, 9})
	er1 := []int{0, 1, 2, 3}
	er2 := []int{5, 6, 7, 8, 9}

	if !reflect.DeepEqual(r1, er1) {
		t.Log("First(1) test case")
		t.Errorf("expected: %+v, got : %+v", er1, r1)
	}
	if !reflect.DeepEqual(r2, er2) {
		t.Log("First(2) test case")
		t.Errorf("expected: %+v, got : %+v", er2, r2)
	}

	r1, r2 = MergeWithoutExtraSpace([]int{10, 12}, []int{5, 18, 20})
	er1 = []int{5, 10}
	er2 = []int{12, 18, 20}

	if !reflect.DeepEqual(r1, er1) {
		t.Log("Second(1) test case")
		t.Errorf("expected: %+v, got : %+v", er1, r1)
	}
	if !reflect.DeepEqual(r2, er2) {
		t.Log("Second(2) test case")
		t.Errorf("expected: %+v, got : %+v", er2, r2)
	}

	//1 35

	r1, r2 = MergeWithoutExtraSpace([]int{1, 35}, []int{6, 9, 13, 15, 20, 25, 29, 46})
	er1 = []int{1, 6}
	er2 = []int{9, 13, 15, 20, 25, 29, 35, 46}

	if !reflect.DeepEqual(r1, er1) {
		t.Log("Third(1) test case")
		t.Errorf("expected: %+v, got : %+v", er1, r1)
	}
	if !reflect.DeepEqual(r2, er2) {
		t.Log("Third(2) test case")
		t.Errorf("expected: %+v, got : %+v", er2, r2)
	}
}
