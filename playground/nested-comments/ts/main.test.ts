import {
  comments,
  reshapedComments,
  smallComments,
  reshapedSmallComments,
} from "./comments.po";
import { findAndReshape } from "./main";

describe("test", () => {
  it("reshape comments second solution", () => {
    const result = findAndReshape(comments);
    expect(result).toEqual(reshapedComments);
  });

  it("reshape comments second solution with array of 3 elements", () => {
    const result = findAndReshape(smallComments);
    expect(result).toEqual(reshapedSmallComments);
  });
});
