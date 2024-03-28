package main

func nextGap(gap int) int {
	if gap <= 1 {
		return 0
	}
	return ((gap * 10) + 3) / 13
}

func MergeWithoutExtraSpace(a, b []int) ([]int, []int) {
	la, lb := len(a), len(b)
	g := nextGap(la + lb)

	for g > 0 {
		// a
		for A := 0; A+g < la; A++ {
			if a[A] > a[A+g] {
				a[A], a[A+g] = a[A+g], a[A]
			}
		}
		// cross a and b
		// starting point on B
		SB := g - la
		if SB < 0 {
			SB = 0
		}
		A := 0

		for B := SB; B < lb; B++ {
			A = -g + la + B

			if A >= 0 && A < la && a[A] > b[B] {
				a[A], b[B] = b[B], a[A]
			}
		}

		// b
		for B := 0; B+g < lb; B++ {
			if b[B] > b[B+g] {
				b[B], b[B+g] = b[B+g], b[B]
			}
		}

		g = nextGap(g)
	}

	return a, b
}
