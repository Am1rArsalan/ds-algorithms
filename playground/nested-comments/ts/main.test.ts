import { comments, reshapedComments } from "./comments.po";
import { reshapeComments, logRecursively, findAndReshape } from "./main";

describe("test", () => {
  xit("should pass", () => {
    //console.log("comments", JSON.stringify(comments, null, 2));
    const result = reshapeComments(comments);
    //console.log("reshaped comments", JSON.stringify(result, null, 2));
    expect(result).toEqual(reshapedComments);
  });

  it("reshape comments second solution", () => {
    const result = findAndReshape(comments);
    expect(result).toEqual(reshapedComments);
  });

  //
  it("reshape comments second solution with array of 3 elements", () => {
    const result = findAndReshape(comments);
    expect(result).toEqual(reshapedComments);
  });
});
