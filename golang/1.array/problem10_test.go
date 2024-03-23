package main

import "testing"

func TestTandemBicycle(t *testing.T) {
    redShirtRiders := []int{5, 5, 3, 9, 2}
    blueShirtRiders := []int{3, 6, 7, 2, 1}
    expectedResult := 32 
    fastest := true 
    result := TandemBicycle(redShirtRiders, blueShirtRiders,fastest) 

	if expectedResult != result {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}

func TestTandemBicycle2(t *testing.T) {
    redShirtRiders := []int{5, 5, 3, 9, 2}
    blueShirtRiders := []int{3, 6, 7, 2, 1}
    expectedResult := 11 
    fastest := false 
    result := TandemBicycle(redShirtRiders, blueShirtRiders,fastest) 

	if expectedResult != result {
		t.Errorf("Expected (%v) is not same as"+
			" actual string (%v)", expectedResult, result)
	}
}
