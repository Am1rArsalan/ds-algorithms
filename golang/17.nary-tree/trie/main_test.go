package main

import (
	//"fmt"
	"testing"
)

func TestFindSumTargetIndexes(t *testing.T) {
	trie := NewTrie(NewNode(""))

	trie.Insert("apple")
	result := trie.Search("dog")

	if result {
		t.Errorf("Expected false, got %v", result)
	}

	trie.Insert("dog")
	result = trie.Search("dog")
	if !result {
		t.Errorf("Expected true, but got %v", result)
	}

	result = trie.Search("baset")
	if result != false {
		t.Errorf("Expected false, got %v", result)
	}
	trie.Insert("baset")
	result = trie.Search("baset")
	if result != true {
		t.Errorf("Expected true , got %v", result)
	}

	result = trie.StartsWith("app")
	if result != true {
		t.Errorf("Expected true, got %v", result)
	}

	result = trie.Search("app")
	if result != false {
		t.Errorf("Expected false, got %v", result)
	}

	trie.Insert("app")
	//result = trie.Search("app")
	//if result != true {
	//t.Errorf("Expected true, got %v", result)
	//}
}
