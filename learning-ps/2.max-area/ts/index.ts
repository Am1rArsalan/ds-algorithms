export function solution(entry: number[]) {
  let maxArea = 0;
  for (let j = 0; j < entry.length; ++j) {
    for (let i = j + 1; i < entry.length; ++i) {
      let area = Math.abs(j - i) * Math.min.apply(null, [entry[i], entry[j]]);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  return maxArea;
}

export function opSolution(entry: number[]) {
  let maxArea = 0;
  let I = 0,
    J = entry.length - 1;

  while (I < J) {
    let height = Math.min.apply(null, [entry[I], entry[J]]);
    let width = Math.abs(I - J);
    let area = height * width;
    maxArea = Math.max.apply(null, [area, maxArea]);

    if (entry[I] <= entry[J]) {
      ++I;
    } else {
      --J;
    }
  }

  return maxArea;
}

export function opSolution2(entry: number[]) {
  let maxArea = 0;
  let I = 0,
    J = entry.length - 1;

  while (I < J) {
    maxArea = Math.max.apply(null, [
      Math.min.apply(null, [entry[I], entry[J]]) * Math.abs(I - J),
      maxArea,
    ]);

    if (entry[I] <= entry[J]) {
      ++I;
    } else {
      --J;
    }
  }

  return maxArea;
}
