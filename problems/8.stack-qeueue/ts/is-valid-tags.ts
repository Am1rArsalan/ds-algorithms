let openingTagRegex = /<[a-zA-Z]+(>|.*?[^?]>)/;
let closingTagRegex = /<\/.+?>/;
let HtmlTagsRegex = /<(“[^”]*”|'[^’]*’|[^'”>])*>/g;

export function isValidTags(tags: string) {
    let tgs = tags.match(HtmlTagsRegex) || [];
    if (tgs.length === 0) return true;
    let stack = [];

    for (let i = 0; i < tgs?.length; ++i) {
        if (openingTagRegex.test(tgs[i])) {
            stack.push(tgs[i]);
        } else if (closingTagRegex.test(tgs[i])) {
            let openingTag = stack.pop() as string;
            if (
                openingTag.substring(
                    openingTag.indexOf('<') + 1,
                    openingTag.indexOf('>') - 1
                ) !==
                tgs[i].substring(
                    tgs[i].indexOf('/') + 1,
                    tgs[i].indexOf('>') - 1
                )
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
