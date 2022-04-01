package main

import "reflect"

func partition(arr []int, left, right int) int {
	pivotValue := arr[right]
	partionIndex := left - 1
	swapFn := reflect.Swapper(arr)

	for j := left; j < right; j++ {
		if pivotValue > arr[j] {
			partionIndex++
			swapFn(partionIndex, j)
		}
	}

	swapFn(partionIndex+1, right)

	return partionIndex + 1
}

func quickSort(arr []int, left, right int) { // o(2^N)
	if left >= right {
		return
	}

	partionIndex := partition(arr, left, right)

	quickSort(arr, left, partionIndex-1)
	quickSort(arr, partionIndex+1, right)
}

func quickSelect(arr []int, left, right, indexToFind int) int {
	if left >= right {
		return arr[indexToFind]
	}

	partitionIndex := partition(arr, left, right)
	if indexToFind == partitionIndex {
		return arr[partitionIndex]
	} else if indexToFind < partitionIndex {
		return quickSelect(arr, left, partitionIndex-1, indexToFind)
	} else {
		return quickSelect(arr, partitionIndex+1, right, indexToFind)
	}
}

func returnKthLargestElement(arr []int, k int) int {
	return quickSelect(arr, 0, len(arr)-1, len(arr)-k)
}
