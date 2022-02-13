import { isValid, isValidTags, validateString } from "./index";

describe("stack and queue problems", () => {
  test("problem one", () => {
    expect(isValid("{([])}")).toBe(true);
    expect(isValid("{([]")).toBe(false);
    expect(isValid("{[(])}")).toBe(false);
    expect(isValid("{[]()}")).toBe(false);
  });

  test("problem two", () => {
    expect(isValidTags(`<div>amir is here</div>`)).toBe(true);
    expect(
      isValidTags(`<div><p>p content </p><a> <span> link </span></a></div>`)
    ).toBe(true);

    expect(
      isValidTags(
        `<div><b><p>p content </p><a> <span> link </span></a></b></div>`
      )
    ).toBe(true);

    expect(
      isValidTags(`<section> 
          <p> <span> link </span></p>
          <div>
            <p>p content </p>
          <a> <span> link </span></a>
          <div>content</div>
          </section>`)
    ).toBe(false);
  });

  test("problem three", () => {
    expect(validateString(`a)bc(d)`)).toEqual(`abcd`);
    expect(validateString(`(ab(c)d`)).toEqual(`abcd`);
    expect(validateString(`))((`)).toEqual(``);
  });
});
