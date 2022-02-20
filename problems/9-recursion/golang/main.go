package main

import (
	"fmt"
	"reflect"
)

func partition(arr []int, left, right int) int {
	swap := reflect.Swapper(arr)
	pivot := arr[right]
	i := left - 1

	for j := left; j < right; j++ {
		if arr[j] < pivot {
			i = i + 1
			swap(i, j)
		}
	}

	swap(i+1, right)

	return i + 1
}

func quickSort(arr []int, left, right int) {
	if left < right {
		pivotIndex := partition(arr, left, right)

		quickSort(arr, left, pivotIndex-1)
		quickSort(arr, pivotIndex+1, right)
	}
}

func returnKthLargestElement(arr []int, k int) int {
	quickSort(arr, 0, len(arr)-1)
	return arr[len(arr)-k]
}

func main() {
	arr := []int{7, 1, 3, 5, 2, 6, 4}
	quickSort(arr, 0, len(arr)-1)
	fmt.Println("sorted array is ", arr)
}
