import { comments, reshapedComments } from "./comments.po";
import { reshapeComments } from "./main";

describe("test", () => {
  it("should pass", () => {
    expect(reshapeComments(comments)).toEqual(reshapedComments);
  });
});
