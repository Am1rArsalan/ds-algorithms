## Problem 1: Design Interface for Monarchy Family

**Description:** You are tasked with designing an interface for managing a monarchy family tree. The interface should provide methods for recording births, deaths, and retrieving the order of succession in a monarchy.

**Example:** Consider a monarchy where the king and queen have two children, Alice and Bob. Alice has a child named Carol. Here's how the interface could be used:

```typescript
// Initialize the monarchy
const monarchy = new Monarchy();

// Record births
monarchy.birth("Alice", "King"); // Alice is a child of the King
monarchy.birth("Bob", "King");   // Bob is a child of the King
monarchy.birth("Carol", "Alice"); // Carol is a child of Alice

// Record deaths
monarchy.death("King"); // King passed away

// Get the order of succession
const succession = monarchy.getOrderOfSuccession();
console.log(succession); // Output: ["Alice", "Carol", "Bob"]
```

The `getOrderOfSuccession` method should return the correct order of succession based on the recorded births and deaths.

## Problem 2: Implement a Trie

**Description:** You need to implement a Trie data structure that supports three operations: inserting a word into the Trie, searching for a word in the Trie, and checking if a word starts with a given prefix.

**Example:** Consider building a Trie for a dictionary:

```typescript
// Initialize the Trie
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("app");
trie.insert("banana");
trie.insert("bat");

// Search for words in the Trie
console.log(trie.search("apple"));  // Output: true
console.log(trie.search("app"));    // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("batman")); // Output: false

// Check if words start with a prefix
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban"));  // Output: true
console.log(trie.startsWith("cat"));  // Output: false
```

The Trie should efficiently handle word insertion, word search, and prefix checking operations.
