import * as readline from "readline";

function generateKhayam(n: number): number[][] {
  /// it's not important
  if (n < 1 || n > 100) throw "Bad Input";

  let khayam = Array.from(
    { length: n },
    function mapFn(value: any, index: number) {
      return Array(index + 1).fill(0);
    }
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === 0 || j == 0) khayam[i][j] = 1;
      else if (i === j) khayam[i][j] = 1;
      else {
        khayam[i][j] = khayam[i - 2][j - 1] + khayam[i - 1][j];
      }
    }
  }

  return khayam;
}

function renderKhayam(khayam: number[][]) {
  for (let i = 0; i < khayam?.length; i++) {
    let row = khayam[i];
    console.log(row.join(" "));
  }
}

const rl = readline.createInterface(process.stdin, process.stdout);
rl.on("line", function (line) {
  const res = generateKhayam(parseInt(line));
  renderKhayam(res);
  rl.close();
}).on("close", function () {
  process.exit(0);
});
