package main

import "testing"

func TestFindMissingNumber(t *testing.T) {
	// first test case 
	input := []int{1, 2, 3, 5}
	r := FindMissingNumber(input)
	er := 4

	if r != er {
		t.Errorf("First Test case %+v", input)
		t.Errorf("expected %+v,  got: %+v", er, r)
	}

	// second test case 
	input = []int{6, 1, 2, 8, 3, 4, 7, 10, 5}
	r = FindMissingNumber(input)
	er = 9

	if r != er {
		t.Errorf("First Test case %+v", input)
		t.Errorf("expected %+v,  got: %+v", er, r)
	}
}



func TestFindMissingNumber2(t *testing.T) {
	// first test case 
	input := []int{1, 2, 3, 5}
	r := FindMissingNumberXOR(input)
	er := 4

	if r != er {
		t.Errorf("First Test case %+v", input)
		t.Errorf("expected %+v,  got: %+v", er, r)
	}

	// second test case 
	input = []int{6, 1, 2, 8, 3, 4, 7, 10, 5}
	r = FindMissingNumberXOR(input)
	er = 9

	if r != er {
		t.Errorf("First Test case %+v", input)
		t.Errorf("expected %+v,  got: %+v", er, r)
	}
}
