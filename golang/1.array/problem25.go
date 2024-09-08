package main

func kthSmallest(arr []int, k int) int {
	return quickSelect(arr, 0, len(arr)-1, k-1)
}

func quickSelect(arr []int, l, r, k int) int {
	if l == r {
		return arr[l]
	}

	pi := partition(arr, l, r)

	if pi == k {
		return arr[k]
	} else if pi > k {
		return quickSelect(arr, l, pi-1, k)
	} else {
		return quickSelect(arr, pi+1, r, k)
	}

}

func partition(arr []int, l, r int) int {
	p := arr[r]

	i := l

	for j := l; j < r; j++ {
		if arr[j] <= p {
			arr[i], arr[j] = arr[j], arr[i]
			i++
		}
	}

	arr[i], arr[r] = arr[r], arr[i]

	return i
}
