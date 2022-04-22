package rottenoranges

import "math"

var directions = [][]int{
	{-1, 0},
	{0, 1},
	{1, 0},
	{0, -1},
}

func findRottenOrangesCoordinatesAndCountFreshOranges(matrix [][]int) ([][]int, int) {
	initialRow := int(math.Ceil(float64((len(matrix) - 1) / 2)))
	initialCol := int(math.Ceil(float64((len(matrix[0]) - 1) / 2)))

	queue := [][]int{{initialRow, initialCol}}
	seen := [][]bool{}

	for i := 0; i < len(matrix); i++ {
		seen = append(seen, []bool{})
		for j := 0; j < len(matrix[i]); j++ {
			seen[i] = append(seen[i], false)
		}
	}

	rottenOrangesCoordinates := [][]int{}
	refreshOrangesCount := 0

	if matrix[initialRow][initialCol] == 2 {
		rottenOrangesCoordinates = append(rottenOrangesCoordinates, []int{initialRow, initialCol})
	}
	seen[initialRow][initialCol] = true

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		row := current[0]
		col := current[1]

		if matrix[row][col] == 2 {
			rottenOrangesCoordinates = append(rottenOrangesCoordinates, []int{row, col})
		} else if matrix[row][col] == 1 {
			refreshOrangesCount += 1
		}

		for _, direction := range directions {
			tempRow := row + direction[0]
			tempCol := col + direction[1]

			if tempRow < len(matrix) && tempRow >= 0 && tempCol < len(matrix[0]) && tempCol >= 0 {
				if seen[tempRow][tempCol] == false {
					queue = append(queue, []int{tempRow, tempCol})
					seen[tempRow][tempCol] = true
				}
			}
		}
	}

	return rottenOrangesCoordinates, refreshOrangesCount
}

func rotOranges(matrix [][]int) int {
	if len(matrix) == 0 {
		return 0
	}

	if len(matrix[0]) == 0 {
		return 0
	}

	queue, numberOfRefreshOranges := findRottenOrangesCoordinatesAndCountFreshOranges(matrix)
	minutes := 0
	queueLength := len(queue)

	for len(queue) > 0 {
		queueLength -= 1
		current := queue[0]
		row := current[0]
		col := current[1]
		queue = queue[1:]

		for _, direction := range directions {
			tempRow := row + direction[0]
			tempCol := col + direction[1]
			if tempRow < len(matrix) && tempRow >= 0 && tempCol < len(matrix[0]) && tempCol >= 0 {
				if matrix[tempRow][tempCol] == 1 {
					numberOfRefreshOranges -= 1
					matrix[tempRow][tempCol] = 2
					queue = append(queue, []int{tempRow, tempCol})
				}
			}
		}

		if queueLength == 0 && len(queue) > 0 {
			minutes += 1
			queueLength = len(queue)
		}

	}

	if numberOfRefreshOranges != 0 {
		return -1
	}

	return minutes
}
