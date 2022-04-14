package main

func detectCycle(adjList [][]int, currentVertex int) bool {
	queue := adjList[currentVertex]
	seen := make(map[int]bool, len(adjList))
	isCycle := false

	for len(queue) > 0 {
		vertex := queue[0]
		queue = queue[1:]
		seen[vertex] = true

		if vertex == currentVertex {
			isCycle = true
			break
		}

		connections := adjList[vertex]
		for _, connection := range connections {
			if !seen[connection] {
				queue = append(queue, connection)
			}
		}
	}

	return isCycle
}

func canFinishCourses(numOfCourses int, prerequisites [][]int) bool {

	adjList := make([][]int, numOfCourses)

	for _, prerequisite := range prerequisites {
		adjList[prerequisite[0]] = append(adjList[prerequisite[0]], prerequisite[1])
	}

	isFinishable := true

	for i := 0; i < numOfCourses; i++ {
		if detectCycle(adjList, i) {
			isFinishable = false
			break
		}
	}

	return isFinishable
}
