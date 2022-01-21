export type CommentType = {
  id: string;
  children?: CommentType[];
  parentId?: string;
};

export function reshapeChildren(
  items: CommentType[],
  parent: CommentType
): CommentType[] {
  let children: CommentType[] = [];
  for (let i = 0; i < items.length; ++i) {
    let child = items[i];
    if (child.parentId === parent.id) {
      child = items.splice(i, 1)[0];
      --i;
      children = reshapeChildren(items, child);
      if (parent?.children && parent?.children?.length > 0) {
        parent.children.push(child);
      } else {
        parent.children = [child];
      }
    }
  }

  return children;
}

export function findAndReshape(comments: CommentType[]) {
  for (let i = 0; i < comments.length; ++i) {
    reshapeChildren(comments, comments[i]);
  }

  return comments;
}

export type FeedbackType = {
  id: string;
  content: string;
  childrenCount: number;
  parentId: string;
  commentChildren?: FeedbackType[];
};

export function reshapeFeedbackChildren(
  items: FeedbackType[],
  parent: FeedbackType
): FeedbackType[] {
  let children: FeedbackType[] = [];

  for (let i = 0; i < items.length; ++i) {
    let child = items[i];
    if (child.parentId === parent.id) {
      child = items.splice(i, 1)[0];
      --i;
      children = reshapeFeedbackChildren(items, child);
      if (parent.commentChildren && parent.commentChildren.length > 0) {
        parent.commentChildren.push(child);
      } else {
        parent.commentChildren = [child];
      }
    }
  }

  return children;
}

export function findAndReshapeFeedbacks(feedbacks: FeedbackType[]) {
  for (let i = 0; i < feedbacks.length; ++i) {
    reshapeFeedbackChildren(feedbacks, feedbacks[i]);
  }

  return feedbacks;
}
