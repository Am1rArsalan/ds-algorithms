package islands

var directions = [][]int{
	{-1, 0},
	{0, 1},
	{1, 0},
	{0, -1},
}

func dfs(matrix *[][]int, row, col int) {
	if row >= len(*matrix) && row < 0 && col >= len((*matrix)[0]) && col < 0 {
		return
	}

	for _, direction := range directions {
		tempRow := row + direction[0]
		tempCol := col + direction[1]
		if tempRow < len(*matrix) && tempRow >= 0 && tempCol < len((*matrix)[0]) && tempCol >= 0 {
			if (*matrix)[tempRow][tempCol] == 1 {
				(*matrix)[tempRow][tempCol] = 0
				dfs(matrix, tempRow, tempCol)
			}
		}
	}

}

func countIslandsDfs(matrix [][]int) int {
	total := 0
	seen := [][]bool{}

	for i := 0; i < len(matrix); i++ {
		seen = append(seen, []bool{})
		for j := 0; j < len(matrix[i]); j++ {
			seen[i] = append(seen[i], false)
		}
	}

	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == 1 {
				total += 1
				dfs(&matrix, i, j)
			}
		}
	}

	return total
}

/// bfs
func bfs(matrix *[][]int, initialRow, initialCol int) {
	queue := [][]int{{initialRow, initialCol}}

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		row := current[0]
		col := current[1]

		for _, direction := range directions {
			tempRow := row + direction[0]
			tempCol := col + direction[1]
			if tempRow < len(*matrix) && tempRow >= 0 && tempCol < len((*matrix)[0]) && tempCol >= 0 {
				if (*matrix)[tempRow][tempCol] == 1 {
					(*matrix)[tempRow][tempCol] = 0
					queue = append(queue, []int{tempRow, tempCol})
				}
			}
		}
	}
}

func countIslandsBfs(matrix [][]int) int {
	total := 0
	seen := [][]bool{}

	for i := 0; i < len(matrix); i++ {
		seen = append(seen, []bool{})
		for j := 0; j < len(matrix[i]); j++ {
			seen[i] = append(seen[i], false)
		}
	}

	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == 1 {
				total += 1
				bfs(&matrix, i, j)
			}
		}
	}

	return total
}
