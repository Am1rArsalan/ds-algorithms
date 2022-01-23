package main

import (
	"fmt"
)

func main() {
	var line int
	fmt.Scanln(&line)
	fmt.Println(line)
	res := generateKhayam(int(line))
	printKhayam(res)
}

func generateKhayam(n int) [][]int {

	khayam := make([][]int, n)

	// initialize
	for i := 0; i < n; i++ {
		khayam[i] = make([]int, i+1)
	}

	for i := 0; i < n; i++ {
		for j := 0; j <= i; j++ {
			if j == 0 || i == 0 {
				khayam[i][j] = 1
			} else if j == i {
				khayam[i][j] = 1
			} else {
				khayam[i][j] = khayam[i-1][j-1] + khayam[i-1][j]
			}
		}
	}

	return khayam
}

func printKhayam(khayam [][]int) {
	for i := 0; i < len(khayam); i++ {
		fmt.Println(khayam[i])
	}
}
