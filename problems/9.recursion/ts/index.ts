// problem 1
export function swap(arr: number[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


export function partition(arr:number[], left:number, right:number) { 
    let pivot = arr[right] ; 
    let i = left - 1; 

    for ( let j = left ; j < right  ; ++j ) { 
        if (arr[j]  < pivot) { 
            ++i;
            swap(arr,i,j)  ;
        }
    }

    swap(arr,i+1,right) ;
    return i + 1; 
}

export function quickSort(arr: number[], left: number , right: number) {
    if ( left < right ) {
        let pivot = partition(arr,left,right);
        quickSort(arr,left,pivot-1) ; 
        quickSort(arr,pivot + 1,right) ; 
    } 
}

// problem 2 
export function returnKthLargestElement(arr:number[],k:number) { 
    quickSort(arr,0,arr.length - 1) ; 
    return arr[arr.length - k]; 
} 
