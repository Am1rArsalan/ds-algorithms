## Problem 1: Design Interface for Monarchy Family

**Description:** Design an interface for managing a monarchy family tree. The interface should provide methods for recording births, deaths, and retrieving the order of succession in a monarchy.

**Example:**
```go
// Define the Monarchy interface
type Monarchy interface {
    Birth(child, parent string)
    Death(name string)
    GetOrderOfSuccession() []string
}

// Usage example:
func main() {
    // Initialize the monarchy
    monarchy := NewMonarchy("King")

    // Record births
    monarchy.Birth("Alice", "King")   // Alice is a child of the King
    monarchy.Birth("Bob", "King")     // Bob is a child of the King
    monarchy.Birth("Carol", "Alice")  // Carol is a child of Alice

    // Record deaths
    monarchy.Death("King")  // King passed away

    // Get the order of succession
    succession := monarchy.GetOrderOfSuccession()
    fmt.Println(succession) // Output: ["Alice", "Carol", "Bob"]
}
```

## Problem 2: Implement a Trie

**Description:** Implement a Trie data structure that supports three operations: inserting a word into the Trie, searching for a word in the Trie, and checking if a word starts with a given prefix.

**Example:**
```go
// Define the Trie interface
type Trie interface {
    Insert(word string)
    Search(word string) bool
    StartsWith(prefix string) bool
}

// Usage example:
func main() {
    // Initialize the Trie
    trie := NewTrie()

    // Insert words into the Trie
    trie.Insert("apple")
    trie.Insert("app")
    trie.Insert("banana")
    trie.Insert("bat")

    // Search for words in the Trie
    fmt.Println(trie.Search("apple"))  // Output: true
    fmt.Println(trie.Search("app"))    // Output: true
    fmt.Println(trie.Search("banana")) // Output: true
    fmt.Println(trie.Search("batman")) // Output: false

    // Check if words start with a prefix
    fmt.Println(trie.StartsWith("app")) // Output: true
    fmt.Println(trie.StartsWith("ban"))  // Output: true
    fmt.Println(trie.StartsWith("cat"))  // Output: false
}
```

These Go code examples demonstrate how to use the provided interfaces for the Monarchy family and Trie data structure.
