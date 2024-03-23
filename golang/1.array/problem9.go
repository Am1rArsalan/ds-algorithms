package main

import "sort"


func ClassPhotos(r, b []int) bool {
	// can take photo
	ctp := true

	sort.Ints(r)
	sort.Ints(b)
	hr := 'b'

	if len(r) != len(b) {
		return ctp
	}

	LI := len(r) - 1

	if r[LI] > b[LI] {
		hr = 'r'
	}

	for i := LI; i >= 0; i -= 1 {
		if hr == 'r' && r[i] < b[i] {
			ctp = false
		} else if hr == 'b' && r[i] > b[i] {
			ctp = false
		}
	}

	return ctp
}
