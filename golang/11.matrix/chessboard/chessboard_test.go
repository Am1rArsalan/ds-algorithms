package chessboard

import (
	"log"
	"reflect"
	"testing"
	"time"
)

func TestCalculateProbabilityKnightOnChessboard(t *testing.T) {
	expectedResult := 0.53125
	result := chessboard(6, 2, 2, 2)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("1.Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = 0.359375
	now := time.Now()
	result = chessboard(6, 3, 2, 2)
	timeOfExecution := time.Since(now)
	log.Printf("timeOfExecution: %s", timeOfExecution)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("2.Expected (%v) but got"+
			" (%v)", expectedResult, result)
	}
}

func TestMemoizedCalculateProbabilityKnightOnChessboard(t *testing.T) {
	expectedResult := 0.53125
	result := memoizedChessboard(6, 2, 2, 2)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("1.Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}

	expectedResult = 0.359375
	now := time.Now()
	result = memoizedChessboard(6, 3, 2, 2)
	timeOfExecution := time.Since(now)
	log.Printf("(DFS) count islands took %s", timeOfExecution)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("2.Expected (%v) but got"+
			" (%v)", expectedResult, result)
	}
}
