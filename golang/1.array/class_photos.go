package main

import "sort"

func ClassPhotos(b, r []int) bool {
    canTakePhoto := true
    sort.Ints(b)
    sort.Ints(r)

    br := 'b' 

    if r[len(r) - 1] > b[len(b) - 1] { 
        br = 'r' 
    }


    for i:=len(r) - 1 ; i > -1 ; i-- { 
        mr := r[i] 
        mb := b[i]


        if br == 'b' && mr >= mb { 
            canTakePhoto = false ;
            break; 
        } else if br == 'r' && mb >= mr{ 
            canTakePhoto = false ;
            break; 
        }
    }

    return canTakePhoto; 
}
