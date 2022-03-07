import { CommentType, FeedbackType } from "./index";

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
        id: "2.2",
        children: [],
        parentId: "2",
      },
      {
        id: "2.3",
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

export const feedbacks = [
  {
    id: "61e3f8feee45e9a72e1518d3",
    content: "son",
    childrenCount: 7,
    parentId: "61e3f8e6ee45e9a72e1518d2",
  },
  {
    id: "61e3f9f2ee45e9a72e1518d8",
    content: "last son",
    childrenCount: 2,
    parentId: "61e3f936ee45e9a72e1518d7",
  },
  {
    id: "61e3fa12ee45e9a72e1518d9",
    content: "last son of son",
    childrenCount: 1,
    parentId: "61e3f9f2ee45e9a72e1518d8",
  },
  {
    id: "61e3f91dee45e9a72e1518d5",
    content: "son of son of son",
    childrenCount: 5,
    parentId: "61e3f90dee45e9a72e1518d4",
  },
  {
    id: "61e3f90dee45e9a72e1518d4",
    content: "son of son",
    childrenCount: 6,
    parentId: "61e3f8feee45e9a72e1518d3",
  },
  {
    id: "61e3f928ee45e9a72e1518d6",
    content: "son of son of son of son",
    childrenCount: 4,
    parentId: "61e3f91dee45e9a72e1518d5",
  },
  {
    id: "61e3f936ee45e9a72e1518d7",
    content: "son of son of son of son of son",
    childrenCount: 3,
    parentId: "61e3f928ee45e9a72e1518d6",
  },
] as FeedbackType[];

export const reshapedFeedbacks = [
  {
    id: "61e3f8feee45e9a72e1518d3",
    content: "son",
    childrenCount: 7,
    parentId: "61e3f8e6ee45e9a72e1518d2",
    commentChildren: [
      {
        id: "61e3f90dee45e9a72e1518d4",
        content: "son of son",
        childrenCount: 6,
        parentId: "61e3f8feee45e9a72e1518d3",
        commentChildren: [
          {
            id: "61e3f91dee45e9a72e1518d5",
            content: "son of son of son",
            childrenCount: 5,
            parentId: "61e3f90dee45e9a72e1518d4",
            commentChildren: [
              {
                id: "61e3f928ee45e9a72e1518d6",
                content: "son of son of son of son",
                childrenCount: 4,
                parentId: "61e3f91dee45e9a72e1518d5",
                commentChildren: [
                  {
                    id: "61e3f936ee45e9a72e1518d7",
                    content: "son of son of son of son of son",
                    childrenCount: 3,
                    parentId: "61e3f928ee45e9a72e1518d6",
                    commentChildren: [
                      {
                        id: "61e3f9f2ee45e9a72e1518d8",
                        content: "last son",
                        childrenCount: 2,
                        parentId: "61e3f936ee45e9a72e1518d7",
                        commentChildren: [
                          {
                            id: "61e3fa12ee45e9a72e1518d9",
                            content: "last son of son",
                            childrenCount: 1,
                            parentId: "61e3f9f2ee45e9a72e1518d8",
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
];
