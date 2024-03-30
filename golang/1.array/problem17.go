package main

func RearrangeArrayAlternativelyWithoutExtraSpace(a []int) []int {

	E := len(a) - 1
	S := 0
	ME := a[E] + 1

	// encoding
	for i := 0; i < len(a); i++ {
		if i%2 == 0 && E >= 0 {
			// even => max
			a[i] = ((a[E] % ME) * ME) + a[i]
			E--
		} else if S < len(a) {
			// odd => min
			a[i] = ((a[S] % ME) * ME) + a[i]
			S++
		}
	}

	for i := 0; i < len(a); i++ {
		a[i] = a[i] / ME
	}

	return a
}
