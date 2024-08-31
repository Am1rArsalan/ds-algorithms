package main

import (
	"reflect"
	"testing"
)

func TestInversionCount(t *testing.T) {
	a := []int{2, 4, 1, 3, 5}
	r := InversionCount(a)
	er := 3

	if r != er {
		t.Errorf("1.expected %+v, but got %+v", er, r)
	}

	a = []int{2, 3, 4, 5, 6}
	r = InversionCount(a)
	er = 0

	if r != er {
		t.Errorf("2.expected %+v, but got %+v", er, r)
	}

	a = []int{10, 10, 10}
	r = InversionCount(a)
	er = 0

	if r != er {
		t.Errorf("3.expected %+v, but got %+v", er, r)
	}
}

func TestMergeSort(t *testing.T) {
	a := []int{2, 4, 1, 3, 5}
	r := MergeSort(a)
	er := []int{1, 2, 3, 4, 5}

	if !reflect.DeepEqual(r, er) {
		t.Errorf("1.expected %+v, but got %+v", er, r)
	}
}
