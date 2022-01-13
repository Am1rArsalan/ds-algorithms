import { generateString, compareTwoString } from "./index";

// todo : write description for tests
describe("test the problem", () => {
  describe("max trapped water question problem", () => {
    test("should pass the test", () => {
      expect(compareTwoString("ax#c", "amir is g#x")).toBe(false);
      expect(compareTwoString("ax#c", "ag#c")).toBe(true);
    });

    test("generateString function should return a string", () => {
      // todo  : assers for generate string function
    });
  });
});
