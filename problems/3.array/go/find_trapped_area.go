package main

import "math"

func findTrappedArea(arr []int) int {
	total := 0
	for current := 0; current < len(arr); current++ {
		maxRight := 0
		maxLeft := 0
		L := current
		R := current

		for R < len(arr) {
			if arr[R] > maxRight {
				maxRight = arr[R]
			}
			R++
		}

		for L >= 0 {
			if arr[L] > maxLeft {
				maxLeft = arr[L]
			}
			L--
		}

		currentTrappedWater := int(math.Min(float64(maxLeft), float64(maxRight))) - arr[current]

		if currentTrappedWater > 0 {
			total += int(currentTrappedWater)
		}

	}

	return total
}
