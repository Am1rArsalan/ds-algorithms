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

func Problem5(a, ia []int) bool {
	si := 0
	for _, v := range a {
		if v == ia[si] {
			si++
		}
	}

	return si == len(ia)
}
