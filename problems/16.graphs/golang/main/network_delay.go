package main

import (
	"fmt"
	"math"

	"github.com/AmirAhmadzadeh/golang/graph-algo/priority_queue"
)

func networkDelay(times [][]int, k int, n int) int {
	adjList := make([][][]int, n)

	for _, time := range times {
		source := time[0] - 1
		target := time[1] - 1
		weight := time[2]

		adjList[source] = append(adjList[source], []int{target, weight})
	}

	delays := []float64{}
	for i := 0; i < n; i++ {
		delays = append(delays, math.Inf(1))
	}
	delays[k-1] = 0

	pq := priority_queue.NewPriorityQueue([]int{}, func(a, b int) bool {
		return delays[a] > delays[b]
	})
	pq.Insert(k - 1)
	fmt.Println("what is priority_queue in first test", pq)
	fmt.Println("adjList", adjList)

	for !pq.IsEmpty() {
		current, error := pq.Peek()
		fmt.Println("what is current", current)
		if error != nil {
			break
		}
		connections := adjList[current]

		for _, connection := range connections {
			T := connection[0]
			W := connection[1]
			if float64(W)+delays[current] < delays[T] {
				delays[T] = float64(W) + delays[current]
				pq.Insert(T)
			}
		}
	}

	return int(Max(delays))
}

func Max(slice []float64) float64 {
	max := slice[0]
	for _, value := range slice {
		if max < value {
			max = value
		}
	}
	return max
}
