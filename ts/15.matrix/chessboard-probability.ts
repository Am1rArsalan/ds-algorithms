const knightMovements = [
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, 2],
    [2, 1],
    [1, -2],
    [2, -1],
];

function checkExistence(num: number, n: number) {
    return num < n && num >= 0;
}

export function calculateStepProperty(r: number, c: number, n: number) {
    let count = 0;
    for (let i = 0; i < knightMovements.length; i++) {
        const direction = knightMovements[i];
        let row = r + direction[0];
        let col = c + direction[1];
        if (checkExistence(row, n) && checkExistence(col, n)) {
            count += 1;
        }
    }

    return count / n;
}

// k : number of knight moves
export function calculateProbability(
    n: number,
    k: number,
    r: number,
    c: number
): number {
    let p = 0;
    const probabilities = [];

    for (let j = 0; j < k; j++) {
        for (let i = 0; i < knightMovements.length; i++) {
            const direction = knightMovements[i];
            let row = r + direction[0];
            let col = c + direction[1];

            if (checkExistence(row, n) && checkExistence(col, n)) {
                probabilities.push(calculateStepProperty(row, col, n));
            }
        }
    }

    p = probabilities.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    return p / 8;
}
