const KnightMovements = [
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, 2],
    [2, 1],
    [1, -2],
    [2, -1],
];

/// top down
function memoizedKp(
    k: number,
    r: number,
    c: number,
    n: number,
    memoizedData: number[][][]
) {
    if (r >= n || r < 0 || c >= n || c < 0) {
        return 0;
    } else if (k == 0) {
        return 1;
    } else if (memoizedData[k][r][c] != -1) {
        return memoizedData[k][r][c];
    }

    let p = 0;

    for (let i = 0; i < KnightMovements.length; i++) {
        p +=
            memoizedKp(
                k - 1,
                KnightMovements[i][0] + r,
                KnightMovements[i][1] + c,
                n,
                memoizedData
            ) / 8;
    }

    memoizedData[k][r][c] = p;

    return memoizedData[k][r][c];
}

export function memoizedCalculateProbability(
    n: number,
    k: number,
    r: number,
    c: number
): number {
    return memoizedKp(
        k,
        r,
        c,
        n,
        Array(k + 1)
            .fill(-1)
            .map(() =>
                Array(n)
                    .fill(-1)
                    .map(() => Array(n).fill(-1))
            )
    );
}

function kp(k: number, r: number, c: number, n: number) {
    if (r >= n || r < 0 || c >= n || c < 0) {
        return 0;
    } else if (k == 0) {
        return 1;
    }

    let p = 0;

    for (let i = 0; i < KnightMovements.length; i++) {
        p +=
            kp(k - 1, KnightMovements[i][0] + r, KnightMovements[i][1] + c, n) /
            8;
    }

    return p;
}

export function calculateProbability(
    n: number,
    k: number,
    r: number,
    c: number
): number {
    return kp(k, r, c, n);
}

// bottom up ( iterative )
//function calculateProbabilityTopDown(
//k: number,
//r: number,
//c: number,
//n: number
//) {
//const memoizedData = Array(k + 1)
//.fill(-1)
//.map(() =>
//Array(n)
//.fill(-1)
//.map(() => Array(n).fill(-1))
//);

//const queue = [[r, c]];

//while (k > 0) {
//while (queue.length > 0) {
//const current = queue.shift() as [number, number];
//const row = current[0];
//const col = current[1];

//for (let j = 0; j < KnightMovements.length; j++) {
//const dr = KnightMovements[j][0] + row;
//const dc = KnightMovements[j][1] + col;

//if (dr >= 0 && dr < n && dc >= 0 && dc < n) {
//if (memoizedData[k][dr][dc] == -1) {
//memoizedData[k][dr][dc] =
//}
//}
//}
//}
//k--;
//}

//return memoizedData[k][r][c];
//}
