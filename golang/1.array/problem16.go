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

const GAP_BASE = 3

func nextGap2(g int) int {
	if g <= 1 {
		return 0
	}
	return ((g*10)+GAP_BASE)/10 + GAP_BASE
}

func MergeWithoutExtraSpace2(a, b []int) ([]int, []int) {
	la, lb := len(a), len(b)

	gap := nextGap2(la + lb)

	for gap > 0 {
		// walk through a
		for A := 0; A < la+lb; A += gap {
			if a[A] > a[A+gap] {
				a[A], a[A+gap] = a[A+gap], a[A]
			}
		}

		SB := gap - la
		if SB < 0 {
			SB = 0
		}
		A := 0

		// walk through a and b
		for B := SB; B < la+lb; B += gap {
			A = -gap + la + B

			if A >= 0 && A < la && a[A] > b[B] {
				// we will swap this two element from both of these arrays :)
				a[A], b[B] = b[B], a[A]
			}
		}

		// walk through b
		for B := 0; B < la+lb; B += gap {
			if a[B] > a[B+gap] {
				a[B], a[B+gap] = a[B+gap], a[B]
			}
		}

		gap = nextGap2(gap)
	}

	// walk through b

	return a, b
}
