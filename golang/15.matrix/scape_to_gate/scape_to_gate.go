package scapetogate

const Wall = -1
const Empty = 2147483647
const Gate = 0

var directions = [][]int{
	{-1, 0},
	{0, 1},
	{1, 0},
	{0, -1},
}

func findGates(matrix *[][]int) [][]int {
	seen := [][]bool{}
	result := [][]int{}

	for i := 0; i < len(*matrix); i++ {
		seen = append(seen, []bool{})
		for j := 0; j < len((*matrix)[i]); j++ {
			seen[i] = append(seen[i], false)
		}
	}

	queue := [][]int{{0, 0}}

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		row := current[0]
		col := current[1]

		seen[row][col] = true

		if (*matrix)[row][col] == Gate {
			result = append(result, []int{row, col})
		}

		for _, direction := range directions {
			tempRow := direction[0] + row
			tempCol := direction[1] + col

			if tempRow < len(*matrix) && tempRow >= 0 && tempCol < len((*matrix)[0]) && tempCol >= 0 {
				if !seen[tempRow][tempCol] {
					queue = append(queue, []int{tempRow, tempCol})
				}

			}
		}

	}

	return result
}

func scapeToGate(matrix [][]int) [][]int {
	queue := findGates(&matrix)
	queueLength := len(queue)
	steps := 1

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		row := current[0]
		col := current[1]
		queueLength -= 1

		for _, direction := range directions {
			tempRow := direction[0] + row
			tempCol := direction[1] + col

			if tempRow < len(matrix) && tempRow >= 0 && tempCol < len(matrix[0]) && tempCol >= 0 {
				if matrix[tempRow][tempCol] != Wall && matrix[tempRow][tempCol] != Gate {
					if matrix[tempRow][tempCol] == Empty {
						matrix[tempRow][tempCol] = steps
						queue = append(queue, []int{tempRow, tempCol})
					}
				}
			}
		}

		if queueLength == 0 && len(queue) > 0 {
			queueLength = len(queue)
			steps += 1
		}

	}

	return matrix
}
