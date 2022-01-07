let oReg = /\[|\(|\{/;
let cReg = /\]|\)|\}/;

let mapParenthesis = new Map<string, string>([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
]);

function isValid(str: string) {
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
console.log(isValid("[({})]"));
console.log(isValid("[]{}()"));
console.log(isValid("{()[]}"));
console.log(isValid("{()[}]"));
console.log(isValid("{()[]"));

let openingTagRegex = /<[a-zA-Z]+(>|.*?[^?]>)/;
let closingTagRegex = /<\/.+?>/;
let HtmlTagsRegex = /<(“[^”]*”|'[^’]*’|[^'”>])*>/g;

function isValidTags(tags: string) {
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

console.log("validate the HTMLTAGS");
console.log(isValidTags(`<div>f1</div><b><strong>f2</strong></b>`));
console.log(
  isValidTags(
    `<div>f1</div><b><span> span text content</span><p>csajcnasc <b>csacascas</b></p> <strong>f2</strong></b>`
  )
);

console.log(
  isValidTags(
    `<div>f1</div><b><span> span text content</span><p>csajcnasc <b>csacascas</b></p> <strong>f2</strong></b><div>`
  )
);
let openParenthesesRegex = /\(/;
let closeParenthesesRegex = /\)/;

function validateString(txt: string) {
  let stack: { char: string; pos: number }[] = [];
  let cloneText = txt;
  for (let i = 0; i < cloneText.length; ++i) {
    let char = txt[i];
    if (char === "(") {
      stack.push({ char, pos: i });
    }

    if (char === ")") {
      let openingParenthesis = stack.pop();
      if (!openingParenthesis) {
        txt
          .split("")
          .filter((char: string, index: number) => index === i)
          .join("");

        continue;
      }
    }
  }

  if (stack.length > 0) {
    for (let i = 0; i < stack.length; ++i) {
      let { pos } = stack[i];
      txt
        .split("")
        .filter((char: string, index: number) => pos === index)
        .join("");
    }
  }

  return txt;
}

console.log(validateString(`a)bc(d)`));
console.log(validateString(`(ab(c)d`));
console.log(validateString(`))((`));
