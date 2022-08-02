package main

import "sort"

func findNonConstructibleChange(arr []int) int {
	sort.Ints(arr)
	change := 0
	nonConstructibleChange := false

	for _, value := range arr {
		if change+1 < value {
			nonConstructibleChange = true
			break
		}

		change += value
	}

	if nonConstructibleChange {
		change = change + 1
	}

	return change
}
