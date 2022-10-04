// o(nlogn)
export function findMinimumWatingTime(q : number[]) :number { 
    q.sort((a:number , b:number) => a > b ? 1 : -1 );
    let wt = 0 ; 

    for (let i=0 ; i<q.length ; i++) { 
        let ql = q.length - i - 1 ; 
        wt += q[i] * ql ;
    }

    return wt;
}
