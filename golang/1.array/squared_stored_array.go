package main

import (
	"math"
)

func squaredStoredArray(arr []int) []int {
	result := []int{}
	for i := 0; i < len(arr); i++ {
		result = append(result, 0)
	}

	left := 0
	right := len(arr) - 1
	current := len(arr) - 1

	for left <= right && current >= 0 {
		if math.Abs(float64(arr[left])) >= math.Abs(float64(arr[right])) {
			result[current] = int(math.Pow(float64(arr[left]), 2))
			left = left + 1
		} else {
			result[current] = int(math.Pow(float64(arr[right]), 2))
			right = right - 1
		}

		current = current - 1
	}

	return result
}
