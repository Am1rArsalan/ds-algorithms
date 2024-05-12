package main

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

func Sort012(arr []int) []int {
	dutchSort(arr)
	return arr
}

// dutch national flag algorithm
func dutchSort(arr []int) {
	l, m, h := 0, 0, len(arr)-1

	for m <= h {
		switch arr[m] {
		case 0:
			// swap low and mid
			arr[l], arr[m] = arr[m], arr[l]
			// increase low and mid
			l++
			m++
			break
		case 1:
			// increase mid
			m++
			break
		case 2:
			// swap mid and high
			arr[m], arr[h] = arr[h], arr[m]
			// decrease high
			h--
			break
		}
	}
}
