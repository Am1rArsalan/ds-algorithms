package main

import "reflect"

func partition(arr []int, left, right int) int {
	pivotValue := arr[right]
	lesserIndex := left - 1
	swapFn := reflect.Swapper(arr)

	for j := left; j < right; j++ {
		if pivotValue > arr[j] {
			lesserIndex++
			swapFn(lesserIndex, j)
		}
	}

	swapFn(lesserIndex+1, right)

	return lesserIndex + 1
}

func quickSort(arr []int, left, right int) {
	if left >= right {
		return
	}

	pivot := partition(arr, left, right)
	quickSort(arr, left, pivot-1)
	quickSort(arr, pivot+1, right)
}

func returnKthLargestElement(arr []int, k int) int {
	quickSort(arr, 0, len(arr)-1)
	return arr[len(arr)-k]
}
