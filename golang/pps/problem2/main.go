package main

import "fmt"

// Constants for the size of the chessboard
const (
	boardSize = 8
)

// Board represents the chessboard
type Board struct {
	tiles [boardSize][boardSize]string
}

// NewBoard initializes a new chessboard
func NewBoard() *Board {
	board := &Board{}
	for i := 0; i < boardSize; i++ {
		for j := 0; j < boardSize; j++ {
			board.tiles[i][j] = "."
		}
	}
	return board
}

// Print displays the chessboard
func (b *Board) Print() {
	for i := 0; i < boardSize; i++ {
		for j := 0; j < boardSize; j++ {
			fmt.Print(b.tiles[i][j], " ")
		}
		fmt.Println()
	}
}

// GetDiagonals determines the major and minor diagonals for a given tile
func (b *Board) GetDiagonals(x, y int) ([]string, []string) {
	var majorDiagonal []string
	var minorDiagonal []string

	// Determine major diagonal
	for i, j := x, y; i >= 0 && j >= 0; i, j = i-1, j-1 {
		majorDiagonal = append(majorDiagonal, b.tiles[i][j])
	}
	for i, j := x+1, y+1; i < boardSize && j < boardSize; i, j = i+1, j+1 {
		majorDiagonal = append(majorDiagonal, b.tiles[i][j])
	}

	// Determine minor diagonal
	for i, j := x, y; i >= 0 && j < boardSize; i, j = i-1, j+1 {
		minorDiagonal = append(minorDiagonal, b.tiles[i][j])
	}
	for i, j := x+1, y-1; i < boardSize && j >= 0; i, j = i+1, j-1 {
		minorDiagonal = append(minorDiagonal, b.tiles[i][j])
	}

	return majorDiagonal, minorDiagonal
}

func main() {
	board := NewBoard()

	var x, y int
	var err error

	for {
		// Print the current state of the board
		board.Print()

		// Prompt the user for input
		fmt.Print("Enter the row and column of the tile (0-7), separated by a space: ")
		_, err = fmt.Scanf("%d %d", &x, &y)
		if err != nil {
			fmt.Println("Invalid input, please enter two integers between 0 and 7.")
			continue
		}

		// Validate the input
		if x < 0 || x >= boardSize || y < 0 || y >= boardSize {
			fmt.Println("Invalid position, please enter two integers between 0 and 7.")
			continue
		}

		// Find and print the diagonals
		majorDiagonal, minorDiagonal := board.GetDiagonals(x, y)
		fmt.Println("Major Diagonal:", majorDiagonal)
		fmt.Println("Minor Diagonal:", minorDiagonal)
	}
}
