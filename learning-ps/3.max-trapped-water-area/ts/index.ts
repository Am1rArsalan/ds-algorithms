export function solution(heights: number[]) {
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
///// test cases
//console.log(solution([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

export function opSolution(heights: number[]) {
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

export function calTrappedWater(heights: number[]) {
  let total = 0;
  let L = 0,
    R = heights.length - 1,
    maximumRight = heights[R],
    maximumLeft = heights[L];
  for (; L < R; ) {
    if (heights[L] > heights[R]) {
      if (maximumRight > heights[R]) {
        total = Math.abs(maximumRight - heights[R]);
      } else {
        maximumRight = heights[R];
      }
      --R;
    } else {
      if (maximumLeft > heights[L]) {
        total = maximumLeft - heights[L];
      } else {
        maximumLeft = heights[L];
      }
      ++L;
    }
  }
  return total;
}

// console.log(opSolution([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

export function opSolution2(heights: number[]) {
  let total = 0;
  let L = 0,
    R = heights.length - 1,
    maximumRight = heights[R],
    maximumLeft = heights[L];

  function updateMaximumRight() {
    if (maximumRight <= heights[R]) {
      maximumRight = heights[R];
    } else {
      total += maximumRight - heights[R];
    }
    --R;
  }

  function updateMaximumLeft() {
    if (maximumLeft <= heights[L]) {
      maximumLeft = heights[L];
    } else {
      total += maximumLeft - heights[L];
    }
    ++L;
  }

  for (; L < R; ) {
    if (heights[L] >= heights[R]) {
      updateMaximumRight();
    } else {
      updateMaximumLeft();
    }
  }

  return total;
}

//console.log(opSolution([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
