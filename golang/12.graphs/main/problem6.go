package main

import (
	"fmt"
)

const max = 7

func Problem6() {
	var m int
	fmt.Scan(&m)
	var adj [max][max]bool

	for i := 0; i < m; i++ {
		var v, u int

		fmt.Scan(&v, &u)
		v--
		u--

		adj[v][u] = true
		adj[u][v] = true
	}

	win := false

	n := 5
outerLoop:
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			for k := 0; k < n; k++ {
				if adj[i][j] == true && adj[i][k] == true && adj[j][k] == true && i != j && j != k && i != k {
					win = true
					break outerLoop
				}
			}
		}

	}

secondOuterLoop:
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			for k := 0; k < n; k++ {
				if adj[i][j] == false && adj[i][k] == false && adj[j][k] == false && i != j && j != k && k != i {
					win = true
					break secondOuterLoop
				}
			}

		}
	}

	if win {
		fmt.Println("WIN")
	} else {
		fmt.Println("FAIL")
	}
}
