/// problem  4 : Strings

// how abstract thinking comes with the strings ?
// desc : we are given to strings T and S , return when they are equal
// when both are typed out Any hashtag that appears in the string
// counts as a backspace
//  example : axeqq#a  asexq#a
//            axeqa  ===  asexa result : false
//  example-2  : axeqq#a  axeqW#a
//  solution-2 : axeqa  axeqa => res true ;

function generateString(str: string): string {
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

function compareTwoString(S: string, T: string) {
  let SRes: string = generateString(S);
  let TRes: string = generateString(T);

  return SRes === TRes;
}

//console.log(compareTwoString("ax#c", "amir is g#x"));
//console.log(compareTwoString("ax#c", "ag#c"));

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(msg: string) {
  return new Promise((resolve) => {
    return rl.question(msg, resolve);
  });
}

(async function main() {
  let S = (await ask("Enter S : ")) as string;
  let T = (await ask("Enter T : ")) as string;
  if (compareTwoString(S as string, T as string)) {
    console.log("locky");
  } else {
    console.log("not locky");
  }
  rl.close();
})();
