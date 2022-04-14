export function validateString(txt: string) {
    let stack = [];

    for (let i = 0; i < txt.length; ++i) {
        let char = txt[i];

        if (char == '(') {
            stack.push([char, i]);
            continue;
        }

        if (char == ')' && stack.length == 0) {
            txt = txt.substring(0, i) + txt.substring(i + 1, txt.length);
            i--;
            continue;
        }

        if (char == ')' && stack.length > 0) {
            stack.pop();
        }
    }

    for (let i = 0; i < stack.length; i++) {
        let [_, index] = stack.pop() as [string, number];
        i--;
        txt = txt.substring(0, +index) + txt.substring(+index + 1, txt.length);
    }

    return txt;
}
