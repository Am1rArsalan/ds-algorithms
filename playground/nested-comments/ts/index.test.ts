import {
  comments,
  reshapedComments,
  smallComments,
  reshapedSmallComments,
  feedbacks,
  reshapedFeedbacks,
} from "./comments.po";
import { findAndReshape, findAndReshapeFeedbacks } from "./index";

describe("test", () => {
  it("reshape comments first solution", () => {
    const result = findAndReshape(comments);
    expect(result).toEqual(reshapedComments);
  });

  it("reshape comments second solution with array of 3 elements", () => {
    const result = findAndReshape(smallComments);
    expect(result).toEqual(reshapedSmallComments);
  });

  it("reshape feedbacks ", () => {
    const result = findAndReshapeFeedbacks(feedbacks);
    expect(result).toEqual(reshapedFeedbacks);
  });
});
