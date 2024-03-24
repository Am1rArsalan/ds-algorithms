package main

func FindIndexesOfSubArrayWithGivenSum(a []int, t, n int) (int, int) {
	S,E,CS := 0,0,0 

	for E < len(a) { 
		CS += a[E] 

		for CS > t && S < E { 
			CS -= a[S] 
			S++
		}
		if CS == t { 
			return S,E
		}

		E++
	}

	return -1,-1
}

// one based
func FindIndexesOfSubArrayWithGivenSum2(a []int, t, n int) []int {

	S, E, CS := 0, 0, 0

	for E < len(a) {
		CS += a[E]

		for CS > t && S < E {
			CS -= a[S]
			S++
		}

		if CS == t {
			return []int{S + 1, E + 1}
		}

		E++
	}
	return []int{-1, -1}
}
