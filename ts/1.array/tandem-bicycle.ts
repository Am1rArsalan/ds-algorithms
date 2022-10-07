function compare(max: boolean, a: number, b: number) {
    if (max) {
        return a > b ? a : b;
    }
    return a > b ? b : a;
}

export function tandemBicycle(
    rs: number[],
    bs: number[],
    max: boolean
): number {
    rs.sort((a, b) => (a > b ? 1 : -1));
    bs.sort((a, b) => (a > b ? 1 : -1));
    let speed = 0;

    for (let i = 0; i < rs.length; ++i) { 
        const bv = bs[bs.length - 1 - i];
        const rv = rs[i];

        speed += compare(max, rv, bv);
    }

    return speed;
}
