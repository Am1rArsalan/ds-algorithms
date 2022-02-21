package main

import (
	"fmt"
	"math"
)

func binarySearch(arr []int, target int) int {
	left := 0
	right := len(arr) - 1

	for left <= right {
		mid := int(math.Floor(float64((left + right) / 2)))

		if arr[mid] == target {
			return mid
		} else if arr[mid] > target {
			right = mid - 1
		} else if arr[mid] < target {
			left = mid + 1
		}
	}

	return -1
}

func main() {
	fmt.Println("result of binary search is ", binarySearch([]int{1, 2, 3, 4, 5, 6}, 5))
}
