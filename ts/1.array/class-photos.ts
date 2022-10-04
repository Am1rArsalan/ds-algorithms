// o(nlogn);
export function classPhotos(r: number[], b: number[]) {
    let canTakePhoto = true;
    r.sort((a:number,b:number) => a > b ? 1 : -1); 
    b.sort((a:number,b:number) => a > b ? 1 : -1); 

    let br: 'b' | 'r' ; 

    if (r[r.length - 1] > b[b.length -1])  { 
        br = 'r' ; 
    }else { 
        br = 'b' ; 
    }


    for (let i= r.length - 1 ; i>=0 ; i--) { 
        const mb = b[i] ; 
        const mr = r[i] ; 

        if (br == 'r' && mr <= mb) { 
            canTakePhoto = false ;
            break ;
        }else if (br == 'b' && mr >= mb){ 
            canTakePhoto = false ;
            break ;
        }
    }


    return canTakePhoto ;
}
