type CommentType = any;

export const reshapeComments = (items: any[]) => {
  let feedbacks = [...items];
  const shouldBeRemove: string[] = [];
  for (let i = 0; i < feedbacks.length; ++i) {
    const feedback = feedbacks[i];
    if (feedback.childrenCount > 0) {
      feedback.children = [];
    }

    for (let j = 0; j < feedbacks.length; ++j) {
      if (feedbacks[j].parentId === feedback.id) {
        feedback.children.push(feedbacks[j]);
        shouldBeRemove.push(feedbacks[j].id);
      }
    }
  }

  feedbacks = feedbacks.filter(
    (item: CommentType) => !shouldBeRemove.includes(item.id)
  );
  return [{ allComment: feedbacks, hasNext: false }];
};
