export function isValidPalindrome(text: string) {
    text = text.replaceAll(/[^a-zA-Z\d]/g, '').toLowerCase();

    let left = 0;
    let right = text.length - 1;
    let isPalindrome = true;

    while (left <= right) {
        if (text[left] !== text[right]) {
            isPalindrome = false;
            break;
        }

        left += 1;
        right -= 1;
    }

    return isPalindrome;
}

export function isValidPalindrome2(text: string) {
    text = text.replaceAll(/[^a-zA-Z\d]/g, '').toLowerCase();
    let isPalindrome = true;
    let right = Math.floor(text.length / 2);
    let left = text.length % 2 != 0 ? right : right - 1;

    while (left >= 0 && right < text.length) {
        if (text[left] !== text[right]) {
            isPalindrome = false;
            break;
        }

        left -= 1;
        right += 1;
    }

    return isPalindrome;
}

export function isValidPalindrome3(text: string) {
    text = text.replaceAll(/[^a-zA-Z\d]/g, '').toLowerCase();

    let right = Math.floor(text.length / 2);
    let left = text.length % 2 != 0 ? right : right - 1;
    let rightPart = text.substring(right, text.length);
    let leftPart = text.substring(0, left + 1);
    let isPalindrome = true;

    for (let i = 0; i < leftPart.length; i++) {
        let leftChar = leftPart[i];
        let rightChar = rightPart[rightPart.length - 1 - i];

        if (leftChar !== rightChar) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}
