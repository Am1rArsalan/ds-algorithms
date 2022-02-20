import { compareTwoString, generateString } from "./index";

describe("problem 4", () => {
  test("should compare two strings", () => {
    expect(compareTwoString("axeqq#a", "asexq#a")).toBe(false);
    expect(compareTwoString("axeqq#a", "axeqW#a")).toBe(true);
  });

  test("generate string helper should remove the character before '#'", () => {
    expect(generateString("axeqq#a")).toBe("axeqa");
    expect(generateString("asexq#a")).toBe("asexa");
    expect(generateString("axeqq#a")).toBe("axeqa");
    expect(generateString("axeqW#a")).toBe("axeqa");
  });
});
