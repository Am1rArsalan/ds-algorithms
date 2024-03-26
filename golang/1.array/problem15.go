package main

func FindMissingNumber(a []int) int {
	n := len(a) + 1
	s := (n) * (n + 1) * 1 / 2

	sum := 0

	for _, v := range a {
		sum += v
	}

	return s - sum
}

func FindMissingNumberXOR(a []int) int {
	n := len(a) + 1

	xorF := 0

	for i := 1; i <= n; i++ {
		xorF ^= i
	}

	xorA := 0
	for _, v := range a {
		xorA ^= v
	}

	return xorF ^ xorA
}
