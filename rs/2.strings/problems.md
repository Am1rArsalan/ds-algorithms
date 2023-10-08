## Problem 1: Backspace String Comparison

You are given two strings, T and S. The goal is to determine whether these strings are equal when typed out, taking into account backspaces represented by hashtags (#). Whenever a hashtag is encountered in either string, it acts as a backspace, erasing the character immediately before it. For example:

**Example 1:**
Input: T = "axeqq#a", S = "asexq#a"
Output: False
Explanation: After considering the backspaces, both strings become "axeqa" and "asexa," which are not equal.

**Example 2:**
Input: T = "axeqq#a", S = "axeqW#a"
Output: True
Explanation: After considering the backspaces, both strings become "axeqa," and they are equal.

## Problem 2: Longest Substring Without Repeating Characters

Given a string, your task is to find the length of the longest substring that does not contain any repeating characters. In other words, you need to identify the continuous sequence of characters within the string where no character appears more than once.

## Problem 2: Longest Substring Without Repeating Characters

**Example 1:**
Input: "abcabcbb"
Output: 3
Explanation: The longest substring without repeating characters is "abc," which has a length of 3.

**Example 2:**
Input: "bbbbb"
Output: 1
Explanation: The longest substring without repeating characters is "b," which has a length of 1.




## Problem 3: Valid Palindrome

You are given a string, and your objective is to determine whether it is a valid palindrome. A valid palindrome is a string that reads the same forwards as it does backward, while ignoring spaces, punctuation, and capitalization. For example, "racecar" and "A man, a plan, a canal, Panama!" are valid palindromes.

**Example 1:**
Input: "racecar"
Output: True
Explanation: "racecar" reads the same forwards and backwards, so it is a valid palindrome.

**Example 2:**
Input: "A man, a plan, a canal, Panama!"
Output: True
Explanation: Ignoring spaces, punctuation, and capitalization, the string reads the same forwards and backwards, making it a valid palindrome.


## Problem 4: Longest Palindrome in a String

In this problem, you are given a string, and your task is to find the longest palindrome within it. A palindrome is a sequence of characters that reads the same forwards as it does backward. You need to identify and return the longest palindrome substring contained within the given string.

**Example 1:**
Input: "babad"
Output: "bab" or "aba"
Explanation: The longest palindromes within the string are "bab" and "aba," both of length 3.

**Example 2:**
Input: "cbbd"
Output: "bb"
Explanation: The longest palindrome within the string is "bb" of length 2.




## Problem 5: Zigzag Pattern Conversion

Given a string, like "PAYPALISHIRING," and a specified number of rows, you are tasked with converting the string into a zigzag pattern by arranging its characters in a specific way. The zigzag pattern consists of rows where characters are written in a diagonal manner. Your goal is to construct and return the string in this zigzag pattern, row by row.

**Example:**
Input: "PAYPALISHIRING", Rows = 3
Output:
```
P   A   H   N
A P L S I I G
Y   I   R
```
Explanation: The string "PAYPALISHIRING" is converted into a zigzag pattern with 3 rows, and characters are arranged diagonally to form the output as shown.
