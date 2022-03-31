let oReg = /\[|\(|\{/;

let mapParenthesis = new Map<string, string>([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
]);

export function isValid(str: string) {
    str = str.trim();
    if (str?.length === 0) {
        return true;
    }
    let stack = [];
    let i = 0;
    while (i < str.length) {
        if (oReg.test(str[i])) {
            stack.push(str[i]);
        } else {
            let leftParenthesis = stack.pop();
            let correctMatch = mapParenthesis.get(
                leftParenthesis as string
            ) as string;
            if (correctMatch !== str[i]) {
                return false;
            }
        }
        ++i;
    }
    return stack.length === 0;
}
