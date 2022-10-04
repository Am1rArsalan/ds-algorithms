package main

import "sort"

func FindMinimumWatingTime(q []int) int {
	sort.Ints(q)
	wt := 0

	for I, d := range q {
		ql := len(q) - I - 1
		wt += ql * d
	}

	return wt
}
