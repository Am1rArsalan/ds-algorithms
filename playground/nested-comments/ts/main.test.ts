import {
  comments,
  reshapedComments,
  smallComments,
  reshapedSmallComments,
  feedbacks,
  reshapedFeedbacks,
} from "./comments.po";
import { findAndReshape, findAndReshapeFeedbacks } from "./main";

describe("test", () => {
  xit("reshape comments first solution", () => {
    const result = findAndReshape(comments);
    expect(result).toEqual(reshapedComments);
  });

  xit("reshape comments second solution with array of 3 elements", () => {
    const result = findAndReshape(smallComments);
    expect(result).toEqual(reshapedSmallComments);
  });

  it("reshape feedbacks ", () => {
    const result = findAndReshapeFeedbacks(feedbacks);
    console.log(JSON.stringify(result, null, 2));
    expect(result).toEqual(reshapedFeedbacks);
  });
});
