package main

func FindTheLargestRectangleArea(a []int) int {
	maxArea := -1
	stk := []int{}

	L := make([]int, len(a))
	// from left
	for i := 0; i < len(a); i++ {
		for len(stk) > 0 && a[stk[len(stk)-1]] >= a[i] {
			stk = stk[:len(stk)-1]
		}
		if len(stk) == 0 {
			L[i] = 0
		} else {
			L[i] = stk[len(stk)-1] + 1
		}

		stk = append(stk, i)
	}

	// empty the stack
	stk = []int{}

	R := make([]int, len(a))
	// from right
	for i := len(a) - 1; i >= 0; i-- {
		for len(stk) > 0 && a[stk[len(stk)-1]] >= a[i] {
			stk = stk[:len(stk)-1]
		}

		if len(stk) == 0 {
			R[i] = len(a) - 1
		} else {
			R[i] = stk[len(stk)-1] - 1
		}

		stk = append(stk, i)
	}

	for i := 0; i < len(a); i++ {
		maxArea = max(maxArea, a[i]*(R[i]-L[i]+1))
	}

	return maxArea
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
