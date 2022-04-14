export function solution(str: string) {
    // o(n^2)
    let resultArr = [];
    for (let j = 0; j < str.length; ++j) {
        let charsArr = [];
        for (let i = 0; i < str.length; ++i) {
            let character = str[i];
            if (
                charsArr.findIndex((value: string) => value === character) ===
                -1
            ) {
                charsArr.push(character);
            } else {
                resultArr.push(charsArr.join(''));
            }
        }
    }

    // find the longest one ;
    let res = '';
    for (let i = 0; i < resultArr.length; ++i) {
        if (resultArr[i].length > res.length) {
            res = resultArr[i];
        }
    }

    return res.length;
}

//  decreasing the space complexity
export function solution2(str: string) {
    let max = 0;

    for (let i = 0; i < str.length; ++i) {
        let firstChar = str[i];
        let stack = [firstChar];
        for (let j = 0; j < str.length; ++j) {
            if (stack.findIndex((item) => item === str[j]) === -1) {
                stack.push(str[j]);
            } else {
                max = stack.join('').length > max ? stack.join('').length : max;
                break;
            }
        }
    }

    return max;
}

// find the longest length of the substring (using sliding window)
export function optimizedSolution(str: string) {
    let L = 0;
    let R = 0;
    let max = 0;
    let map: any = {};
    let counter = 0;

    while (R < str.length) {
        if (map[str[R]] && map[str[R]] < R) {
            map[str[R]] = R;
            R = ++L;
            if (counter > max) max = counter;
            counter = 0;
        } else {
            ++counter;
            map[str[R]] = R;
            ++R;
        }
    }

    return max;
}

// find the longest length of the substring
export function optimizedSolution2(str: string) {
    let L = 0;
    let R = 0;
    let max = 0;
    let map: any = {};

    while (R < str.length) {
        if (map[str[R]] >= L) {
            L = map[str[R]] + 1;
        }

        map[str[R]] = R;
        max = Math.max(max, R - L + 1);
        ++R;
    }

    return max;
}

export function findMaxSumOfTwoSeq(arr: number[]) {
    let leftPointer = 0;
    let rightPointer = 1;
    let sum = 0;
    let max = sum;

    while (rightPointer < arr.length) {
        sum = arr[leftPointer] + arr[rightPointer];

        if (sum > max) {
            max = sum;
        }

        ++leftPointer;
        ++rightPointer;
    }

    return max;
}
