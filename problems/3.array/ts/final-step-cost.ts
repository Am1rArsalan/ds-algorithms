//  bottom up
export function findMinimumCost(costs: number[]) {
    const memoizedCosts = new Map<number, number>();
    memoizedCosts.set(0, costs[0]);
    memoizedCosts.set(1, costs[1]);
    return findMin(costs, 0, memoizedCosts);
}

function findMin(
    costs: number[],
    i: number,
    memoizedCosts: Map<number, number>
): number {
    if (i >= costs.length) return 0;
    if (i === 0 || i === 1) return costs[i];
    if (memoizedCosts.has(i)) return memoizedCosts.get(i) as number;

    memoizedCosts.set(
        i,
        Math.min.apply(null, [
            findMin(costs, i - 1, memoizedCosts),
            findMin(costs, i - 2, memoizedCosts),
        ])
    );

    return memoizedCosts.get(i) as number;
}

// bottom up ( iterative )
export function findMinimumCost2(costs: number[]) {
    const memoizedCosts = new Map<number, number>();
    const n = costs.length;

    for (let step = 0; step < n; step++) {
        if (step == 0 || step == 1) {
            memoizedCosts.set(step, costs[step]);
        } else {
            memoizedCosts.set(
                step,
                Math.min.apply(null, [
                    costs[step] + (memoizedCosts.get(step - 1) as number),
                    costs[step] + (memoizedCosts.get(step - 2) as number),
                ])
            );
        }
    }

    return Math.min.apply(null, [
        memoizedCosts.get(n - 1) as number,
        memoizedCosts.get(n - 2) as number,
    ]);
}

export function findMinimumCost3(costs: number[]) {
    const n = costs.length;
    let memoizedCostOfOne = costs[0];
    let memoizedCostOfTwo = costs[1];

    for (let step = 2; step < n; step++) {
        const current =
            costs[step] +
            Math.min.apply(null, [memoizedCostOfOne, memoizedCostOfTwo]);
        memoizedCostOfOne = memoizedCostOfTwo;
        memoizedCostOfTwo = current;
    }

    return Math.min.apply(null, [memoizedCostOfOne, memoizedCostOfTwo]);
}

//  top down
export function costToFinalStep(steps: number[]) {
    const memoizedCosts = new Map<number, number>();
    const result = Math.min.apply(null, [
        calStepsCost(steps, steps.length - 1, memoizedCosts), //
        calStepsCost(steps, steps.length - 2, memoizedCosts),
    ]);

    return result;
}

// o(n)
function calStepsCost(
    steps: number[],
    t: number,
    memoizedCosts: Map<number, number>
): number {
    if (t < 0 && steps[t] === undefined) return 0;
    if (t === 0 || t === 1) return steps[t];
    if (memoizedCosts.has(t)) {
        return memoizedCosts.get(t) as number;
    }

    memoizedCosts.set(
        t,
        steps[t] +
            Math.min.apply(null, [
                calStepsCost(steps, t - 1, memoizedCosts),
                calStepsCost(steps, t - 2, memoizedCosts),
            ])
    );

    return memoizedCosts.get(t) as number;
}

//
export function costToFinalStep2(steps: number[]) {
    const result = Math.min.apply(null, [
        calStepsCost2(steps, steps.length - 1), //
        calStepsCost2(steps, steps.length - 2),
    ]);

    return result;
}

function calStepsCost2(steps: number[], t: number): number {
    // o(n^2)
    if (t < 0 && steps[t] === undefined) return 0;
    if (t === 0 || t === 1) return steps[t];

    const minimum =
        steps[t] +
        Math.min.apply(null, [
            calStepsCost2(steps, t - 1),
            calStepsCost2(steps, t - 2),
        ]);

    return minimum;
}

//finding cost with memoizing(top down) -0.0777
//finding cost without memoizing (top down) -0.0673
//finding cost with iterative solution (bottom up) -0.0774
