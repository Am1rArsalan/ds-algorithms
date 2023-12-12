package main

import (
	"testing"

	"github.com/AmirAhmadzadeh/problems/binary_search"
)

func main() {
	// Run the benchmarks
	testing.Benchmark(binary_search.BenchmarkBinarySearch)
	testing.Benchmark(binary_search.BenchmarkBinarySearch2)
}
