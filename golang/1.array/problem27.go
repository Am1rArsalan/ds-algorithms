package main

import "math"

// NOTE: this is not the solution
// TODO: optimize this solution

func checkTriplet(arr []int) bool {
	res := false
	for i, vi := range arr {
		for j, vj := range arr {
			for k, vk := range arr {
				if pow2(vi) == pow2(vj)+pow2(vk) && i != j && j != k && i != k {
					res = true
					break
				}
			}
		}

	}

	return res
}

func pow2(n int) int {
	return int(math.Pow(float64(n), 2))
}
