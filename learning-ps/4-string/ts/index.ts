export function generateString(str: string): string {
  let resultArray: string[] = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== "#") {
      resultArray.push(str[i]);
    } else {
      resultArray.pop();
    }
  }
  return resultArray.join("");
}

export function compareTwoString(S: string, T: string) {
  return generateString(S) === generateString(T);
}
