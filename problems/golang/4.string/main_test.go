package main

import (
	"testing"
)

func TestCompareString(t *testing.T) {
	if compareTwoString("axeqq#a", "asexq#a") {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}

	if !compareTwoString("axeqq#a", "axeqW#a") {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, false)
	}
}
