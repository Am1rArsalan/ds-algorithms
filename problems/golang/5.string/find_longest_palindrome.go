package main

import (
	"math"
)

func checkPalindrome4(str string) bool {
	R := int(math.Floor(float64(len(str) / 2)))
	L := R
	if len(str)%2 == 0 {
		L = R - 1
	}
	isPalindrome := true

	for R < len(str) && L >= 0 {
		if str[R] != str[L] {
			isPalindrome = false
			break
		}
		R++
		L--
	}

	return isPalindrome
}

func longestPalindrome(str string) string {
	max := ""
	for i := 0; i < len(str); i++ {
		for j := i; j < len(str); j++ {
			if len(str[i:j+1]) > len(max) {
				if checkPalindrome(str[i : j+1]) {
					max = str[i : j+1]
				}
			}
		}
	}

	return max
}
