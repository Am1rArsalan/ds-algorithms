package main

import (
	"reflect"
	"testing"
)

func TestGetDiagonals(t *testing.T) {
	board := NewBoard()

	tests := []struct {
		x, y          int
		expectedMajor []string
		expectedMinor []string
	}{
		{0, 0, []string{".", ".", ".", ".", ".", ".", ".", "."}, []string{".", ".", ".", ".", ".", ".", ".", "."}},
		{0, 7, []string{".", ".", ".", ".", ".", ".", ".", "."}, []string{".", ".", ".", ".", ".", ".", ".", "."}},
		{7, 0, []string{".", ".", ".", ".", ".", ".", ".", "."}, []string{".", ".", ".", ".", ".", ".", ".", "."}},
		{7, 7, []string{".", ".", ".", ".", ".", ".", ".", "."}, []string{".", ".", ".", ".", ".", ".", ".", "."}},
		{3, 3, []string{".", ".", ".", ".", ".", ".", ".", "."}, []string{".", ".", ".", ".", ".", ".", ".", "."}},
		{3, 4, []string{".", ".", ".", ".", ".", ".", ".", "."}, []string{".", ".", ".", ".", ".", ".", ".", "."}},
		{4, 3, []string{".", ".", ".", ".", ".", ".", ".", "."}, []string{".", ".", ".", ".", ".", ".", ".", "."}},
		{4, 4, []string{".", ".", ".", ".", ".", ".", ".", "."}, []string{".", ".", ".", ".", ".", ".", ".", "."}},
	}

	for _, test := range tests {
		major, minor := board.GetDiagonals(test.x, test.y)
		if !reflect.DeepEqual(major, test.expectedMajor) {
			t.Errorf("GetDiagonals(%d, %d) major = %v; want %v", test.x, test.y, major, test.expectedMajor)
		}
		if !reflect.DeepEqual(minor, test.expectedMinor) {
			t.Errorf("GetDiagonals(%d, %d) minor = %v; want %v", test.x, test.y, minor, test.expectedMinor)
		}
	}
}
