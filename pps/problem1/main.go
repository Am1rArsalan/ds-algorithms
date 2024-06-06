package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"os"
	"strings"
)

type Element struct {
	Name   string
	Number int
	Symbol string
}

var elements []Element

func loadPeriodicData() {
	jsonFile, err := os.Open("./periodic-table.json")
	if err != nil {
		log.Fatal("cannot file the file")
	}
	defer jsonFile.Close()

	jsonFileBytes, err := io.ReadAll(jsonFile)
	if err != nil {
		log.Fatal("error ...")
	}

	json.Unmarshal(jsonFileBytes, &elements)
	if err != nil {
		log.Fatal("error in Unmarshaling")
	}
}

func main() {
	loadPeriodicData()

	input := readUserInput()
	log.Println("The word you entered is: ", input)

	err := ValidateWord(input)
	if err != nil {
		log.Printf("The entered input is not valid: %+v", err.Error())
		return
	}
}

func readUserInput() string {
	var input string
	fmt.Print("Enter a word: ")
	fmt.Scan(&input)
	return input
}

func ValidateWord(input string) error {
	if len(input) < 3 {
		return errors.New("The word should have at least 3 chars")
	}

	for _, element := range elements {
		es := strings.ToLower(element.Symbol)

		// element symbol is 2 letter
		if len(es) == 2 {
			// TODO:
		}

		if len(es) == 1 {
			// TODO:
		}
	}

	return nil
}
