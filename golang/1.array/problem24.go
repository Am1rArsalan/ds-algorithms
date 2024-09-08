package main

func ReverseInGroups(arr []int, k int) []int {
	n := len(arr)
	for start := 0; start < n; start += k {
		end := start + k - 1
		if end >= n {
			end = n - 1
		}

		// Reverse elements in the current group
		for i, j := start, end; i < j; i, j = i+1, j-1 {
			arr[i], arr[j] = arr[j], arr[i]
		}
	}

	return arr
}
