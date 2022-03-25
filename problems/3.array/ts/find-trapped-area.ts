export function findTrappedArea(heights: number[]) {
    let total = 0;
    for (
        let currentPointer = 0;
        currentPointer < heights.length;
        ++currentPointer
    ) {
        let maxRight = 0,
            maxLeft = 0,
            rightPointer = currentPointer,
            leftPointer = currentPointer;

        while (rightPointer < heights.length) {
            maxRight = Math.max.apply(null, [maxRight, heights[rightPointer]]);
            ++rightPointer;
        }

        while (leftPointer >= 0) {
            maxLeft = Math.max.apply(null, [maxLeft, heights[leftPointer]]);
            --leftPointer;
        }

        const currentWater =
            Math.min.apply(null, [maxLeft, maxRight]) - heights[currentPointer];

        if (currentWater >= 0) {
            total += currentWater;
        }
    }
    return total;
}

export function findTrappedArea2(heights: number[]) {
    let total = 0;
    let L = 0,
        R = heights.length - 1,
        maximumRight = heights[R],
        maximumLeft = heights[L];

    for (; L < R; ) {
        if (heights[L] >= heights[R]) {
            if (maximumRight <= heights[R]) {
                maximumRight = heights[R];
            } else {
                total += maximumRight - heights[R];
            }
            --R;
        } else {
            if (maximumLeft <= heights[L]) {
                maximumLeft = heights[L];
            } else {
                total += maximumLeft - heights[L];
            }
            ++L;
        }
    }

    return total;
}
