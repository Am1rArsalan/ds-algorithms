package main

import "math"

func findTrappedArea(arr []int) int {
	p1 := 0
	p2 := 1
	current := p1
	total := 0

	for p1 < p2 {
		if current == p2 {
			p1 += 1
			current = p1
			if p2 < len(arr) {
				p2 += 1
			}
		}

		if arr[p2] == 0 {
			if p2 < len(arr) {
				p2 += 1
				continue
			}
		}

		if p1 == p2 {
			break
		}

		yMax := math.Min(float64(arr[p1]), float64(arr[p2]))
		xMax := p2 - p1 - 1
		area := int(yMax) * xMax

		if area-arr[current] > 0 { // 0
			total += area - arr[current]
		}

		current += 1
	}

	return total
}
