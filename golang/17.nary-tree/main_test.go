package main

import (
	"reflect"
	"testing"
)

func TestFindSumTargetIndexes(t *testing.T) {
	monarchy := NewMonarchy("Jake")
	monarchy.Birth("Catherine", "Jake")
	monarchy.Birth("Jane", "Catherine")
	monarchy.Birth("Farah", "Jane")
	monarchy.Birth("Tom", "Jake")
	monarchy.Birth("Celine", "Jake")
	monarchy.Birth("Mark", "Catherine")
	monarchy.Birth("Peter", "Celine")

	result := monarchy.GetOrderOfSuccession()
	expectedResult := []string{
		"Jake",
		"Catherine",
		"Jane",
		"Farah",
		"Mark",
		"Tom",
		"Celine",
		"Peter",
	}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Expected (%v)"+
			" but got (%v)", expectedResult, result)
	}

	monarchy.Death("Jake")
	monarchy.Death("Jane")

	result = monarchy.GetOrderOfSuccession()
	expectedResult = []string{"Catherine", "Farah", "Mark", "Tom", "Celine", "Peter"}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Expected (%v)"+
			" but got (%v)", expectedResult, result)
	}
}
