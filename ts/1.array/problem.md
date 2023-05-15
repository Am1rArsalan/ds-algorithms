# Arrays Problems Description

## What is An Array ?

1. watch [this video](https://www.youtube.com/watch?v=b8cPdOX-ID4) on DaFluffyPotato YouTube Channel
2. if you are better to reading docs, read [this article](https://www.geeksforgeeks.org/what-is-array/)

Reading [this article](https://www.mindtools.com/a6tcgqp/what-is-problem-solving) can improve your understanding of why problem-solving skills matter.

---
###  Problem #1
```
You are given an array of positive numbers and 
are required to find the indexes of two numbers 
whose sum is equal to a target value
provided by the test cases.
```

The problem assumes that you are given an array of positive numbers (i.e., numbers greater than zero) and a target value that is also a positive number. The goal of the problem is to find two numbers in the array whose sum is equal to the target value, and to return the indexes of those two numbers.

For example, if the array is [2, 7, 11, 15] and the target value is 9, the solution would be the indexes of the first two numbers in the array (i.e., 2 and 7), since they add up to 9. The output of the program should be an array or tuple containing the indexes of the two numbers in the original array.

There are several different algorithms that can be used to solve this problem, ranging in time complexity from O(n^2) to O(n log n) to O(n). One common approach is to use a hash table or dictionary to store the values in the array and their corresponding indexes, and then iterate through the array and check if the complement of each number (i.e., the difference between the target value and the current number) is in the hash table. If it is, then the two numbers whose sum is equal to the target value have been found, and their indexes can be returned.

In summary, the problem of finding two numbers in an array whose sum is equal to a target value is a common coding challenge that requires some knowledge of data structures and algorithms. The solution involves iterating through the array and using a hash table or similar data structure to store and look up values efficiently.

---
### Problem #2

```
You are given an array of positive numbers, 
where each number represents the height of a vertical line on a chart. 
Your task is to find two lines that, together with the x-axis,
form a container that can hold the greatest amount of water. 
Return the area of the water that would be held by the container.
```

In this problem, the input is an array of positive numbers representing the heights of vertical lines on a chart. The goal is to find two lines that together with the x-axis form a container that can hold the most water. The output is the area of the water that would be held by the container formed by the two lines. This problem is also known as the "Container With Most Water" problem, and can be solved using a two-pointer approach that iterates through the array from both ends and calculates the area of each container as it goes.

---
### Problem #3

```
You are given an array of positive numbers, 
where each number indicates the height of a rectangle 
with a width of 1 on a horizontal axis. 
Your task is to determine how much water can be trapped within the rectangles.
```

In this problem, the input is an array of positive numbers representing the heights of rectangles with a width of 1 on a horizontal axis. The goal is to determine how much water can be trapped within the rectangles. This problem is also known as the "Trapping Rain Water" problem, and can be solved using a two-pointer approach that iterates through the array from both ends and calculates the amount of water that can be trapped at each position.

---
### Problem #4

```
Given a staircase, 
the i-th step is assigned a non-negative cost indicated by a cost array. 
Once you pay the cost for a step, you can either climb one or two steps. 
Your task is to find the minimum cost to reach the top of the staircase, 
where your first step can be either the first or second step.
```

In this problem, the input is an array of non-negative integers representing the cost of each step on a staircase. The goal is to find the minimum cost to reach the top of the staircase, where you can climb either one or two steps at a time. The problem can be solved using a dynamic programming approach that iteratively calculates the minimum cost to reach each step of the staircase, based on the minimum cost to reach the previous step(s).

---
### Problem #5

validate subsequence

The Validate Subsequence algorithm problem involves determining whether a given sequence of integers (the subsequence) is a valid subsequence of a larger sequence of integers (the main sequence). The problem is often framed as follows:

Problem statement: Given two arrays of integers, determine whether the second array is a valid subsequence of the first array. A valid subsequence is defined as a sequence that can be derived from the first array by deleting some or none of the items without changing the order of the remaining items.

For example, consider the main sequence [1, 2, 3, 4, 5, 6] and the subsequence [2, 4, 6]. The subsequence is a valid subsequence of the main sequence, since it can be derived by deleting the elements 1, 3, and 5 from the main sequence.

To solve this problem, one approach is to iterate through both arrays and compare the elements in sequence. If the current element in the subsequence matches the current element in the main sequence, move to the next element in the subsequence. If all elements in the subsequence are found in the main sequence in order, then the subsequence is a valid subsequence.

This problem is commonly used in technical interviews to assess a candidate's ability to write clean, efficient, and correct code to solve a common algorithmic problem.

---
### Problem #6

squared sorted array

A squared sorted array is an array of integers where each element is the square of an integer, and the array is sorted in non-decreasing order. For example, the squared sorted array [1, 4, 9, 16, 25] is formed by squaring the integers 1, 2, 3, 4, and 5, and then sorting the resulting array in non-decreasing order.

Squared sorted arrays often arise in algorithmic problems that involve searching for specific values or ranges of values in arrays. One notable example is the "Two Sum" problem, where the goal is to find two numbers in a given array whose sum is equal to a target value. If the input array is a squared sorted array, the problem can be solved using a two-pointer approach that iterates through the array from both ends and looks for two numbers whose sum is equal to the target value.

Squared sorted arrays can be generated efficiently by first squaring the elements of an existing sorted array, and then sorting the resulting array using a sorting algorithm such as merge sort or quicksort. Alternatively, the array can be sorted in non-decreasing order and then the squares can be taken in a separate step.

---
### Problem #7

The non-constructible change problem is a classic algorithmic problem that involves determining the smallest amount of change that cannot be created using a given set of coins or denominations. The problem is often framed as follows:

Problem statement: Given an array of positive integers representing the denominations of coins, determine the smallest amount of change that cannot be created using those coins. For example, if the array is [1, 2, 5], the smallest amount of change that cannot be created using those coins is 4, since it is not possible to create 4 cents using the given denominations.

To solve this problem, one approach is to sort the array in non-decreasing order and then iterate through the array, keeping track of the largest amount of change that can be created using the coins seen so far. If the next coin in the array is greater than the current maximum plus one, then the smallest amount of change that cannot be created is the current maximum plus one. Otherwise, add the next coin to the current maximum and continue iterating.

This problem is a classic example of a greedy algorithm, where the solution involves making locally optimal choices that lead to a globally optimal solution. The non-constructible change problem has applications in areas such as finance, where it can be used to analyze the smallest possible change that a vending machine or cash register should be able to handle in order to avoid running out of coins.

---
### Problem #8

```
Given an array of positive numbers, 
where each number indicates the time required to execute a query, 
find the minimum waiting time required to execute all the queries.
```

In this problem, the input is an array of positive integers representing the time required to execute each query. The goal is to find the minimum waiting time required to execute all the queries, which can be achieved by ordering the queries in non-decreasing order of execution time and then calculating the waiting time as the sum of the execution times for all queries except the last one. This problem is often used in computer science to optimize the execution of multiple queries or tasks, and can be solved using various algorithms such as greedy algorithms and dynamic programming.

---
### Problem #9

``` 
Class Photos: Given two arrays representing the heights of students, 
where the first array belongs to students with red shirts and 
the second array belongs to students with blue shirts. 
All heights are positive non-zero integers, 
and the number of students with red and blue shirts is equal. 
The task is to determine if it is possible to take a photo of 
the students with the following constraints: 
all students with red shirts must be in the same row, 
all students with blue shirts must be in the same row, 
the photo must have exactly two rows with the same number of students in each row,
and every student in the front row must be strictly shorter 
than all students in the back row.
```

In this problem, the input is two arrays of positive integers representing the heights of students with red and blue shirts. The goal is to determine whether it is possible to take a photo of the students with the given constraints. The problem can be solved using a sorting algorithm to sort the arrays in non-increasing order, and then comparing the heights of the students in corresponding positions in the two arrays to determine if the photo can be taken with the given constraints.


---
### Problem #10


```
Tandem Bicycle: Given two arrays representing the speeds of bicycle riders
with red and blue shirts as inputs, and a third input indicating whether 
we are looking for the maximum or minimum speed tandem bicycle. 
Each tandem bicycle is ridden by one person with a blue shirt 
and one person with a red shirt.
```

In this problem, the input is two arrays of positive integers representing the speeds of riders with red and blue shirts, respectively. The third input specifies whether the task is to find the tandem bicycle with the maximum or minimum speed. Each tandem bicycle is ridden by one person with a red shirt and one person with a blue shirt. This problem can be solved using a sorting algorithm to sort the two arrays in non-increasing or non-decreasing order, depending on whether we are looking for the maximum or minimum speed tandem bicycle. Then, we iterate through the two arrays in tandem and add the speeds of the corresponding riders to find the overall speed of each tandem bicycle. Finally, we return the maximum or minimum speed as required by the third input.
