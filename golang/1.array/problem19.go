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
				// i < j  a[i] > a[j]
				res = append(res, r[j])
				j++
				// because it's sorted then all the elements on the
				// left array are greater that right ones.
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

func MergeSort(a []int) []int {
	if len(a) <= 1 {
		return a
	}

	m := len(a) / 2

	l := MergeSort(a[m:])
	r := MergeSort(a[:m])

	return merge2(l, r)
}

func merge2(l, r []int) []int {
	res := make([]int, 0, len(l)+len(r))
	li, ri := 0, 0

	for li < len(l) || ri < len(r) {
		if li < len(l) && ri < len(r) {
			if l[li] < r[ri] {
				res = append(res, l[li])
				li++
			} else {
				res = append(res, r[ri])
				ri++
			}
		} else if li < len(l) {
			res = append(res, l[li])
			li++
		} else if ri < len(r) {
			res = append(res, r[ri])
			ri++
		}
	}

	return res
}
