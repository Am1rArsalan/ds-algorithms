import { binarySearch } from "./index" ; 

describe("binary search", () => {
    test("find 5 in the array" , () => { 
        let arr = [1,2,3,4,5,6] ;
        expect(binarySearch(arr,5)).toEqual(4) ; 
        expect(binarySearch(arr,6)).toEqual(5) ; 
        expect(binarySearch(arr,3)).toEqual(2) ; 
        expect(binarySearch(arr,8)).toEqual(-1) ; 
    })
});
