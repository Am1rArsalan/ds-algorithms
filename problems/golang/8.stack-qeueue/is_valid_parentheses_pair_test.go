package main

import "testing"

func TestIsValidParenthesesPair(t *testing.T) {
	result := isValidParenthesesPair("{([])}")
	expectedResult := true

	if !result {
		t.Errorf("**1) Expected value to be (%v) but the value is"+
			"(%v)", expectedResult, result)
	}

	result = isValidParenthesesPair("{([]")
	expectedResult = false

	if result {
		t.Errorf("**2) Expected value to be (%v) but the value is"+
			"(%v)", expectedResult, result)
	}

	result = isValidParenthesesPair("{[(])}")
	expectedResult = false

	if result {
		t.Errorf("**3) Expected value to be (%v) but the value is"+
			"(%v)", expectedResult, result)
	}

	result = isValidParenthesesPair("{[]()}")
	expectedResult = true

	if !result {
		t.Errorf("**4) Expected value to be (%v) but the value is"+
			"(%v)", expectedResult, result)
	}
}
