package rottenoranges

import (
	"log"
	"testing"
	"time"
)

func TestTimeToRotOranges(t *testing.T) {
	start := time.Now()
	result := rotOranges([][]int{
		{1, 1, 0, 0, 0},
		{2, 1, 0, 0, 0},
		{0, 0, 0, 1, 2},
		{0, 1, 0, 0, 1},
	})
	timeOfExecution := time.Since(start)
	log.Printf("1.rot oranges execution took %s", timeOfExecution)

	if result != -1 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", -1, result)
	}

	result = rotOranges([][]int{
		{0, 2, 1, 2, 2},
		{1, 1, 0, 2, 1},
		{1, 1, 1, 2, 2},
		{0, 2, 0, 2, 0},
	})
	if result != 2 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 2, result)
	}

	result = rotOranges([][]int{
		{2, 1, 1, 0, 0},
		{1, 1, 1, 0, 0},
		{0, 1, 1, 1, 1},
		{0, 1, 0, 0, 1},
	})
	if result != 7 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 7, result)
	}

	result = rotOranges([][]int{{}})
	if result != 0 {
		t.Errorf("Expected (%v) but got"+
			"  (%v)", 0, result)
	}
}
