package matrix_dfs

var directions = [][]int{
	{-1, 0},
	{0, 1},
	{1, 0},
	{0, -1},
}

func dfs(matrix *[][]int, result *[]int, row int, col int, seen *[][]bool) {
	if row >= len(*matrix) || row < 0 || col >= len((*matrix)[0]) || col < 0 {
		return
	}

	if (*seen)[row][col] {
		return
	}

	*result = append(*result, (*matrix)[row][col])
	(*seen)[row][col] = true

	for _, direction := range directions {
		tempRow := row + direction[0]
		tempCol := col + direction[1]
		dfs(matrix, result, tempRow, tempCol, seen)
	}
}

func DfsTraverseMatrix(matrix [][]int) []int {
	seen := [][]bool{}
	result := []int{}

	for i := 0; i < len(matrix); i++ {
		seen = append(seen, []bool{})
		for j := 0; j < len(matrix[i]); j++ {
			seen[i] = append(seen[i], false)
		}
	}

	dfs(&matrix, &result, 0, 0, &seen)

	return result
}
