package main

type Queue struct {
	in  []int
	out []int
}

func (q Queue) dequeue() int {
	if len(q.out) == 0 {
		q.fillStackOut()
	}

	last := q.out[len(q.in)-1]
	q.out = q.out[:len(q.out)-1]
	return last
}

func (q Queue) peek() int {
	if len(q.out) == 0 {
		q.fillStackOut()
	}

	return q.out[len(q.in)-1]
}

func (q *Queue) enqueue(value int) {
	q.in = append(q.in, value)
}

func (q Queue) fillStackOut() {
	for len(q.in) > 0 {
		last := q.in[len(q.in)-1]
		q.in = q.in[:len(q.in)-1]
		q.out = append(q.out, last)
	}
}

func (q Queue) empty() bool {
	return len(q.in) == 0 && len(q.out) == 0
}
