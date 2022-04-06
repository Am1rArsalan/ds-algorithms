package main

import (
	"math"
)

func findMinCost(costs []int) int {
	n := len(costs)
	memoizedCosts := make(map[int]int)
	memoizedCosts[0] = costs[0]
	memoizedCosts[1] = costs[1]
	result := int(math.Min(float64(findMin(costs, n-1, memoizedCosts)), float64(findMin(costs, n-2, memoizedCosts))))
	return result
}

func findMin(costs []int, n int, memoizedCosts map[int]int) int {
	if n < 0 {
		return 0
	}
	if n == 0 || n == 1 {
		return memoizedCosts[n]
	}

	if val, ok := memoizedCosts[n]; ok {
		return val
	}

	minimumOfStep := costs[n] + int(math.Min(float64(findMin(costs, n-1, memoizedCosts)), float64(findMin(costs, n-2, memoizedCosts))))
	memoizedCosts[n] = minimumOfStep

	return memoizedCosts[n]
}

func findMinCost2(costs []int) int {
	n := len(costs)
	memoizedCosts := make(map[int]int)
	memoizedCosts[0] = costs[0]
	memoizedCosts[1] = costs[1]

	for i := 2; i < n; i++ {
		memoizedCosts[i] = int(math.Min(float64(memoizedCosts[i-1]), float64(memoizedCosts[i-2])))
	}

	return int(math.Min(float64(memoizedCosts[n-1]), float64(memoizedCosts[n-2])))
}
