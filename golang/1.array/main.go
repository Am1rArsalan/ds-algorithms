package main

import "fmt"

func main() {
	fmt.Println("hello world")
}

func findSumTargetIndexes(arr []int, target int) []int {
	numbersMap := make(map[int]int)
	firstIndex := -1
	secondIndex := -1
	if len(arr) == 0 {
		return nil
	}

	if len(arr) == 1 {
		if arr[0] == target {
			return []int{0}
		}
		return nil
	}

	for i := 0; i < len(arr); i++ {
		element := arr[i]
		if foundedIndex, ok := numbersMap[target-element]; ok {
			firstIndex = foundedIndex
			secondIndex = i
			break
		} else {
			numbersMap[element] = i
		}
	}

	if firstIndex == -1 || secondIndex == -1 {
		return nil
	}

	return []int{firstIndex, secondIndex}
}
