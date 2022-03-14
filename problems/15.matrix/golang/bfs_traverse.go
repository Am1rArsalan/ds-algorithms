package main

var directions = [][]int{
	{-1, 0},
	{0, +1},
	{+1, 0},
	{0, -1},
}

func getInitialSeen(rowLength, colLength int) [][]bool {
	var seen [][]bool

	for i := 0; i < rowLength; i++ {
		for j := 0; j < colLength; j++ {
			seen[i][j] = false
		}
	}

	return seen
}

func BfsTraverseMatrix(matrix [][]int, initialRow, initialCol int, result []int) {
	//

	seen := getInitialSeen(len(matrix), len(matrix[0]))
	queue := [][]int{{initialRow, initialCol}}

	for len(queue) > 0 {
		coordinate := queue[0]
		queue = queue[1:]
		row := coordinate[0]
		col := coordinate[1]

		for i := 0; i < len(directions); i++ {
			direction := directions[i]
			tempRow := row + direction[0]
			tempCol := col + direction[1]

			////////////////////// we'
		}
	}

}
