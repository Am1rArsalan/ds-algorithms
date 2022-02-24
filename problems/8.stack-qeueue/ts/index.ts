let oReg = /\[|\(|\{/;

let mapParenthesis = new Map<string, string>([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
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

/////////////////////////////////// problem 2

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
          openingTag.indexOf("<") + 1,
          openingTag.indexOf(">") - 1
        ) !== tgs[i].substring(tgs[i].indexOf("/") + 1, tgs[i].indexOf(">") - 1)
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/////////////////////////////////// problem 3
///////////// TODO :  add test case for this problem
let openParenthesesRegex = /\(/;
let closeParenthesesRegex = /\)/;

export function validateString(txt: string) {
  return "fjskalf";
}

/////////////////////
