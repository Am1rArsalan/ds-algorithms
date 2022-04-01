package main

import "reflect"

func partition(arr []int, left, right int) int {
	pivot := arr[right]
	partitionIndex := left - 1
	swapFn := reflect.Swapper(arr)

	for i := left; i < right; i++ {
		if pivot > arr[i] {
			partitionIndex++
			swapFn(i, partitionIndex)
		}
	}

	swapFn(partitionIndex+1, right)
	return partitionIndex + 1
}
