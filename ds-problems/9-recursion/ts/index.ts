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

(function run(){
    const arr = [7,1,3,5,2,6,4]; 
    quickSort(arr, 0 ,arr.length - 1) ; 
    console.log("sorted array is " , arr) ; 
}())


//[1,3,2,4,7,6,5]; 
//       p
