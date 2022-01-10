import { isValid, isValidTags, validateString } from "../main";

describe("test the problem", () => {
  // this problem will check that the
  // input string is valid or not
  // valid string contains closing parenthesis
  // or brace for each opening one
  describe("isValid problem", () => {
    test("should pass the test", () => {
      expect(true).toBe(true);
      expect(isValid("[({})]")).toBe(true);
      expect(isValid("[]{}()")).toBe(true);
      expect(isValid("{()[]}")).toBe(true);
      expect(isValid("{()[}]")).toBe(true);
      expect(isValid("{()[]")).toBe(false);
    });
  });

  // this problem will check that the
  // input html tags is valid or not
  // valid html tags is a sequence of
  // tags with opening and closing tags
  describe("is valid html tag problem", () => {
    test("should pass the test", () => {
      expect(true).toBe(true);
      expect(isValidTags(`<div>f1</div><b><strong>f2</strong></b>`)).toBe(true);

      expect(
        isValidTags(
          `<div>f1</div><b><span> span text content</span><p>csajcnasc <b>csacascas</b></p> <strong>f2</strong></b>`
        )
      ).toBe(true);

      expect(
        isValidTags(
          `<div>f1</div><b><span> span text content</span><p>csajcnasc <b>csacascas</b></p> <strong>f2</strong></b><div>`
        )
      ).toBe(false);
    });
  });

  describe("validate string problem", () => {
    test("should pass the test", () => {
      expect(true).toBe(true);
    });
  });
});
