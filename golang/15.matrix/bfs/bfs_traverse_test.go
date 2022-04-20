package matrix_bfs

import (
	"reflect"
	"sort"
	"testing"
)

func getTestCase() [][]int {
	matrix := [][]int{}

	for i := 0; i < 4; i++ {
		matrix = append(matrix, []int{})
		for j := 0; j < 5; j++ {
			matrix[i] = append(matrix[i], i+j+1+4*i)
		}
	}

	return matrix
}

func TestBfs(t *testing.T) {
	matrix := getTestCase()

	result := BfsTraverseMatrix(matrix)

	sort.Slice(result, func(i, j int) bool {
		return result[i] < result[j]
	})

	expectedResult := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", expectedResult, result)
	}

	if len(result) != 20 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 20, len(result))
	}
}
