package main

import (
	"math"
)

func squaredStoredArray(arr []int) []int {
    res := []int{} 
    for i:=0 ; i < len(arr) ; i++ { 
        res = append(res, 0); 
    }

    L := 0 
    R := len(arr) - 1 
    C := R 


    for L <= R && C >= 0  { 
        if math.Abs(float64(arr[L])) > math.Abs(float64(arr[R]))  { 
            res[C]  = int(math.Pow(float64(arr[L]), 2))
            L++; 
        }else { 
            res[C]  = int(math.Pow(float64(arr[R]), 2))
            R--; 
        }
        
        C--; 
    }

    return res ; 
}
