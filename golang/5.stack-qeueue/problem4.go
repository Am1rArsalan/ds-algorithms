package main

import "log"

func FindNearestSmallerElementFromRight(a []int) []int {
	res := make([]int, len(a))
	stk := []int{}

	for i := len(a) - 1; i >= 0; i-- {
		for len(stk) > 0 && stk[len(stk)-1] >= a[i] {
			stk = stk[:len(stk)-1]
		}

		if len(stk) == 0 {
			res[i] = -1
		} else {
			res[i] = stk[len(stk)-1]
		}

		stk = append(stk, a[i])
	}

	return res
}

func FindNearestSmallerElementFromLeft(a []int) []int {
	res := make([]int, len(a))
	stk := []int{}

	for i := 0; i < len(a); i++ {
		for len(stk) > 0 && stk[len(stk)-1] >= a[i] {
			stk = stk[:len(stk)-1]
		}

		if len(stk) == 0 {
			res[i] = -1
		} else {
			res[i] = stk[len(stk)-1]
		}

		stk = append(stk, a[i])
	}

	return res
}
