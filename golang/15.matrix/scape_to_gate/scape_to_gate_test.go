package scapetogate

import (
	"log"
	"reflect"
	"testing"
	"time"
)

func TestScapeToGate(t *testing.T) {
	start := time.Now()
	result := scapeToGate([][]int{
		{Empty, Wall, Gate, Empty},
		{Empty, Empty, Empty, Wall},
		{Empty, Wall, Empty, Wall},
		{Gate, Wall, Empty, Empty},
	})

	expectedResult := [][]int{
		{3, -1, 0, 1},
		{2, 2, 1, -1},
		{1, -1, 2, -1},
		{0, -1, 3, 4},
	}
	timeOfExecution := time.Since(start)
	log.Printf("1.rot oranges execution took %s", timeOfExecution)

	if !reflect.DeepEqual(expectedResult, result) {
		t.Errorf("Expected (%v) but got\n"+
			"  (%v) \n", expectedResult, result)
	}

}
