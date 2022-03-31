package main

import (
	"math"
	"regexp"
	"strings"
)

func cleanString(text string) string {
	validateNonCharacters := regexp.MustCompile(`[^a-zA-Z\d]`)
	return strings.ToLower(validateNonCharacters.ReplaceAllString(text, ""))
}

func checkPalindrome(text string) bool {
	text = cleanString(text)
	isPalindrome := true

	left := 0
	right := len(text) - 1

	for left <= right {
		if text[left] != text[right] {
			isPalindrome = false
			break
		}

		left++
		right--
	}

	return isPalindrome
}

func checkPalindrome2(text string) bool {
	text = cleanString(text)
	isPalindrome := true

	right := int(math.Floor(float64(len(text) / 2)))
	left := right

	if len(text)%2 == 0 {
		left = left - 1
	}

	for left >= 0 && right < len(text) {
		if text[left] != text[right] {
			isPalindrome = false
			break
		}

		right++
		left--
	}

	return isPalindrome
}

func checkPalindrome3(text string) bool {
	text = cleanString(text)
	isPalindrome := true

	right := int(math.Floor(float64(len(text) / 2)))
	left := right
	if len(text)%2 == 0 {
		left = left - 1
	}

	leftPart := text[:left+1]
	rightPart := text[right:]

	for i := range leftPart {
		leftChar := leftPart[i]
		rightChar := rightPart[len(rightPart)-1-i]
		if leftChar != rightChar {
			isPalindrome = false
			break
		}
	}

	return isPalindrome
}
