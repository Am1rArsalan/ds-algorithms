package binary_search

import (
	"testing"
)

func TestBinarySearch(t *testing.T) {
	arr := []int{1, 2, 3, 4, 5, 6}
	target := 5
	result := BinarySearch(arr, target, 0, len(arr)-1)
	expectedResult := 4

	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" (%v)", expectedResult, result)
	} else {
		t.Logf("Expected String(%v) is same as"+
			" (%v)", expectedResult, result)
	}
}

func TestBinarySearch2(t *testing.T) {
	arr := []int{1, 2, 3, 4, 5, 6}
	target := 5
	result := BinarySearch2(arr, target)
	expectedResult := 4

	if result != expectedResult {
		t.Errorf("Expected (%v) is not same as"+
			" (%v)", expectedResult, result)
	} else {
		t.Logf("Expected String(%v) is same as"+
			" (%v)", expectedResult, result)
	}
}



func BenchmarkBinarySearch(b *testing.B) {
    arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    target := 5
    left, right := 0, len(arr)-1

    for i := 0; i < b.N; i++ {
        BinarySearch(arr, target, left, right)
    }
}

func BenchmarkBinarySearch2(b *testing.B) {
    arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    target := 5

    for i := 0; i < b.N; i++ {
        BinarySearch2(arr, target)
    }
}
