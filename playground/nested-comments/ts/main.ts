export type CommentType = {
  id: string;
  children?: CommentType[];
  parentId?: string;
};

export function reshapeChildren(
  items: CommentType[],
  parent: CommentType,
  depth: number = 6
): CommentType[] {
  let children: CommentType[] = [];

  while (depth > 0) {
    for (let i = 1; i < items.length; ++i) {
      let child = items[i];
      if (child.parentId === parent.id) {
        child = items.splice(i, 1)[0];
        children = reshapeChildren(items, child);
        if (parent?.children && parent?.children?.length > 0) {
          parent.children.push(child);
        } else {
          parent.children = [child];
        }
      }
    }
    --depth;
  }

  return children;
}

export function findAndReshape(comments: CommentType[]) {
  for (let i = 0; i < comments.length; ++i) {
    let children = reshapeChildren(comments, comments[i]);
  }

  return comments;
}
