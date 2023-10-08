## Priority Queue Implementation in Rust

The following Rust code defines a Priority Queue data structure using a min-heap approach, where elements with lower values have higher priority. Here's a breakdown of the key components and methods:

### `struct PriorityQueue`

The `PriorityQueue` struct defines the structure of the priority queue. It includes:
- `heap`: A vector (dynamic array) to store the elements in the priority queue.
- `competitor`: A closure that determines the priority relationship between two elements.

### `fn new_priority_queue(initial: Vec<i32>, competitor: fn(i32, i32) -> bool) -> PriorityQueue`

This is a constructor function for creating a new instance of the Priority Queue. It takes an initial vector of integers and a priority comparison closure. It initializes the `PriorityQueue` and builds the heap from the initial elements.

### `fn insert(&mut self, value: i32)`

This method allows you to insert a new element with the given value into the priority queue while maintaining the heap property. It appends the element to the end of the heap and then performs a `heapify_up` operation to ensure the heap property is preserved.

### `fn build_heap(&mut self, initial: Vec<i32>)`

This method builds the heap from an initial vector of integers. It iterates through the elements and inserts them into the heap while maintaining the heap property using the `heapify_up` operation.

### `fn heapify_up(&mut self, idx: usize)`

The `heapify_up` method is used to move an element up in the heap to maintain the heap property after an insertion. It compares the element with its parent and swaps them if necessary.

### `fn heapify_down(&mut self, parent: usize)`

The `heapify_down` method is used to move an element down in the heap to maintain the heap property after removal. It compares the element with its children and swaps them if necessary.

### `fn get_heap(&self) -> Vec<i32>`

This method returns the current state of the priority queue as a vector of integers.

### `fn is_empty(&self) -> bool`

This method checks whether the priority queue is empty and returns `true` if it is, or `false` if it contains elements.

### `fn get_size(&self) -> usize`

This method returns the current number of elements in the priority queue.

### `fn peek(&self) -> Result<i32, &str>`

The `peek` method retrieves the element with the highest priority (the minimum value) from the priority queue without removing it. It returns a `Result` where `Ok` contains the element and `Err` contains an error message if the queue is empty.

### `fn remove(&mut self, idx: usize)`

The `remove` method removes an element at a specific index from the priority queue while maintaining the heap property.

### `fn pop(&mut self) -> Result<i32, &str>`

The `pop` method removes and returns the element with the highest priority (the minimum value) from the priority queue. It returns a `Result` where `Ok` contains the element and `Err` contains an error message if the queue is empty.

This Priority Queue implementation provides a versatile data structure for managing elements with varying priorities efficiently in Rust.
