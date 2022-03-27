package main

import (
	"fmt"
	"testing"
)

func TestCompareString(t *testing.T) {
	if compareTwoString("axeqq#a", "asexq#a") {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}

	fmt.Println("amir is here", !compareTwoString("axeqq#a", "axeqW#a"))
	if !compareTwoString("axeqq#a", "axeqW#a") {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}
}
