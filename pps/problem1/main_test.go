package main

import "testing"

func TestValidateWord(t *testing.T) {
	tests := []struct {
		name           string
		input          string
		expectedResult bool
	}{
		{
			name:           "Valid input",
			input:          "because",
			expectedResult: true,
		},

		{
			name:           "Invalid input",
			input:          "hi",
			expectedResult: false,
		},
		{
			name:           "Invalid input",
			input:          "table",
			expectedResult: false,
		},
		{
			name:           "Invalid input",
			input:          "break",
			expectedResult: false,
		},
		{
			name:           "Valid input",
			input:          "cafe",
			expectedResult: true,
		},
		{
			name:           "Valid input",
			input:          "healer",
			expectedResult: true,
		},
		{
			name:           "Valid input",
			input:          "coin",
			expectedResult: true,
		},
		{
			name:           "Valid input",
			input:          "bison",
			expectedResult: true,
		},
		{
			name:           "Valid input",
			input:          "space",
			expectedResult: true,
		},
		{
			name:           "Valid input",
			input:          "clone",
			expectedResult: true,
		},
		{
			name:           "Valid input",
			input:          "caution",
			expectedResult: true,
		},
		{
			name:           "Valid input",
			input:          "charge",
			expectedResult: true,
		},
		{
			name:           "Invalid input",
			input:          "leader",
			expectedResult: false,
		},
		{
			name:           "Valid input",
			input:          "bond",
			expectedResult: true,
		},
		{
			name:           "Invalid input",
			input:          "hand",
			expectedResult: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := ValidateWord(tt.input)
			if result != tt.expectedResult {
				t.Errorf("this input %+v is not valid", tt.input)
			}
		})
	}
}
