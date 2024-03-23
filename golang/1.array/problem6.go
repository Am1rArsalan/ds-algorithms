package main

import "math"

func SquaredStoredArray(a []int) []int {
	S := []int{}

	for i := 0; i < len(a); i++ {
		S[i] = 0
	}

	R := len(a) - 1
	C := R
	L := 0

	for L < R && C >= 0 {

		if math.Abs(float64(a[L])) > math.Abs(float64(a[R])) {
			S[C] = int(math.Pow(float64(a[L]), 2))
			L++
		} else {
			S[C] = int(math.Pow(float64(a[R]), 2))
			R--
		}

		C--

	}

	return S
}
