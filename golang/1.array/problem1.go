package main

func find_sum_target_indexes(arr []int, target int) []int {
	cache := make(map[int]int)
	FI := -1
	SI := -1

	if len(arr) == 0 {
		return nil
	}

	if len(arr) == 1 {
		if arr[0] == target {
			return []int{0}
		}
	}

	for i := 0; i < len(arr); i++ {
		T := target - arr[i]

		if I, ok := cache[T]; ok {
			FI = i
			SI = I
			break
		} else {
			cache[arr[i]] = i
		}
	}

	if FI == -1 || SI == -1 {
		return nil
	}

	return []int{SI, FI}
}

func FindSumTargetIndexes(a []int, t int) (int, int) {
	C := make(map[int]int)

	for I, V := range a {
		T := t - V
		if J, ok := C[T]; ok {
			return I, J 
		} else {
			C[T] = I
		}
	}

	return -1,-1
}
