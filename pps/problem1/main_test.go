package main

import "testing"

func TestValidateWord(t *testing.T) {
	tests := []struct {
		name        string
		input       string
		expectedErr string
	}{
		{
			name:        "Valid input",
			input:       "hello",
			expectedErr: "",
		},

		{
			name:        "Invalid input",
			input:       "hi",
			expectedErr: "The word should have at least 3 chars",
		},

		{
			name:        "Valid input",
			input:       "band",
			expectedErr: "",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := ValidateWord(tt.input)
			if err != nil && err.Error() != tt.expectedErr {
				t.Errorf("Expected error to be %s but got %s", tt.expectedErr, err.Error())
			}
		})
	}
}
