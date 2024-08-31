package main

func FindLeaders2(arr []int) []int {
	res := []int{}

	rmx := make([]int, len(arr))

	// find right max element for each item
	for i := len(arr) - 1; i >= 0; i-- {
		if i == len(arr)-1 {
			rmx[i] = arr[i]
			continue
		}

		if i+1 < len(arr) {
			if arr[i] >= rmx[i+1] {
				rmx[i] = arr[i]
			} else {
				rmx[i] = rmx[i+1]
			}
		}
	}

	for c := 0; c < len(arr); c++ {
		if arr[c] >= rmx[c] {
			res = append(res, arr[c])
		}
	}

	return res
}

func FindLeaders(arr []int) []int {
	res := []int{}

	for c := 0; c < len(arr); c++ {
		isG := true
		for i := c + 1; i < len(arr); i++ {
			if arr[c] < arr[i] {
				isG = false
				break
			}
		}

		if isG {
			res = append(res, arr[c])
		}
	}

	return res
}
