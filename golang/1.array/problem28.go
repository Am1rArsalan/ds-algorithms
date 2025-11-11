package main

import (
	"sort"
)

// example: -1 2 -2 1 -1 2

// a + b + c = 0
func Problem28(arr []int) (res [][]int) {
	sort.Ints(arr)

	// arr: -2 -1 -1 1 2 2
	for i, _ := range arr {
		// one other optimization:
		if arr[i] > 0 {
			break
		}

		// b + c = -a
		if i > 0 && arr[i-1] == arr[i] {
			continue
		}

		res = append(res, getPairs(arr, i+1, -arr[i])...)
	}

	return res
}

func getPairs(arr []int, start, target int) (res [][]int) {
	left := start
	right := len(arr) - 1

	for left < right {
		sum := arr[left] + arr[right]
		if sum == target {
			res = append(res, []int{arr[left], arr[right], -target})
			left++

			for left > 0 && left < right && arr[left] == arr[left-1] {
				left++
			}
		} else if sum > target {
			right--
		} else {
			// sum < target
			left++
		}
	}

	return res
}
