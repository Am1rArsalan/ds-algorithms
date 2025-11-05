package main

import "fmt"

func maxProfit(p []int) (mp int) {
	l, r := 0, 1

	for r != len(p) {
		if p[r] > p[l] {
			profit := p[r] - p[l]
			if profit > mp {
				mp = profit
			}
		} else {
			l = r
		}
		r++
	}

	return mp
}

func main() {
	fmt.Print(maxProfit([]int{7, 1, 5, 3, 6, 4}))
}
