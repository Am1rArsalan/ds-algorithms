# problem description

## Problem 1: Binary Search

**Description:** Binary search is an efficient algorithm used to find a specific element in a sorted array. The algorithm repeatedly divides the array in half and compares the middle element with the target element, narrowing down the search space until the element is found or the search space is empty.

**Example:**
Given a sorted array `[1, 3, 5, 7, 9, 11, 13]` and a target value `7`, binary search would return the index `3`, indicating that `7` is found at position `3` in the array.

## Problem 2: Find Starting and Ending Index of Target Value

**Description:** Given a sorted array of integers in ascending order, your task is to find the starting and ending indices of a given target value in the array. This problem is often solved using a modified binary search algorithm.

**Example:**
Given the sorted array `[1, 2, 2, 2, 3, 4, 4, 5]` and the target value `2`, the solution would return `[1, 3]`, indicating that the target value `2` appears between indices `1` and `3` in the array.

## Problem 3: Crystal Ball Drop Optimization

**Description:** You have two crystal balls, and you need to determine the exact height at which they will break when dropped from a certain height. The goal is to minimize the number of drops required to find the critical height. This problem is often used to explore strategies for minimizing worst-case scenarios.

**Example:**
Imagine you have two crystal balls, and you want to determine the critical height of a building with 100 floors. You can use an optimized strategy to minimize the number of drops required. For example, you might drop the first ball from floor 14, then 27, 39, 50, and so on, using a decreasing gap between drops. If the first ball breaks on a certain floor, you can use a linear search with the second ball to find the exact critical floor. With this strategy, you can determine the critical height in fewer drops compared to a brute-force approach of testing each floor one by one.

These enhanced problem descriptions should make it clearer and more understandable what each problem is about and how it can be approached.
