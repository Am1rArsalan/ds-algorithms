//HARD ARRAY QUESTION
/// problem 3  :

////// Given An array of integers representing an elavation map
////// Where the Width of each bar is One ,
////// Return how much rain water can be trapped
//
//  i j
// 1 + 1 + 2 + 1 + 2 + 1 = 8

package main

import (
	"fmt"
)

func main() {
	res := solution([]int{0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2})
	fmt.Println("res is ? ", res)
}

func solution(entry []int) int {
	total := 0

	for i := 0; i < len(entry); i++ {

		maxRight := 0
		maxLeft := 0
		leftPointer := i
		rightPointer := i

		for leftPointer >= 0 {
			maxLeft = max(maxLeft, entry[leftPointer])
			leftPointer -= 1
		}

		for rightPointer < len(entry) {
			maxRight = max(maxRight, entry[rightPointer])
			rightPointer += 1
		}

		current := min(maxRight, maxLeft) - entry[i]

		if current > 0 {
			total += current
		}
	}

	return total
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}

func min(a, b int) int {
	if a > b {
		return b
	}

	return a
}

func abs(a int) int {
	if a > 0 {
		return a
	}

	return -1 * a
}
