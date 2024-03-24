package main

import (
	"reflect"
	"testing"
)

func TestFindIndexesOfSubArrayWithGivenSum(t *testing.T) {
	from, to := FindIndexesOfSubArrayWithGivenSum([]int{1, 2, 3, 7, 5}, 12, 5)
	expectedResultFrom := 1
	expectedResultTo := 3

	if from != expectedResultFrom {
		t.Errorf("**first test case ** Expected %+v but got %+v", expectedResultFrom, from)
	}

	if to != expectedResultTo {
		t.Errorf("**first test case ** Expected %+v but got %+v", expectedResultTo, to)
	}

	from, to = FindIndexesOfSubArrayWithGivenSum([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 15, 10)
	expectedResultFrom = 0
	expectedResultTo = 4

	if from != expectedResultFrom {
		t.Errorf("**second test case ** Expected %+v but got %+v", expectedResultFrom, from)
	}

	if to != expectedResultTo {
		t.Errorf("**second test case ** Expected %+v but got %+v", expectedResultTo, to)
	}

	from, to = FindIndexesOfSubArrayWithGivenSum([]int{1, 0}, 0, 2)
	expectedResultFrom = 1
	expectedResultTo = 1

	if from != expectedResultFrom {
		t.Errorf("**third test case ** Expected %+v but got %+v", expectedResultFrom, from)
	}

	if to != expectedResultTo {
		t.Errorf("**third test case ** Expected %+v but got %+v", expectedResultTo, to)
	}

	from, to = FindIndexesOfSubArrayWithGivenSum([]int{0}, 0, 1)
	expectedResultFrom = 0
	expectedResultTo = 0

	if from != expectedResultFrom {
		t.Errorf("**forth test case ** Expected %+v but got %+v", expectedResultFrom, from)
	}

	if to != expectedResultTo {
		t.Errorf("**forth test case ** Expected %+v but got %+v", expectedResultTo, to)
	}

	a := []int{142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191, 43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30, 24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83, 130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71, 30, 178, 174, 98, 113}
	from, to = FindIndexesOfSubArrayWithGivenSum(a, 665, len(a))
	expectedResultFrom = -1
	expectedResultTo = -1

	if from != expectedResultFrom {
		t.Errorf("**forth test case ** Expected %+v but got %+v", expectedResultFrom, from)
	}
	if to != expectedResultTo {
		t.Errorf("**forth test case ** Expected %+v but got %+v", expectedResultTo, to)
	}
}

// one based array
func TestFindIndexesOfSubArrayWithGivenSum2(t *testing.T) {
	r := FindIndexesOfSubArrayWithGivenSum2([]int{1, 2, 3, 7, 5}, 12, 5)
	er := []int{2, 4}

	if !reflect.DeepEqual(r, er) {
		t.Errorf("**first test case ** Expected %+v but got %+v", er, r)
	}

	r = FindIndexesOfSubArrayWithGivenSum2([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 15, 10)
	er = []int{1, 5}

	if !reflect.DeepEqual(r, er) {
		t.Errorf("**second test case ** Expected %+v but got %+v", er, r)
	}

	r = FindIndexesOfSubArrayWithGivenSum2([]int{1, 0}, 0, 2)
	er = []int{2, 2}

	if !reflect.DeepEqual(r, er) {
		t.Errorf("**third test case ** Expected %+v but got %+v", er, r)
	}

	r = FindIndexesOfSubArrayWithGivenSum2([]int{0}, 0, 1)
	er = []int{1, 1}

	if !reflect.DeepEqual(r, er) {
		t.Errorf("**forth test case ** Expected %+v but got %+v", er, r)
	}

	a := []int{142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191, 43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30, 24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83, 130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71, 30, 178, 174, 98, 113}
	r = FindIndexesOfSubArrayWithGivenSum2(a, 665, len(a))
	er = []int{-1, -1}
	if !reflect.DeepEqual(r, er) {
		t.Errorf("**forth test case ** Expected %+v but got %+v", er, r)
	}

}
