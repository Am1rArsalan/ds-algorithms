## Problem 1: DFS Traverse in Matrix

**Description:** Depth-First Search (DFS) is a graph traversal algorithm that can be applied to matrices as well. In this problem, you need to traverse a matrix using DFS. Starting from a specific cell, you explore its neighbors (up, down, left, right) and continue exploring each neighbor's neighbors until you've visited all connected cells.

**Example:** Consider a 4x4 matrix with 1's representing land and 0's representing water. Starting from cell (0, 0), a DFS traversal might visit cells (0, 1), (1, 1), (1, 0), (2, 2), (2, 1), (3, 3), and (3, 2). You can count these connected components to find the number of islands in the matrix.

## Problem 2: BFS Traverse in Matrix

**Description:** Breadth-First Search (BFS) is another graph traversal algorithm that can be used on matrices. In this problem, you traverse a matrix using BFS. Starting from a specific cell, you explore its immediate neighbors (up, down, left, right) before moving to their neighbors, and so on.

**Example:** Consider a 3x3 matrix with cells containing fresh oranges (1) and rotten oranges (2). At each minute, all fresh oranges adjacent to rotten oranges rot. After a certain number of minutes, all oranges will be rotten. You need to find out how many minutes it takes for all oranges to rot.

## Problem 3: Fill Empty Rooms with Nearest Gate

**Description:** Given a 2D array with rooms represented by empty spaces, walls, and gates, you need to fill each empty room with the number of steps required to reach the nearest gate. If a room cannot be reached from any gate, it remains with an unreachable value (e.g., INF).

**Example:** Given a 4x4 grid with gates (G), empty rooms (E), and walls (W):

```
G  E  G  W
W  W  E  W
G  W  W  W
W  E  E  G
```

After processing, the grid might look like:

```
G  0  G  W
W  W  1  W
G  2  1  1
W  1  0  G
```

## Problem 4: Knight's Probability on Chessboard

**Description:** A knight on an nxn chessboard makes k random moves (8 possible directions). You need to find the probability that the knight is still on the chessboard after k moves.

**Example:** If the knight starts at (0, 0) on a 3x3 chessboard and makes 2 random moves, there is a certain probability that it remains on the chessboard. Calculating this probability is the goal of this problem.

## Problem 5: Maze

**Description:** Maze-solving problems involve navigating through a maze, often represented as a grid with obstacles and open paths. You need to find a path from a starting point to a goal while avoiding obstacles.

**Example:** Given a maze, you start at a specific cell and need to reach the exit cell. The maze may have walls, open paths, and possibly multiple solutions. Your task is to find a valid path from start to finish.

These descriptions provide a clearer understanding of each problem and its objectives. Further details and solutions can be provided for any specific problem you'd like to explore in more depth.
