package main

func findMaxTrappingWater(arr []int) int {

	// max left for every element
	ml := maxLeft(arr)

	// max right
	mr := maxRight(arr)

	res := 0

	for i := 0; i < len(arr); i++ {
		mrv := mr[i]
		mlv := ml[i]

		// minimum height of  max left and max right
		minH := min(mrv, mlv)
		h := minH - arr[i]
		if h > 0 {
			res += h
		}

	}

	return res
}

func maxLeft(arr []int) []int {
	if len(arr) == 0 {
		return []int{}
	}

	res := make([]int, len(arr))

	res[0] = arr[0]

	for i := 1; i < len(arr); i++ {
		res[i] = max(res[i-1], arr[i])
	}

	return res
}

func maxRight(arr []int) []int {
	if len(arr) == 0 {
		return []int{}
	}

	res := make([]int, len(arr))

	res[len(arr)-1] = arr[len(arr)-1]

	for i := len(arr) - 2; i >= 0; i-- {
		res[i] = max(res[i+1], arr[i])
	}

	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}

	return b
}
