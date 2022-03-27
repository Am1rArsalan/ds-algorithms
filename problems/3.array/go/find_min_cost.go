package main

import "math"

/// bottom up approach
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

/// top down approach
func findMinCost(costs []int) int {
	n := len(costs)
	memoizedCosts := make(map[int]float64)
	minimum := math.Min(findMin(costs, n-1, memoizedCosts), findMin(costs, n-2, memoizedCosts))
	return int(minimum)
}

func findMin(costs []int, idx int, memoizedCosts map[int]float64) float64 {
	if idx < 0 {
		return 0
	}

	if idx == 0 || idx == 1 {
		return float64(costs[idx])
	}

	if val, ok := memoizedCosts[idx]; ok {
		return val
	}

	min := float64(costs[idx]) + math.Min(findMin(costs, idx-1, memoizedCosts), findMin(costs, idx-2, memoizedCosts))
	memoizedCosts[idx] = min

	return min
}
