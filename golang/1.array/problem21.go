package main

// O(n)
func FindEquilibriumPoint2(arr []int) int {

	if len(arr) == 1 {
		return arr[0]
	}

	T := -1
	if len(arr) == 0 {
		return T
	}

	// cache sum of elements before each item
	prs := []int{} // prefix sum arr
	for i := 0; i < len(arr); i++ {
		v := arr[i]
		if len(prs) == 0 {
			prs = append(prs, v)
			continue
		}
		prs = append(prs, v+prs[len(prs)-1])
	}

	// cache sum of elements after each item
	pos := []int{} // postfix sum arr
	for i := len(arr) - 1; i >= 0; i-- {
		v := arr[i]
		if len(pos) == 0 {
			pos = append(pos, v)
			continue
		}
		pos = append(pos, v+pos[len(pos)-1])
	}

	for i := 0; i < len(arr); i++ {
		prsi := i                // sum left index
		posi := len(arr) - 1 - i // sum right index

		if prs[prsi] == pos[posi] {
			T = i
			break
		}
	}

	if T == -1 {
		return T
	}

	return T + 1
}

// O(n^2)
func FindEquilibriumPoint(arr []int) int {
	T := -1
	c := 0

	for c < len(arr) {
		SL := 0
		for i := 0; i < c; i++ {
			SL += arr[i]
		}

		SR := 0
		for i := len(arr) - 1; i > c; i-- {
			SR += arr[i]
		}

		if SL == SR {
			T = c
			break
		}

		c++
	}

	if T == -1 {
		return -1
	}

	return T + 1
}
