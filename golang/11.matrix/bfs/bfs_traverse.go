package matrix_bfs

var directions = [][]int{
	{-1, 0},
	{0, +1},
	{+1, 0},
	{0, -1},
}

func BfsTraverseMatrix(matrix [][]int) []int {
	queue := [][]int{{0, 0}}
	seen := [][]bool{}
	result := []int{}

	for i := 0; i < len(matrix); i++ {
		seen = append(seen, []bool{})
		for j := 0; j < len(matrix[i]); j++ {
			seen[i] = append(seen[i], false)
		}
	}

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
