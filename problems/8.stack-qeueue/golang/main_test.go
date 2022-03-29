package main

import (
	"fmt"
	"testing"
)

func TestIsValidParenthesesPair(t *testing.T) {
	result := isValidParenthesesPair("{([])}")
	expectedResult := true
	fmt.Print("we are here")

	if !result {
		t.Errorf("Expected Length value to be (%v) but the value is"+
			"(%v)", expectedResult, result)
	}
}

//assert.equal(isValid(), true);
//assert.equal(isValid("{([]"), false);
//assert.equal(isValid("{[(])}"), false);
//assert.equal(isValid("{[]()}"), false);
