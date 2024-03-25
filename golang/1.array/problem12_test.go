package main

import "testing"

func TestCountTriplets(t *testing.T) {
	r := CountTriplets([]int{1, 5, 3, 2})
	er := 2

	if r != er {
		t.Errorf("expected: %+v but got: %+v", er, r)
	}
}
