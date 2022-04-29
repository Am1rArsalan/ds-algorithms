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
