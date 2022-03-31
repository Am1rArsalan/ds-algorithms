package main

func validateString(txt string) string {
	stack := []int{}

	for i := 0; i < len(txt); i++ {
		char := txt[i]

		if char == '(' {
			stack = append(stack, i)
			continue
		}

		if char == ')' && len(stack) == 0 {
			txt = txt[:i] + txt[i+1:]
			i -= 1
			continue
		}

		if char == ')' && len(stack) > 0 {
			stack = stack[:len(stack)-1]
		}
	}

	for i := 0; i < len(stack); i++ {
		removeIndex := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		i--
		txt = txt[:removeIndex] + txt[removeIndex+1:]
	}

	return txt
}
