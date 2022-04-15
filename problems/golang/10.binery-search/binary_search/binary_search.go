package binary_search

import "math"

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
