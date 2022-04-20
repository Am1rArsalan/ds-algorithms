package matrix_dfs

import (
	"reflect"
	"sort"
	"testing"
)

func getTestCase() [4][5]int {
	matrix := [4][5]int{}

	for i, value := range matrix {
		for j := range value {
			matrix[i][j] = i + j + 1 + 4*i
		}
	}

	return matrix
}

func TestDfs(t *testing.T) {
	matrix := getTestCase()

	result := DfsTraverseMatrix(matrix)

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
