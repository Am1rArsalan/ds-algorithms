package main

import (
	"math"
)

func FindMaxSubArraySum(a []int) int {
	mx := math.MinInt8
	cs := 0

	for _, v := range a {
		cs += v

		if cs > mx {
			mx = cs
		}

		if cs < 0 {
			cs = 0
		}
	}

	return mx
}
