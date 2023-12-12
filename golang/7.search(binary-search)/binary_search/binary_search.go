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


func BinarySearch2(arr []int, target int) int {
	index:= -1; 
    left := 0
    right := len(arr) - 1
    for left <= right {
        mid := left + (right-left)/2
        if arr[mid] == target {
			index = mid;
			break
        } else if arr[mid] < target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return index;
}



