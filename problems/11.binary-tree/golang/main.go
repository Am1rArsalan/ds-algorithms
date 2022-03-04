package main

import (
	"io"
	"os"
)

func main() {
	tree := BinaryTree{
		root: nil,
	}

	tree.insert(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7)

	// create instance of io writer

	w := io.Writer(os.Stdout)

	print(w, &tree.root, 0, 'A')
}
