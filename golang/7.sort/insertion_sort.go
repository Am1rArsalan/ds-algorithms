package main

import "reflect"

// o(N^2)
func InsertionSort(arr *[]int) {
    sf := reflect.Swapper(*arr) ; 

    if len(*arr) < 2 { 
        return ; 
    }

    for i:=0 ; i < len(*arr) ; i = i + 1 { 
        KI := i + 1 ; 
        if KI >= len(*arr) { 
            break ;
        }
        K := (*arr)[KI] ;

        for j := KI - 1 ; j >= 0; j = j - 1 { 
            L := (*arr)[j] ; 

            if L > K { 
                sf(KI , j) ; 
                KI = KI - 1 ; 
                K = (*arr)[KI] ; 
            }
        }
    }
}
