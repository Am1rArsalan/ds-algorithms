package main

import (
	"log"
	"math"
)

func SquaredStoredArray(a []int) []int {
	s := make([]int, len(a))

	l := 0
	r := len(a) - 1
	ce := len(a) - 1
	for ce >= 0 {
		if math.Abs(float64(a[l])) >= math.Abs(float64(a[r])) {
			s[ce] = int(math.Pow(float64(a[l]), 2))
			l++
		} else {
			s[ce] = int(math.Pow(float64(a[r]), 2))
			r--
		}
		ce--
	}

	log.Printf("what is s: %+v", s)

	return s
}
