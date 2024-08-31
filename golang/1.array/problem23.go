package main

import "sort"

func MinimumPlatforms(n int, arr, dep []int) int {
	sort.Ints(arr)
	sort.Ints(dep)

	i, j := 1, 0
	p := 1  // platforms
	pn := 1 // platforms needed

	for i < n && j < n {
		if arr[i] <= dep[j] {
			p++
			i++
		} else {
			p--
			j++
		}

		if p > pn {
			pn = p
		}
	}

	return pn
}
