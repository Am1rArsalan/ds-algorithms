package main

func validateSubsequences(arr, innerArr []int) bool {
	innerArrayIndex := 0

	for arrIndex := 0; arrIndex < len(arr); arrIndex++ {

		if arr[arrIndex] == innerArr[innerArrayIndex] {
			innerArrayIndex += 1
		}
	}

	return innerArrayIndex == len(innerArr)
}
