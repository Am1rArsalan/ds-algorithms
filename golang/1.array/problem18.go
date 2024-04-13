package main

import (
	"sort"
)

func CountPairs(X, Y []int, M, N int) int64 {
	var ans int64 = 0

	sort.Ints(Y) 

	for i := 0; i < M; i++ {
		switch X[i] {
		case 1:
			continue

		case 2:
			ans += int64(sort.SearchInts(Y, 2))     
			ans += int64(N - sort.SearchInts(Y, 5))

		default:
			ans += int64(N - sort.SearchInts(Y, X[i]+1))        
			ans += int64(sort.SearchInts(Y, 2) - sort.SearchInts(Y, 1)) 

			if X[i] == 3 {
				ans += int64(sort.SearchInts(Y, 3) - sort.SearchInts(Y, 2))
			}
		}
	}

	return ans
}
