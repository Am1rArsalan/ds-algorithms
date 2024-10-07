package main

import (
	"fmt"
	"math"
)

const maxn = 1e6 + 5000

type Pair struct {
	v int
	w int
}

func NewPair(v, w int) Pair {
	return Pair{
		v,
		w,
	}
}

func Problem7() {
	var n, m, k int
	var adj [maxn][]Pair
	var haveStorage [maxn]bool

	fmt.Scan(&n, &m, &k)

	for i := 0; i < m; i++ {
		var v, u, w int
		fmt.Scan(&v, &u, &w)
		v--
		u--

		adj[v] = append(adj[v], NewPair(u, w))
		adj[u] = append(adj[u], NewPair(v, w))
	}

	for i := 0; i < k; i++ {
		var v int
		fmt.Scan(&v)
		v--
		haveStorage[v] = true
	}
	min := math.MaxInt

	for i := 0; i < m; i++ {
		if !haveStorage[i] {
			pairs := adj[i]
			for _, pair := range pairs {
				if haveStorage[pair.v] && pair.w < min {
					min = pair.w
				}
			}
		}
	}

	if min != math.MaxInt {
		fmt.Println(min)
	} else {
		fmt.Println(-1)
	}
}

func main() {
	Problem7()
}
