package matrix_dfs

var directions = [][]int{
	{-1, 0},
	{0, 1},
	{1, 0},
	{0, -1},
}

func dfs(matrix *[4][5]int, result *[]int, row int, col int, seen *[4][5]bool) {
	if row >= 4 || row < 0 || col >= 5 || col < 0 {
		return
	}

	if seen[row][col] {
		return
	}

	*result = append(*result, matrix[row][col])
	seen[row][col] = true

	for _, direction := range directions {
		tempRow := row + direction[0]
		tempCol := col + direction[1]
		dfs(matrix, result, tempRow, tempCol, seen)
	}
}

func DfsTraverseMatrix(matrix [4][5]int) []int {
	seen := [4][5]bool{}
	result := []int{}

	dfs(&matrix, &result, 0, 0, &seen)

	return result
}
