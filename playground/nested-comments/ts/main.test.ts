import {
  comments,
  reshapedComments,
  smallComments,
  reshapedSmallComments,
} from "./comments.po";
import { reshapeComments, logRecursively, findAndReshape } from "./main";

describe("test", () => {
  xit("should pass", () => {
    const result = reshapeComments(comments);
    expect(result).toEqual(reshapedComments);
  });

  it("reshape comments second solution", () => {
    const result = findAndReshape(comments);
    expect(result).toEqual(reshapedComments);
  });

  it("reshape comments second solution with array of 3 elements", () => {
    console.log("😄");
    const result = findAndReshape(smallComments);
    expect(result).toEqual(reshapedSmallComments);
  });
});
