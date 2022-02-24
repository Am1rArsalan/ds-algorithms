import { compareTwoString, generateString } from "./index";
import { describe, it, assert } from "vitest";

describe("problem 4", () => {
  it("should compare two strings", () => {
    assert.equal(compareTwoString("axeqq#a", "asexq#a"), false);
    assert.equal(compareTwoString("axeqq#a", "axeqW#a"), true);
  });

  it("generate string helper should remove the character before '#'", () => {
    assert.equal(generateString("axeqq#a"), "axeqa");
    assert.equal(generateString("asexq#a"), "asexa");
    assert.equal(generateString("axeqq#a"), "axeqa");
    assert.equal(generateString("axeqW#a"), "axeqa");
  });
});
