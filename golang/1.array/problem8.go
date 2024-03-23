package main

import "sort"



func FindMinimumWatingTime(q []int) int { 
	sort.Ints(q)
	wt := 0; 


	for I, D := range q { 
		ql := len(q) - 1 - I 
		wt += ql * D 
	}


	return wt
}
