package main

import "sort"

func FindNonConstructibleChange(arr []int) int {
	sort.Ints(arr) 
	ncc := false

	C := 0


	for _, V := range arr {
		if C+1 < V {
			ncc = true
			break 
		}

		C += V; 
	}

	if ncc { 
		C = C + 1 
	}

	return C
}
