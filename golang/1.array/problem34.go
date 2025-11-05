package main

func FindDisappearedNumbers(nums []int) []int {
	mn := []int{}
	s := make(map[int]int)
	n := len(nums)

	for i, v := range nums {
		s[v] = i
	}

	for i := 1; i <= n; i++ {
		_, e := s[i]
		if !e {
			mn = append(mn, i)
		}
	}

	return mn
}
