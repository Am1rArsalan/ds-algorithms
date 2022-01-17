import { CommentType } from "./main";

export const reshapedSmallComments = [
  {
    id: "1",
    children: [],
  },
  {
    id: "2",
    children: [
      {
        id: "2.1",
        parentId: "2",
        children: [
          {
            id: "2.1.1",
            parentId: "2.1",
            children: [],
          },
        ],
      },
      {
        id: "2.2",
        parentId: "2",
        children: [],
      },
    ],
  },
] as CommentType[];

export const smallComments = [
  {
    id: "1",
    children: [],
  },
  {
    id: "2",
    children: [],
  },
  {
    id: "2.1",
    parentId: "2",
    children: [],
  },
  {
    id: "2.1.1",
    parentId: "2.1",
    children: [],
  },
  {
    id: "2.2",
    parentId: "2",
    children: [],
  },
] as CommentType[];

export const comments = [
  {
    id: "1",
    children: [],
  },
  {
    id: "2",
    children: [],
  },
  {
    id: "2.1",
    parentId: "2",
    children: [],
  },
  {
    id: "2.2",
    parentId: "2",
    children: [],
  },
  {
    id: "2.3",
    parentId: "2",
    children: [],
  },
  {
    id: "2.4",
    parentId: "2",
    children: [],
  },
  {
    id: "2.1.1",
    parentId: "2.1",
    children: [],
  },
  {
    id: "2.1.1.1",
    parentId: "2.1.1",
    children: [],
  },

  {
    id: "2.1.1.1.1",
    parentId: "2.1.1.1",
    children: [],
  },

  {
    id: "2.1.1.1.1.1",
    parentId: "2.1.1.1.1",
    children: [],
  },

  {
    id: "2.1.1.1.1.1.1",
    parentId: "2.1.1.1.1.1",
    children: [],
  },
  {
    id: "3",
    children: [],
  },
  {
    id: "4",
    children: [],
  },
  {
    id: "5",
    children: [],
  },
  {
    id: "6",
    children: [],
  },
] as CommentType[];

export const reshapedComments = [
  {
    id: "1",
    children: [],
  },
  {
    id: "2",
    children: [
      {
        id: "2.1",
        parentId: "2",
        children: [
          {
            id: "2.1.1",
            parentId: "2.1",
            children: [
              {
                id: "2.1.1.1",
                parentId: "2.1.1",
                children: [
                  {
                    id: "2.1.1.1.1",
                    parentId: "2.1.1.1",
                    children: [
                      {
                        id: "2.1.1.1.1.1",
                        parentId: "2.1.1.1.1",
                        children: [
                          {
                            id: "2.1.1.1.1.1.1",
                            parentId: "2.1.1.1.1.1",
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
      {
        id: "2.3",
        children: [],
        parentId: "2",
      },
      {
        id: "2.2",
        children: [],
        parentId: "2",
      },
      {
        id: "2.4",
        children: [],
        parentId: "2",
      },
    ],
  },
  {
    id: "3",
    children: [],
  },
  {
    id: "4",
    children: [],
  },
  {
    id: "5",
    children: [],
  },
  {
    id: "6",
    children: [],
  },
] as CommentType[];
