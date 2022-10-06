package main

import "sort"

func ClassPhotos(b, r []int) bool {
    canTakePhoto := true
    sort.Ints(b)
    sort.Ints(r)
    LI := len(r) - 1;

    br := 'b' 

    if r[LI] > b[LI] { 
        br = 'r' 
    }


    for i:=LI ; i > -1 ; i-- { 
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
