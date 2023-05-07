package main

import (
	"fmt"
	"github.com/AmirAhmadzadeh/problems/binary_search"
)

func FindDomainForGivenTarget(arr []int, target int) (int, int) {
	if len(arr) == 0 {
		return -1, -1
	}

	firstIndex := binary_search.BinarySearch(arr, target, 0, len(arr)-1)
	if firstIndex == -1 {
		return -1, -1
	}

	start := firstIndex
	end := firstIndex
	temp1 := -1
	temp2 := -1

	for start != -1 {
		temp1 = start
		start = binary_search.BinarySearch(arr, target, 0, start-1)
	}
	start = temp1

	for end != -1 {
		temp2 = end
		end = binary_search.BinarySearch(arr, target, end+1, len(arr)-1)
	}

	end = temp2
	return start, end
}

func main() {
	fmt.Println("main func in main package")
}
