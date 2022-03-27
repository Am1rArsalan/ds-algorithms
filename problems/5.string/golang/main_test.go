package main

import (
	"fmt"
	"testing"
)

func TestFindLengthLongestSubstring(t *testing.T) {
	expectedResult := 3
	result := findLengthOfLongestSubstring("abccabb")

	fmt.Println("what is the value", result)
	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}
	expectedResult = 4
	result = findLengthOfLongestSubstring("abcbdaac")

	fmt.Println("what is the value", result)
	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}

	expectedResult = 3
	result = findLengthOfLongestSubstring2("abccabb")

	fmt.Println("what is the value", result)
	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}
	expectedResult = 4
	result = findLengthOfLongestSubstring2("abcbdaac")

	fmt.Println("what is the value", result)
	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) is not same as"+
			"actual (%v)", result, expectedResult)
	}

}
