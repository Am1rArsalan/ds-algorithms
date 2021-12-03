var readline = require("readline");
var rl = readline.createInterface({
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

function compute() {
  let upDisk = disks[1];
  let downDisk = disks[2];

  for (let direction = 0; direction < 4; ++direction) {
    for (let i = 0; i < 5; i++) {
      let upClone = [...upDisk];
      if (direction === 0 || direction === 3) {
        for (let k = 0; k < i; k++) {
          const poped = upClone.pop();
          upClone.unshift(poped);
        }
      } else if (direction === 1 || direction === 2) {
        for (let k = 0; k < i; k++) {
          const poped = upClone.shift();
          upClone.push(poped);
        }
      }

      let up = upClone.splice(1, 3).map((item) => parseInt(item));
      for (let j = 0; j < 5; j++) {
        let dClone = [...downDisk];
        if (direction === 0 || direction === 2) {
          for (let k = 0; k < j; k++) {
            const poped = dClone.pop();
            dClone.unshift(poped);
          }
        } else if (direction === 1 || direction === 3) {
          for (let k = 0; k < j; k++) {
            const poped = dClone.shift();
            dClone.push(poped);
          }
        }

        let down = dClone.splice(1, 3).map((item) => parseInt(item));
        let result = sum(up, down);

        if (result % 6 === 0) {
          return console.log(`Boro joloo :)`);
        }
      }
    }
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
