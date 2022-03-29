package main

import (
	"fmt"
)

func main() {
	fmt.Println("working on stack and queue data structure")
}

func isValidParenthesesPair(str string) bool {
	stack := []string{}
	parenthesesMap := make(map[string]string)
	parenthesesMap["("] = ")"
	parenthesesMap["{"] = "}"
	parenthesesMap["["] = "]"
	isValid := false

	for _, char := range str {
		if _, ok := parenthesesMap[string(char)]; ok {
			stack = append(stack, string(char))
		} else {
			if len(stack) > 0 {
				if parenthesesMap[stack[len(stack)-1]] == string(char) {
					stack = stack[:len(stack)-1]
				} else {
					isValid = false
					break
				}

			} else {
				isValid = false
				break
			}
		}
	}

	if isValid && len(stack) > 0 {
		isValid = false
	}

	return isValid
}
