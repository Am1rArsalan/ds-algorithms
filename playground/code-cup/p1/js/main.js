const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let disks = {};
let counterLines = 0;

function sum(up, down) {
  let first = up[0] + down[0];
  first = first > 9 ? first - 10 : first;

  let second = up[1] + down[1];
  second = second > 9 ? second - 10 : second;

  let third = up[2] + down[2];
  third = third > 9 ? third - 10 : third;

  return first * 100 + second * 10 + third;
}

function rotateLeft(arr) {
  const removed = arr.pop();
  arr.unshift(removed);
}

function rotateRight(arr) {
  const removed = arr.shift();
  arr.push(removed);
}

function compute() {
  let upDisk = disks[1];
  let downDisk = disks[2];

  for (let i = 0; i < 6; i++) {
    let upClone = [...upDisk];
    let up = upClone.splice(1, 3).map((item) => parseInt(item));
    for (let j = 0; j < 6; ++j) {
      let dClone = [...downDisk];
      let down = dClone.splice(1, 3).map((item) => parseInt(item));
      let result = sum(up, down);
      if (result % 6 === 0) {
        return console.log(`Boro joloo :)`);
      }
      rotateRight(dClone);
    }
    rotateLeft(upClone);
  }

  return console.log(`Gir oftadi :(`);
}

rl.on("line", function (line) {
  if (counterLines > 0) {
    disks[counterLines + 1] = line.split(" ");
    compute();
    rl.close();
  }
  ++counterLines;

  disks[counterLines] = line.split(" ");
});
