## Priority Queue Implementation

A Priority Queue is a data structure that allows you to insert elements with associated priorities and retrieve elements in order of their priority. In your provided interface, you have defined the following methods for the Priority Queue:

### 1. `insert(value: number) => void`

This method allows you to insert a new element with the given numeric `value` into the priority queue while preserving the order based on priority. Lower values typically indicate higher priority.

### 2. `getHeap() => number[]`

This method returns an array representing the current state of the priority queue. It can be used for debugging or visualization purposes.

### 3. `getSize() => number`

This method returns the current number of elements in the priority queue.

### 4. `peek() => number`

The `peek` method retrieves the element with the highest priority (the minimum value) from the priority queue without removing it. It allows you to examine the element at the front of the queue.

### 5. `remove(index: number) => void`

This method allows you to remove an element at a specific index from the priority queue. This operation can be useful when you want to remove a specific element by its index.

### 6. `pop() => number | undefined`

The `pop` method removes and returns the element with the highest priority (the minimum value) from the priority queue. If the queue is empty, it returns `undefined`.

### 7. `isEmpty() => boolean`

This method checks whether the priority queue is empty and returns a boolean value (`true` if empty, `false` otherwise).

### Implementation Details

To implement the Priority Queue, you can use various data structures such as a binary heap or a balanced binary search tree (e.g., a Red-Black Tree). The choice of data structure depends on the specific requirements of your application, including insert and retrieval time complexity.

Here's a high-level overview of how you might implement a Priority Queue using a binary heap:

1. Initialize an empty array or use an array to represent the binary heap.

2. Implement the `insert` method to add elements while maintaining the heap property (e.g., a min-heap or max-heap).

3. Implement the `pop` method to remove and return the top element of the heap, and restore the heap property.

4. Implement other methods like `peek`, `getSize`, `remove`, and `isEmpty` based on the operations you want to support.

Remember that the efficiency of your Priority Queue implementation depends on the choice of data structure and how well you maintain the heap property during insertions and removals.
