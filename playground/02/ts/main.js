"use strict";
exports.__esModule = true;
var readline = require("readline");
function renderKhayamPascal(n) {
  /// it's not important
  if (n < 1 || n > 100) throw "Bad Input";
  /// space o(n^2)
  var khayam = Array.from({ length: n }, function mapFn(value, index) {
    return Array(index + 1).fill(0);
  });
  ///// time o(n^2)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j <= i; j++) {
      if (i === 0 || j == 0) khayam[i][j] = 1;
      else if (i === j) khayam[i][j] = 1;
      else {
        khayam[i][j] = khayam[i - 2][j - 1] + khayam[i - 1][j];
      }
    }
  }

  for (
    var i = 0;
    i < (khayam === null || khayam === void 0 ? void 0 : khayam.length);
    i++
  ) {
    var row = khayam[i];
    console.log(row.join(" "));
  }
}
var rl = readline.createInterface(process.stdin, process.stdout);
rl.on("line", function (line) {
  renderKhayamPascal(parseInt(line));
  rl.close();
}).on("close", function () {
  process.exit(0);
});
