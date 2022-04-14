package main

import "testing"

func TestFinishCourse(t *testing.T) {

	expectedResult := true
	result := canFinishCourses(6, [][]int{
		{1, 0},
		{2, 1},
		{2, 5},
		{0, 3},
		{4, 3},
		{3, 5},
		{4, 5},
	})

	if !result {
		t.Errorf("1.Expected (%v) but got"+
			"(%v)", expectedResult, result)
	}

	expectedResult = true
	result = canFinishCourses(4, [][]int{
		{1, 0},
		{2, 1},
		{0, 3},
	})

	if !result {
		t.Errorf("2.Expected (%v) but got"+
			"(%v)", expectedResult, result)
	}

	expectedResult = false
	result = canFinishCourses(3, [][]int{
		{1, 0},
		{2, 1},
		{0, 2},
	})

	if result {
		t.Errorf("3.Expected (%v) but got"+
			"(%v)", expectedResult, result)
	}
}
