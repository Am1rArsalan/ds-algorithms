package binary_search

import "math"

func BinarySearch(arr []int, target int, left, right int) int {
    index := -1; 

	for left < right {
		mid := int(math.Floor(float64(left)  + float64((right - left) / 2))); 
        v := arr[mid] ; 

		if v == target {
            index = mid ; 
            break ;
		} else if v > target {
			right = mid 
		} else {
			left = mid + 1
		}
	}

	return index;  
}



