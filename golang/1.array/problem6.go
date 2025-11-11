package main

func SortedSquares(nums []int) []int {
	l := 0
	r := len(nums) - 1
	res := make([]int, len(nums))

	i := len(nums) - 1
	for l <= r && i >= 0 {
		R := nums[r] * nums[r]
		L := nums[l] * nums[l]
		if R >= L {
			res[i] = R
			r--
		} else {
			res[i] = L
			l++
		}
		i--
	}

	return res
}
