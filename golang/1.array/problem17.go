package main

func RearrangeArrayAlternativelyWithoutExtraSpace(a []int) []int {
	t := len(a) - 1
	c := 0

	for i := 0; i+2 < len(a); i += 2 {
		a[i], a[t] = a[t], a[i]
		a[i+1], a[t+c] = a[t+c], a[i+1]

		c++
		t--
	}

	return a
}
