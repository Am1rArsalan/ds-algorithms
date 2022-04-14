package main

import "github.com/AmirAhmadzadeh/golang/graph-algo/utils"

// solving problem with bfs
func calculateMinutes1(managers, minutes []int, headId int) int {
	delay := 0
	adjList := make([][]int, len(managers))

	for employeeId, manager := range managers {
		if manager != -1 {
			adjList[manager] = append(adjList[manager], employeeId)
		}
	}

	queue := []int{headId}
	queueLength := len(queue)
	level := []int{minutes[headId]}
	seen := make(map[int]bool, len(managers))
	seen[headId] = true

	for len(queue) > 0 {
		vertex := queue[len(queue)-1]
		queue = queue[:len(queue)-1]
		queueLength -= 1

		if queueLength == 0 {
			levelDelay := utils.MaxInt(level)
			delay += levelDelay
			level = []int{}
		}

		connections := adjList[vertex]

		for _, connection := range connections {
			if !seen[connection] {
				seen[connection] = true
				queue = append(queue, connection)
				level = append(level, minutes[connection])
			}
		}

		queueLength = len(queue)
	}

	return delay
}

func findLevelDelay(adjList [][]int, minutes []int, vertex int) int {
	if len(adjList[vertex]) == 0 {
		return 0
	}

	connections := adjList[vertex]
	levelDelay := 0

	for _, conn := range connections {
		levelDelay = utils.MaxInt([]int{levelDelay, findLevelDelay(adjList, minutes, conn)})
	}

	return levelDelay + minutes[vertex]
}

// dfs
func calculateMinutes2(managers, minutes []int, headId int) int {
	adjList := make([][]int, len(managers))

	for employeeId, manager := range managers {
		if manager != -1 {
			adjList[manager] = append(adjList[manager], employeeId)
		}
	}

	return findLevelDelay(adjList, minutes, headId)
}
