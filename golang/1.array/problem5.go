package main

func validateSubsequences(arr, subArr []int) bool {
    // subArrayIndex
	SI := 0

	for i := 0; i < len(arr); i++ {

		if arr[i] == subArr[SI] {
			SI += 1
		}
	}

	return SI == len(subArr)
}
