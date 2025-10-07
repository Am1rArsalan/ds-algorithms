package main

import "fmt"

func maxProfit(p []int) (mp int) {
	a := 0
	b := len(p) - 1

	for a < b {
		v := p[b] - p[a]

		if v > mp {
			mp = v
		}

		if p[b] > p[a] {
			a++
		} else {
			b--
		}
	}

	return mp
}

func main() {
	fmt.Println(maxProfit([]int{7, 1, 5, 3, 6, 4}))
}

//  0 1 2 3 4 5
// [7,1,5,3,6,4]
//  a         b
//  -3    mp = 0
//   3    mp = 3
//   5    mp = 5
//   2    mp = 5
//   4    mp = 5
//       mp = 5
