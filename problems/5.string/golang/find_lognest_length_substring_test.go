package main

import (
	"testing"
)

func TestFindLengthLongestSubstring(t *testing.T) {
	expectedResult := 3
	result := findLengthOfLongestSubstring("abccabb")

	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}
	expectedResult = 4
	result = findLengthOfLongestSubstring("abcbdaac")

	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}

}

func TestFindLengthLongestSubstring2(t *testing.T) {
	expectedResult := 3
	result := findLengthOfLongestSubstring2("abccabb")

	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}
	expectedResult = 4
	result = findLengthOfLongestSubstring2("abcbdaac")

	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}
}
