package main

import (
	"testing"
)

func TestIsValidHTMLTags(t *testing.T) {
	result := isValidHTMLTags("")
	expectedResult := false

	if result {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}
}
