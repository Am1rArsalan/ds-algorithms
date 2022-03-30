package main

import "math"

func findLengthOfLongestSubstring(str string) int {
	if len(str) <= 1 {
		return len(str)
	}

	maxLength := 0

	for left := 0; left < len(str); left++ {
		seenChars := make(map[string]bool)

		for right := left; right < len(str); right++ {
			if _, ok := seenChars[string(str[right])]; ok {
				break
			} else {
				seenChars[string(str[right])] = true
				maxLength = int(math.Max(float64(maxLength), float64(right-left+1)))
			}
		}
	}

	return maxLength
}

func findLengthOfLongestSubstring2(str string) int {
	if len(str) <= 1 {
		return len(str)
	}
	maxLength := 0

	left := 0
	right := 0
	seenChars := make(map[string]int)

	for right < len(str) {
		if seenIndex, ok := seenChars[string(str[right])]; ok && seenIndex >= left {
			left = seenIndex + 1
		}

		seenChars[string(str[right])] = right
		maxLength = int(math.Max(float64(maxLength), float64(right-left+1)))
		right++
	}

	return maxLength

}
