package main

import "testing"

func TestPalindrome(t *testing.T) {
	result := checkPalindrome("a , abaa")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome("aabb ,aa")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome("abc")
	if result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, result)
	}

	result = checkPalindrome("a")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome("")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome("A man, a plan, a canal : Panama")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}
}

func TestPalindrome2(t *testing.T) {
	result := checkPalindrome2("a , abaa")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome2("aabb ,aa")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome2("abc")
	if result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, result)
	}

	result = checkPalindrome2("a")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome2("")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome2("A man, a plan, a canal : Panama")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}
}

func TestPalindrome3(t *testing.T) {
	result := checkPalindrome3("a , abaa")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome3("aabb ,aa")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome3("abc")
	if result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", false, result)
	}

	result = checkPalindrome3("a")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome3("")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}

	result = checkPalindrome3("A man, a plan, a canal : Panama")
	if !result {
		t.Errorf("Expected (%v) is not same as"+
			"actual (%v)", true, result)
	}
}
