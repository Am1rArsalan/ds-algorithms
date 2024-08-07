package main

import "math"

func findTrappedArea(arr []int) int {
	total := 0
	for current := 0; current < len(arr); current++ {
		maxRight := 0
		maxLeft := 0
		L := current
		R := current

		for R < len(arr) {
			if arr[R] > maxRight {
				maxRight = arr[R]
			}
			R++
		}

		for L >= 0 {
			if arr[L] > maxLeft {
				maxLeft = arr[L]
			}
			L--
		}

		currentTrappedWater := int(math.Min(float64(maxLeft), float64(maxRight))) - arr[current]

		if currentTrappedWater > 0 {
			total += int(currentTrappedWater)
		}

	}

	return total
}

func FindTrappedArea(a []int) int {
	T := 0

	for I, V := range a {

		MR := 0
		R := I

		for R < len(a) {
			if a[R] > MR {
				MR = a[R]
			}
			R++
		}

		ML := 0
		L := I
		for L >= 0 {
			if a[L] > ML {
				ML = a[L]
			}
			L--
		}

		// minimum height
		MH := int(math.Min(float64(MR), float64(ML)))

		// current trapped
		CT := MH - V

		if CT > 0 {
			T += CT
		}

	}

	return T
}

func Problem3(a []int) int {
	t := 0

	for ci, c := range a {
		mr := 0
		r := ci

		for r < len(a) {
			if a[r] > mr {
				mr = a[r]
			}
			r++
		}

		ml := 0
		l := ci
		for l >= 0 {
			if a[l] > ml {
				ml = a[l]
			}
			l--
		}

		mh := int(math.Min(float64(ml), float64(mr)))

		ct := mh - c

		if ct > 0 {
			t += ct
		}
	}

	return t
}
