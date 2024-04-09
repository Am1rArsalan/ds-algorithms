package main

import (
	"testing"
)

func TestFindNumberOfPairs(t *testing.T) {
	r := FindNumberOfPairs([]int{2, 1, 6})
	er := 3 

	if r != er { 
		t.Log("First(1) test case")
		t.Errorf("expected: %+v, got : %+v", er, r)
	}


	r1 := FindNumberOfPairs([]int{2 ,3, 4, 5})
	er1 := 5 

	if r1 != er1 { 
		t.Log("First(1) test case")
		t.Errorf("expected: %+v, got : %+v", er1, r1)
	}
}
