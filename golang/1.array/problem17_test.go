package main

import (
	"reflect"
	"testing"
)

func TestRearrangeArrayAlternativelyWithoutExtraSpace(t *testing.T) {
	r := RearrangeArrayAlternativelyWithoutExtraSpace([]int{1, 2, 3, 4, 5, 6})
	er := []int{6, 1, 5, 2, 4, 3}

	if !reflect.DeepEqual(r, er) {
		t.Errorf("expected %+v, but got %+v", er, r)
	}
}
