module.exports = {
  displayName: "reports",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
