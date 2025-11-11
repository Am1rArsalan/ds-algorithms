package main

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
