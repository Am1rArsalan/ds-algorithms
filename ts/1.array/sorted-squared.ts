export function sortedSquared(arr: number[]) {
    const res = Array(arr.length).fill(0) ; 
    let L = 0; 
    let R = arr.length - 1; 
    let C = R; 
 

    while (C >= 0 && L <= R) {
        if (Math.abs(arr[L]) > Math.abs(arr[R])) { 
            res[C] = Math.pow(arr[L],2) ;
            L++ ;
        }else { 
            res[C] = Math.pow(arr[R],2) ;
            R--; 
        }

        C--; 
    }

    return res;
}
