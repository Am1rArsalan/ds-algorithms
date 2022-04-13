package main

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
	seen := make(map[int]bool, len(managers))
	seen[4] = true

	for len(queue) > 0 {
		vertex := queue[len(queue)-1]
		queue = queue[:len(queue)-1]
		connections := adjList[vertex]

		for _, connection := range connections {
			if !seen[connection] {
				delay += minutes[connection]
				seen[connection] = true
				queue = append(queue, connection)
			}
		}
	}

	return delay
}

func dfs(minutes []int, vertex int, adjList [][]int, seen map[int]bool, delay int) int {
	seen[vertex] = true
	delay += minutes[vertex]
	connections := adjList[vertex]

	for _, connection := range connections {
		if !seen[connection] {
			return dfs(minutes, connection, adjList, seen, delay)
		}
	}

	return delay
}

// solving problem with dfs
func calculateMinutes2(managers, minutes []int, headId int) int {
	adjList := make([][]int, len(managers))
	seen := make(map[int]bool, len(managers))

	for employeeId, manager := range managers {
		if manager != -1 {
			adjList[manager] = append(adjList[manager], employeeId)
		}
	}

	return dfs(minutes, headId, adjList, seen, 0)
}
