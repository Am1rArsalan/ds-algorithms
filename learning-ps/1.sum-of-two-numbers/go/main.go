package main

import (
	"fmt"
	"math"
)

// problem number one .
//give an array of integers and return the indeces of the
//two numbers that add up to the given target
func main() {
	fmt.Println("doing problem 1 in golang")
	fmt.Println(findNumbers([]int{1, 2, 3, 4, 6, 9}, 11))
	fmt.Println(findNumbers([]int{1, 2, 3, 4, 5}, 25))
	fmt.Println(findNumbers([]int{1, 6}, 7))
	fmt.Println(findNumbers([]int{1, 6}, 11))
	fmt.Println(findNumbers([]int{5}, 5))
	fmt.Println(findNumbers([]int{5}, 5))
	fmt.Println("findNumberssolution 2 ....")
	fmt.Println(findNumbers2([]int{1, 2, 3, 4, 6, 9}, 11))
	fmt.Println(findNumbers2([]int{1, 2, 3, 4, 5}, 25))
	fmt.Println(findNumbers2([]int{1, 6}, 7))
	fmt.Println(findNumbers2([]int{1, 6}, 11))
	fmt.Println(findNumbers2([]int{5}, 5))
	fmt.Println(findNumbers2([]int{5}, 5))

	fmt.Println("findNumbersAndGetValues ....")
	fmt.Println(findNumbersForThreeItems([]int{1, 2, 3, 4, 6, 9}, 11))

	//////              this is not working well

	fmt.Println("findNumbersAndGetValues2 ....")
	fmt.Println(findNumbersForThreeItems2([]int{1, 2, 3, 4, 6, 9}, 11))
	fmt.Println(findNumbersForThreeItems2([]int{4, 1, 8, 6, 7}, 16))
	fmt.Println(findNumbersForThreeItems2([]int{4, 3, 7, 6, 9}, 18))
	fmt.Println(findNumbersForThreeItems2([]int{2, 3, 4, 6, 9}, 11))

	//////// this is not work well
	fmt.Println("***** findNumbersAndGetValues3 *** ....")
	fmt.Println(findNumbersForThreeItems3([]int{1, 2, 3, 4, 6, 9}, 11))
	fmt.Println(findNumbersForThreeItems3([]int{4, 1, 8, 6, 7}, 16))
	fmt.Println(findNumbersForThreeItems3([]int{4, 3, 7, 6, 9}, 18))
	fmt.Println(findNumbersForThreeItems3([]int{2, 3, 4, 6, 9}, 11))

}

func findNumbersForThreeItems3(nums []int, target int) (int, int, int) {
	diffMap := map[int][]int{}
	for i := 0; i < int(math.Floor(float64(len(nums)/2))); i++ {
		current, currentFound := diffMap[nums[i]]
		if currentFound {
			return nums[current[0]], nums[current[1]], nums[i]
		} else {
			tailPointer := len(nums) - 1 - i
			diff := target - nums[i] - nums[tailPointer]
			diffMap[diff] = []int{i, tailPointer}
		}
	}

	return -1, -1, -1
}

func findNumbersForThreeItems2(nums []int, target int) (int, int, int) {
	diffMap := map[int][]int{}
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			current, currentFound := diffMap[nums[j]]
			if currentFound {
				return nums[j], nums[current[0]], nums[current[1]]
			} else {
				diff := target - nums[i] - nums[j]
				diffMap[diff] = []int{i, j}
			}
		}
	}
	return -1, -1, -1
}

func findNumbersForThreeItems(nums []int, target int) (int, int, int) {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			diff := target - nums[i] - nums[j]
			for k := j + 1; k < len(nums); k++ {
				if diff == nums[k] {
					return nums[k], nums[j], nums[i]
				}
			}
		}
	}
	return -1, -1, -1
}

/// map 1:2
/// set 1 2 3 1 2 3
/// 1 2 3 4 6 9

func findNumbersAndGetValues(numbers []int, target int) (int, int) {
	diffMap := map[int]int{}

	for i := 0; i < len(numbers); i++ {
		current, currentFound := diffMap[numbers[i]]
		if currentFound {
			return numbers[current], numbers[i]
		} else {
			diff := target - numbers[i]
			diffMap[diff] = i
		}
	}

	return -1, -1
}

func findNumbers2(numbers []int, target int) (int, int) {
	diffsMap := map[int]int{}
	for i := 0; i < len(numbers); i++ {
		current, currentFound := diffsMap[numbers[i]]
		if currentFound {
			return i, current
		} else {
			diff := target - numbers[i]
			diffsMap[diff] = i
		}
	}
	return -1, -1
}

func findNumbers(numbers []int, target int) (int, int) {
	for i := 0; i < len(numbers); i++ {
		diff := target - numbers[i]
		for j := 0; j < len(numbers); j++ {
			if numbers[j] == diff {
				return j, i
			}
		}
	}
	return -1, -1
}
