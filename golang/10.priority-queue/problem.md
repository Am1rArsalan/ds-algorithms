## Priority Queue Implementation in Go

The given Go code defines a Priority Queue data structure using a min-heap approach, where elements with lower values have higher priority. Here's a breakdown of the key components and methods:

### `type PriorityQueue struct`

The `PriorityQueue` struct defines the structure of the priority queue. It includes:
- `heap`: A slice (dynamic array) to store the elements in the priority queue.
- `competitor`: A function that determines the priority relationship between two elements.

### `func NewPriorityQueue(initial []int, competitor func(a, b int) bool) *PriorityQueue`

This is a constructor function for creating a new instance of the Priority Queue. It takes an initial array of integers and a priority comparison function. It initializes the `PriorityQueue` and builds the heap from the initial elements.

### `func (p *PriorityQueue) insert(value int) *PriorityQueue`

This method allows you to insert a new element with the given value into the priority queue while maintaining the heap property. It appends the element to the end of the heap and then performs a `heapifyUp` operation to ensure the heap property is preserved.

### `func (p *PriorityQueue) buildHeap(initial []int)`

This method builds the heap from an initial array of integers. It iterates through the elements and inserts them into the heap while maintaining the heap property using the `heapifyUp` operation.

### `func (p *PriorityQueue) heapifyUp(idx int)`

The `heapifyUp` method is used to move an element up in the heap to maintain the heap property after an insertion. It compares the element with its parent and swaps them if necessary.

### `func (p *PriorityQueue) heapifyDown(parent int)`

The `heapifyDown` method is used to move an element down in the heap to maintain the heap property after removal. It compares the element with its children and swaps them if necessary.

### `func (p *PriorityQueue) getHeap() []int`

This method returns the current state of the priority queue as a slice (array) of integers.

### `func (p *PriorityQueue) isEmpty() bool`

This method checks whether the priority queue is empty and returns `true` if it is, or `false` if it contains elements.

### `func (p *PriorityQueue) getSize() int`

This method returns the current number of elements in the priority queue.

### `func (p *PriorityQueue) peek() (int, error)`

The `peek` method retrieves the element with the highest priority (the minimum value) from the priority queue without removing it. It also returns an error if the queue is empty.

### `func (p *PriorityQueue) remove(idx int)`

The `remove` method removes an element at a specific index from the priority queue while maintaining the heap property.

### `func (p *PriorityQueue) pop() (int, error)`

The `pop` method removes and returns the element with the highest priority (the minimum value) from the priority queue. It also returns an error if the queue is empty.

This Priority Queue implementation provides a versatile data structure for managing elements with varying priorities efficiently.
