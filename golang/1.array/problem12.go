package main

import (
	"sort"
)

func CountTriplets(ar []int) int {
	sort.Ints(ar)
	cr := 0

	for C := 2; C < len(ar); C++ {
		A := 0
		B := C - 1
		c := ar[C]

		for A < B {
			a := ar[A]
			b := ar[B]

			if a+b < c {
				A++
			} else if a+b == c {
				cr++
				A++
				B--
			} else {
				B--
			}
		}
	}

	return cr
}












