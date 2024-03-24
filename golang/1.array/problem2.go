package main

import "math"

func findMaxArea(arr []int) int {
	maxArea := 0
	leftPointer := 0
	rightPointer := len(arr) - 1

	for rightPointer >= leftPointer {
		yMax := math.Min(float64(arr[leftPointer]), float64(arr[rightPointer]))
		xMax := math.Abs(float64(rightPointer - leftPointer))

		if yMax*xMax > float64(maxArea) {
			maxArea = int(yMax * xMax)
		}

		if arr[leftPointer] > arr[rightPointer] {
			rightPointer -= 1
		} else {
			leftPointer += 1
		}
	}

	return maxArea
}

func FindMaxArea(a []int) int {
	A := 0

	L := 0
	R := len(a) - 1

	for L < R {
		S := int(math.Min(float64(a[R]), float64(a[L]))) * (R - L)

		if S > A {
			A = S
		}

		if a[R] > a[L] {
			L++
		} else {
			R--
		}
	}

	return A
}
