## Problem-1: Breadth-First Search (BFS) Traversal in a Graph

**Description:** Implement a Breadth-First Search (BFS) traversal in a given graph and return the order in which nodes are visited.

**Example:** For the graph:
```
   0 -- 1 -- 2
   |    |    |
   3 -- 4 -- 5
```
The BFS traversal starting from node 0 is `[0, 1, 3, 2, 4, 5]`.

## Problem-2: Depth-First Search (DFS) Traversal in a Graph

**Description:** Implement a Depth-First Search (DFS) traversal in a given graph and return the order in which nodes are visited.

**Example:** For the graph:
```
   0 -- 1 -- 2
   |    |    |
   3 -- 4 -- 5
```
The DFS traversal starting from node 0 is `[0, 1, 4, 5, 2, 3]`.

## Problem-3: Employee Information Propagation

**Description:** A company has `n` employees with unique IDs from 0 to `n-1`. The head of the company has the ID `headID`. You will receive a `managers` array where `managers[i]` is the ID of the manager of employee `i`. Each employee has a direct manager, and the company head has no manager (`managers[headId] = -1`). It's guaranteed that the subordination relationships will have a tree structure. The head of the company wants to inform all the employees of news. He will inform his direct subordinates, who will inform their direct subordinates, and so on until everyone knows the news. You will receive an `informTime` array where `informTime[i]` is the time it takes for employee `i` to inform all the subordinates. Return the total number of minutes it takes to inform all the employees of the news.

**Example:** 
- `n = 6`, `headID = 2`, `managers = [-1, 2, 2, 3, 3, 4]`, `informTime = [0, 0, 1, 2, 3, 4]`. The total time to inform all employees is `9` minutes.

## Problem-4: Course Prerequisites

**Description:** There are a total of `n` courses to take, labeled from 0 to `n - 1`. Some courses have prerequisite courses, expressed as pairs, i.e., `[1, 0]`, which indicates you must take course `0` before taking course `1`. Determine if it is possible to finish all courses.

**Example:** 
- `n = 2`, `prerequisites = [[1,0]]`. It is possible to finish all courses.
- `n = 2`, `prerequisites = [[1,0], [0,1]]`. It is not possible to finish all courses.

## Problem-5: Signal Propagation in a Network

**Description:** There are `N` labeled nodes labeled `1` to `N`. Given a `times` array containing edges represented by arrays `[u, v, w]`, where `u` is the source node, `v` is the target node, and `w` is the time taken to travel from the source node to the target node. Send a signal from node `k` and return how long it takes for all nodes to receive the signal. Return `-1` if it's impossible.

**Example:**
- `N = 4`, `times = [[2,1,1],[2,3,1],[3,4,1]]`, `k = 2`. It takes `2` units of time for all nodes to receive the signal.
- `N = 4`, `times = [[1,2,1],[2,3,7],[1,4,2],[2,4,3]]`, `k = 1`. It takes `6` units of time for all nodes to receive the signal.
- `N = 4`, `times = [[1,2,1],[2,3,7],[1,4,2],[2,4,3]]`, `k = 3`. It is impossible to send the signal to all nodes.



# problem-6: 

https://codeforces.com/problemset/problem/94/B
