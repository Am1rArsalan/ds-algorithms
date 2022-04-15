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

// topological sort
func canFinishCourses2(numOfCourses int, prerequisites [][]int) bool {
	adjList := make([][]int, numOfCourses)
	inDegrees := make([]int, numOfCourses)

	for _, prerequisite := range prerequisites {
		adjList[prerequisite[0]] = append(adjList[prerequisite[0]], prerequisite[1])
		inDegrees[prerequisite[1]] += 1

	}

	stack := []int{}
	count := 0
	seen := make(map[int]bool, numOfCourses)

	for vertex, value := range inDegrees {
		if value == 0 {
			stack = append(stack, vertex)
		}
	}

	for len(stack) > 0 {
		vertext := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		seen[vertext] = true
		count += 1

		connections := adjList[vertext]

		for _, connection := range connections {
			if !seen[connection] {
				seen[connection] = true
				stack = append(stack, connection)
			}
		}
	}

	return count == numOfCourses
}
