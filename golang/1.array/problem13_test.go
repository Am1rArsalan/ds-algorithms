package main

import "testing"

func TestFindMaxSubArraySum(t *testing.T) {
	r := FindMaxSubArraySum([]int{1, 2, 3, -2, 5})
	er := 9

	if r != er {
		t.Log("First test case")
		t.Errorf("expected :%+v, but got :%+v", er, r)
	}

	r = FindMaxSubArraySum([]int{-1, -2, -3, -4})
	er = -1

	if r != er {
		t.Log("Second test case")
		t.Errorf("expected :%+v, but got :%+v", er, r)
	}

	r = FindMaxSubArraySum([]int{-10, -2, -3, -4})
	er = -2 
	if r != er {
		t.Log("Third test case")
		t.Errorf("expected :%+v, but got :%+v", er, r)
	}
}
