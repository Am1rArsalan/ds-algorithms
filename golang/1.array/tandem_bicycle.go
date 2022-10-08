package main

import "sort"

func compare(mx bool, a,b int) int {
    if mx { 
        if a > b { 
            return a 
        }

        return b
    }

    if a > b { 
        return b
    }

    return a
}

func TandemBicycle(rs, bs []int, mx bool) int {
    sort.Ints(rs)
    sort.Ints(bs)
    S := 0


    for i:=0; i < len(rs) ; i++ { 
        rsv := rs[i] 
        bsv := bs[len(bs) -1 - i]
        
        S += compare(mx, rsv, bsv)

    }

    return S 
}
