package main

// Time Complexity: O(NLogN).
// Auxiliary Space: O(N).

func InversionCount(arr []int) int {
	_, c := mergeSort(arr)

	return c
}

func mergeSort(arr []int) ([]int, int) {
	if len(arr) <= 1 {
		return arr, 0
	}

	m := len(arr) / 2

	l, lc := mergeSort(arr[:m])
	r, rc := mergeSort(arr[m:])

	res, c := merge(l, r)

	return res, lc + rc + c
}

func merge(l, r []int) ([]int, int) {
	res := make([]int, 0, len(l)+len(r))
	c := 0

	i, j := 0, 0

	for i < len(l) || j < len(r) {

		if i < len(l) && j < len(r) {
			if l[i] > r[j] {
				res = append(res, r[j])
				j++
				c += len(l) - i
			} else {
				res = append(res, l[i])
				i++
			}
		} else if i < len(l) {
			res = append(res, l[i])
			i++
		} else if j < len(r) {
			res = append(res, r[j])
			j++
		}
	}

	return res, c
}

func MergeSort2(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	m := len(arr) / 2

	l := MergeSort2(arr[:m])
	r := MergeSort2(arr[m:])

	return merge2(l, r)
}

func merge2(l, r []int) []int {
	res := make([]int, 0, len(l)+len(r))
	li, ri := 0, 0

	for li < len(l) || ri < len(r) {
		if li < len(l) && ri < len(r) {
			if l[li] > r[ri] {
				res = append(res, r[ri])
				ri++
			} else {
				res = append(res, l[li])
				li++
			}
		} else if li < len(l) {
			res = append(res, l[li])
			li++
		} else {
			res = append(res, r[ri])
			ri++
		}
	}

	return res
}
