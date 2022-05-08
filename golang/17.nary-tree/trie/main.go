package main

import "fmt"

type Node struct {
	value      string
	isTerminal bool
	children   map[string]*Node
}

func NewNode(value string) *Node {
	return &Node{
		value:      value,
		isTerminal: false,
		children:   map[string]*Node{},
	}
}

func (n *Node) setTerminal(value bool) {
	n.isTerminal = value
}

type Trie struct {
	root *Node
}

func NewTrie(root *Node) *Trie {
	return &Trie{
		root,
	}
}

func (t *Trie) Insert(word string) {
	if len(word) == 0 {
		return
	}

	insert(t.root, word)
}

func insert(node *Node, word string) {
	key := string(word[0])
	// word : "app"

	if value, ok := node.children[key]; ok && len(word) > 0 {
		if len(word) == 1 {
			value.setTerminal(true)
		}
		insert(value, word[1:])
		return
	}

	newNode := NewNode(key)
	if len(word) == 1 {
		newNode.setTerminal(true)
	}
	node.children[key] = newNode

	if len(word[1:]) > 0 {
		insert(newNode, word[1:])
		return
	}
}

func (t *Trie) Search(word string) bool {
	if len(word) == 0 {
		return false
	}

	return search(t.root, word)
}

func search(node *Node, word string) bool {
	if len(word) == 1 {
		if value, ok := node.children[string(word[0])]; ok {
			return value.isTerminal
		}

		return false
	}

	if value, ok := node.children[string(word[0])]; ok {
		return search(value, word[1:])
	}

	return false
}

func (t *Trie) StartsWith(word string) bool {
	if len(word) == 0 {
		return false
	}

	return startsWith(t.root, word)

}

func startsWith(node *Node, word string) bool {
	if len(word) == 1 {
		fmt.Println("the last letter", word, node)
		if _, ok := node.children[string(word)]; ok {
			return true
		}

		return false
	}

	if value, ok := node.children[string(word[0])]; ok {
		return startsWith(value, word[1:])
	}

	return false
}
