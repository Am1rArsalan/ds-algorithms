

export function binarySearch(arr:number[],target:number) { 
    let mid = Math.floor((0 + (arr.length - 1)) / 2); 
    if ( mid === target ) {
        return mid; 
    }else if ( mid > target ) { 
        binarySearch(arr.splice(0,mid - 1),target) ;
    }else if ( mid < target ) { 
        binarySearch(arr.splice(mid+1, arr.length - 1),target) ;
    }else { 
        return  -1 ; 
    }
}
