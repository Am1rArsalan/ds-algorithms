package main

// Time Complexity: O(NLogN).
// Auxiliary Space: O(N).
func InversionCount(a []int) int {
	cr := 0
	if len(a) <= 1 {
		return cr 
	}
	pivot := a[len(a)/2]
	var less, equal, greater []int
	for _, value := range a {
		switch {
		case value < pivot:
			less = append(less, value)
		case value == pivot:
			equal = append(equal, value)
		case value > pivot:
			greater = append(greater, value)
		}
	}

	copy(a, append(append(less, equal...), greater...))

	return InversionCount(less) + InversionCount(greater)
}
