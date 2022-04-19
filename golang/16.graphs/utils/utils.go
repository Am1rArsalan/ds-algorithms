package utils

func Max(slice []float64) float64 {
	max := slice[0]
	for _, value := range slice {
		if max < value {
			max = value
		}
	}
	return max
}

func MaxInt(array []int) int {
	var max int = array[0]

	for _, value := range array {
		if max < value {
			max = value
		}
	}

	return max
}
