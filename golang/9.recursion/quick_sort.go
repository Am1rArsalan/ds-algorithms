package main

func quickSort(arr []int, left, right int) { // o(2^N)
	if left >= right {
		return
	}

	partionIndex := partition(arr, left, right)

	quickSort(arr, left, partionIndex-1)
	quickSort(arr, partionIndex+1, right)
}
