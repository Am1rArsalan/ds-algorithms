package main

import (
	"fmt"
)

func main() {
	area := solution([]int{2, 2, 3, 4, 6, 8, 5})
	fmt.Println(area)

	area = solution([]int{1, 2, 3, 4, 6, 8, 5})
	fmt.Println(area)

	area = solution([]int{1, 2, 2})
	fmt.Println(area)

	area = solution([]int{1, 2, 3})
	fmt.Println(area)

	area = solution([]int{1, 2})
	fmt.Println(area)

	area = solution([]int{1})
	fmt.Println(area)
	area = solution([]int{7, 1, 2, 3, 9})
	fmt.Println(area)

	fmt.Println("solution2")
	area = solution2([]int{2, 2, 3, 4, 6, 8, 5})
	fmt.Println(area)

	area = solution2([]int{1, 2, 3, 4, 6, 8, 5})
	fmt.Println(area)

	area = solution2([]int{1, 2, 2})
	fmt.Println(area)

	area = solution2([]int{1, 2, 3})
	fmt.Println(area)

	area = solution2([]int{1, 2})
	fmt.Println(area)

	area = solution2([]int{1})
	fmt.Println(area)
	area = solution2([]int{7, 1, 2, 3, 9})
	fmt.Println(area)

}

func solution(entry []int) int {
	maxArea := 0
	//o(n^2)
	for i := 0; i < len(entry); i++ {
		for j := i + 1; j < len(entry); j++ {
			s := absInt(i-j) * min(entry[i], entry[j])
			if s > maxArea {
				maxArea = s
			}
		}
	}

	return maxArea
}

func solution2(entry []int) int {
	maxArea := 0
	i := 0
	j := len(entry) - 1

	//O(n)
	for i < j {
		s := absInt(i-j) * min(entry[i], entry[j])
		if s > maxArea {
			maxArea = s
		}

		if entry[i] <= entry[j] {
			i++
		} else {
			j--
		}
	}

	return maxArea
}

func min(n, m int) int {
	if n > m {
		return m
	}
	return n
}

func absInt(x int) int {
	return absDiffInt(x, 0)
}

func absDiffInt(x, y int) int {
	if x < y {
		return y - x
	}
	return x - y
}

func absDiffUint(x, y uint) uint {
	if x < y {
		return y - x
	}
	return x - y
}
