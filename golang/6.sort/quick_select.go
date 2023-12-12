package main

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


