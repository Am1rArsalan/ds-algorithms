package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("hello world")
}

func BinarySearch(arr []int, target int, left, right int) int {
	for left <= right {
		mid := int(math.Floor(float64((left + right) / 2)))

		if arr[mid] == target {
			return mid
		} else if arr[mid] > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}

func FindDomainForGivenTarget(arr []int, target int) (int, int) {
	if len(arr) <= 0 {
		return -1, -1
	}

	firstIndex := BinarySearch(arr, target, 0, len(arr)-1)
	if firstIndex == -1 {
		return -1, -1
	}

	start := firstIndex
	end := firstIndex
	temp1 := firstIndex
	temp2 := firstIndex

	for start != -1 {
		temp1 = start
		start = BinarySearch(arr, target, 0, start-1)
	}
	start = temp1

	for end != -1 {
		temp2 = end
		end = BinarySearch(arr, target, end+1, len(arr)-1)
	}
	end = temp2

	return start, end
}
