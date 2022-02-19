module.exports = {
  displayName: "reports",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  //testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  //testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
