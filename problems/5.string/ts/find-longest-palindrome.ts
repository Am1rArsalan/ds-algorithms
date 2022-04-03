function checkPalindrome(str: string): boolean {
    if (str.length == 0) return true;
    let R = Math.floor(str.length / 2);
    let L = str.length % 2 === 0 ? R - 1 : R;
    let isPalindrome = true;

    while (R < str.length && L >= 0) {
        if (str[R] !== str[L]) {
            isPalindrome = false;
            break;
        }
        L--;
        R++;
    }

    return isPalindrome;
}

export function longestPalindrome(str: string): string {
    let max = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let temp = str.substring(i, j + 1);
            if (checkPalindrome(temp) && temp.length > max.length) {
                max = temp;
            }
        }
    }

    return max;
}
