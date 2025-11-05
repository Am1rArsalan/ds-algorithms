package main

import "math"

func minTimeToVisitAllPoints(points [][]int) (m int) {
	for i := 0; i < len(points); i++ {
		if i+1 >= len(points) {
			break
		}
		c := points[i]
		n := points[i+1]

		cx := c[0]
		cy := c[1]

		nx := n[0]
		ny := n[1]

		dx := math.Abs(float64(nx - cx))
		dy := math.Abs(float64(ny - cy))

		minD := math.Min(dx, dy)
		if minD > 0 {
			m += int(minD)
		}
		m += int(math.Abs(dy - dx))
	}

	return m
}

func minTimeToVisitAllPoints2(p [][]int) (m int) {
	x1 := p[0][0]
	y1 := p[0][1]
	p = p[1:]
	for len(p) > 0 {
		x2 := p[0][0]
		y2 := p[0][1]
		p = p[1:]

		m += int(math.Max(math.Abs(float64(x2-x1)), math.Abs(float64(y2-y1))))

		x1 = x2
		y1 = y2
	}

	return m
}
