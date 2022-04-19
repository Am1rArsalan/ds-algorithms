package main

import (
	"testing"
)

func TestValidateString(t *testing.T) {
	result := validateString("a)bc(d)")
	expectedResult := "abc(d)"

	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) to be but got"+
			"(%v)", expectedResult, result)
	}

	result = validateString("(ab(c)d")
	expectedResult = "ab(c)d"

	if result != expectedResult {
		t.Errorf("**second test case ** Expected (%v) to be but got"+
			"(%v)", expectedResult, result)
	}

	result = validateString("))((")
	expectedResult = ""

	if result != expectedResult {
		t.Errorf("**second test case ** Expected (%v) to be but got"+
			"(%v)", expectedResult, result)
	}
}
