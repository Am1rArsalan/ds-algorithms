package main

import "fmt"

func main() {
	isPrime(10)


}

func isPrime(x int) {
	// x = 10
	count := 0; //0 

	for i:=2; i < x; i+=1 { 
		if x % i == 0 { 
			count += 1; // count = 2
		}
	}




	if count > 0 { 
		fmt.Println("the number is prime")
	}

	fmt.Println("the number is not prime");
}



