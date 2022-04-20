package matrix_bfs

var directions = [][]int{
	{-1, 0},
	{0, +1},
	{+1, 0},
	{0, -1},
}

func BfsTraverseMatrix(matrix [4][5]int) []int {
	queue := [][]int{{0, 0}}
	seen := [4][5]bool{}
	result := []int{}

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		row := current[0]
		col := current[1]

		if !seen[row][col] {
			result = append(result, matrix[row][col])
			seen[row][col] = true

			for _, val := range directions {
				tempRow := val[0] + row
				tempCol := val[1] + col

				if tempRow < len(matrix) && tempRow >= 0 && tempCol < 5 && tempCol >= 0 {
					if !seen[tempRow][tempCol] {
						queue = append(queue, []int{tempRow, tempCol})
					}
				}
			}
		}
	}

	return result
}
