package main 

import "regexp"

func compareTwoString(str1, str2 string) bool {
	reg := regexp.MustCompile(".#")
	new1 := reg.ReplaceAllString(str1, "")
	new2 := reg.ReplaceAllString(str2, "")

	return new1 == new2
}
