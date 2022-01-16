import { CommentType } from "./main";

export const smallComments = [
  {
    id: "1",
    content: "This is a comment",
    children: [],
  },
  {
    id: "2",
    content: "This is a comment",
    children: [],
  },
  {
    id: "2.1",
    content: "This is a comment",
    parentId: "2",
    children: [],
  },
  {
    id: "2.1.1",
    content: "This is a comment",
    parentId: "2.1",
    children: [],
  },
] as CommentType[];

export const comments = [
  {
    id: "1",
    content: "This is a comment",
    children: [],
  },
  {
    id: "2",
    content: "This is a comment",
    children: [],
  },
  {
    id: "2.1",
    content: "This is a comment",
    parentId: "2",
    children: [],
  },
  {
    id: "2.2",
    content: "This is a comment",
    parentId: "2",
    children: [],
  },
  {
    id: "2.3",
    content: "This is a comment",
    parentId: "2",
    children: [],
  },
  {
    id: "2.4",
    content: "This is a comment",
    parentId: "2",
    children: [],
  },
  {
    id: "2.1.1",
    content: "This is a comment",
    parentId: "2.1",
    children: [],
  },
  {
    id: "2.1.1.1",
    content: "This is a comment",
    parentId: "2.1.1",
    children: [],
  },

  {
    id: "2.1.1.1.1",
    content: "This is a comment",
    parentId: "2.1.1.1",
    children: [],
  },

  {
    id: "2.1.1.1.1.1",
    content: "This is a comment",
    parentId: "2.1.1.1.1",
    children: [],
  },

  {
    id: "2.1.1.1.1.1.1",
    content: "This is a comment",
    parentId: "2.1.1.1.1.1",
    children: [],
  },
  {
    id: "3",
    content: "This is a comment",
    children: [],
  },
  {
    id: "4",
    content: "This is a comment",
    children: [],
  },
  {
    id: "5",
    content: "This is a comment",
    children: [],
  },
  {
    id: "6",
    content: "This is a comment",
    children: [],
  },
] as CommentType[];

export const reshapedComments = [
  {
    id: "1",
    content: "This is a comment",
    children: [],
  },
  {
    id: "2",
    content: "This is a comment",
    children: [
      {
        id: "2.2",
        content: "This is a comment",
        children: [],
        parentId: "2",
      },
      {
        id: "2.3",
        content: "This is a comment",
        children: [],
        parentId: "2",
      },
      {
        id: "2.4",
        content: "This is a comment",
        children: [],
        parentId: "2",
      },
      {
        id: "2.1",
        parentId: "2",
        content: "This is a comment",
        children: [
          {
            id: "2.1.1",
            content: "This is a comment",
            parentId: "2.1",
            children: [
              {
                id: "2.1.1.1",
                content: "This is a comment",
                parentId: "2.1.1",
                children: [
                  {
                    id: "2.1.1.1.1",
                    content: "This is a comment",
                    parentId: "2.1.1.1",
                    children: [
                      {
                        id: "2.1.1.1.1.1",
                        content: "This is a comment",
                        parentId: "2.1.1.1.1",
                        children: [
                          {
                            id: "2.1.1.1.1.1.1",
                            parentId: "2.1.1.1.1.1",
                            content: "This is a comment",
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    content: "This is a comment",
    children: [],
  },
  {
    id: "4",
    content: "This is a comment",
    children: [],
  },
  {
    id: "5",
    content: "This is a comment",
    children: [],
  },
  {
    id: "6",
    content: "This is a comment",
    children: [],
  },
] as CommentType[];
