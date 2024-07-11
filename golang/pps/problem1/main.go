package main

import (
	"encoding/json"
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
var elementsMap map[string]Element

func loadPeriodicData() {
	elementsMap = make(map[string]Element)

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

	for _, element := range elements {
		elementsMap[strings.ToLower(element.Symbol)] = element
	}

}

func main() {
	loadPeriodicData()

	input := readUserInput()
	log.Println("The word you entered is: ", input)

	ValidateWord(input)
}

// slices util
func includes[T comparable](array []T, element T) bool {
	for _, v := range array {
		if v == element {
			return true
		}
	}
	return false
}

func readUserInput() string {
	var input string
	fmt.Print("Enter a word: ")
	fmt.Scan(&input)
	return input
}

func findCandidates(input string) []string {
	oneLetterSymbols := []string{}
	twoLetterSymbols := []string{}

	for i := 0; i < len(input); i++ {
		// collect the one letter symbols candidates
		letter := string(input[i])
		if _, ok := elementsMap[letter]; ok && !includes(oneLetterSymbols, letter) {
			oneLetterSymbols = append(oneLetterSymbols, letter)
		}

		// collect the two letter symbols candidates
		if i <= len(input)-2 {
			two := input[i : i+2]
			if _, ok := elementsMap[two]; ok && !includes(twoLetterSymbols, two) {
				twoLetterSymbols = append(twoLetterSymbols, two)
			}
		}

	}

	return append(twoLetterSymbols, oneLetterSymbols...)
}

func spellCheck(candidates []string, charsLeft string) []string {
	if len(charsLeft) == 0 {
		return []string{}
	}

	// 2 letters elements
	if len(charsLeft) >= 2 {
		two := charsLeft[:2]
		rest := charsLeft[2:]

		// found a match
		if includes(candidates, two) {
			// is there any letter left or not
			if len(rest) > 0 {
				res := spellCheck(candidates, rest)
				if strings.Join(res, "") == rest {
					return append([]string{two}, res...)
				}

			} else {
				return []string{two}
			}
		}
	}

	// one letter elements
	if len(charsLeft) > 0 {
		one := string(charsLeft[0])
		rest := charsLeft[1:]

		if includes(candidates, one) {
			if len(rest) > 0 {
				res := spellCheck(candidates, rest)
				if strings.Join(res, "") == rest {
					return append([]string{one}, res...)
				}
			} else {
				return []string{one}
			}

		}
	}

	return []string{}
}

func check(input string) []string {
	candidates := findCandidates(input)
	return spellCheck(candidates, input)
}

func ValidateWord(input string) bool {
	loadPeriodicData()

	if len(input) < 3 {
		return false
	}

	result := check(input)

	if strings.Join(result, "") == input {
		return true
	}

	return false
}
