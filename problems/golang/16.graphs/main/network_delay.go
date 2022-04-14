package main

import (
	"github.com/AmirAhmadzadeh/golang/graph-algo/priority_queue"
	"math"
)

/// dijkstra
func networkDelay1(times [][]int, k int, n int) int {
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
		return delays[a] < delays[b]
	})
	pq.Insert(k - 1)

	for !pq.IsEmpty() {
		current, error := pq.Peek()
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

func networkDelay2(times [][]int, k int, n int) int {
	delays := []float64{}
	for i := 0; i < n; i++ {
		delays = append(delays, math.Inf(1))
	}
	delays[k-1] = 0

	for i := 0; i < n-1; i++ {
		count := 0
		for _, time := range times {
			source := time[0] - 1
			target := time[1] - 1
			weight := time[2]

			if float64(weight)+delays[source] < delays[target] {
				delays[target] = delays[source] + float64(weight)
				count += 1
			}
		}

		if count == 0 {
			break
		}
	}

	if Max(delays) == math.Inf(1) {
		return -1
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
