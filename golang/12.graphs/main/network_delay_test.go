package main

import "testing"

func TestNetworkDelay1(t *testing.T) {
	result := networkDelay1([][]int{{1, 2, 9}, {1, 4, 2}, {2, 5, 1}, {4, 2, 4}, {4, 5, 6}, {3, 2, 3}, {5, 3, 7}, {3, 1, 5}}, 1, 5)
	expectedResult := 14

	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) but got"+
			"(%v)", result, expectedResult)
	}
}

func TestNetworkDelay2(t *testing.T) {
	result := networkDelay2([][]int{{1, 2, 9}, {1, 4, 2}, {2, 5, 1}, {4, 2, 4}, {4, 5, 6}, {3, 2, 3}, {5, 3, 7}, {3, 1, 5}}, 1, 5)
	expectedResult := 14

	if result != expectedResult {
		t.Errorf("**first test case ** Expected (%v) but got"+
			"(%v)", result, expectedResult)
	}
}
