import { CommentType, FeedbackType } from "./main";

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

export const original = [
  {
    id: "61e3f8e6ee45e9a72e1518d2",
    type: "Comment",
    userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
    ipAddress: "192.168.1.1",
    topicId: "x1",
    tenant: "Zoomit",
    content: "grand father",
    childrenCount: 8,
    likesCount: 0,
    createdAt: "2022-01-16T10:52:22.7039947Z",
    modifiedAt: "2022-01-16T10:52:22.7039947Z",
    labels: [],
    status: ["Published"],
    user: [],
    commentChildren: [
      {
        id: "61e3f8feee45e9a72e1518d3",
        type: "Comment",
        userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
        ipAddress: "192.168.1.1",
        topicId: "x1",
        tenant: "Zoomit",
        topicName: "x1",
        content: "son",
        childrenCount: 7,
        likesCount: 0,
        createdAt: "2022-01-16T10:52:46.1744947Z",
        modifiedAt: "2022-01-16T10:52:46.1744947Z",
        labels: [],
        status: ["Published"],
        parentId: "61e3f8e6ee45e9a72e1518d2",
        score: 0,
      },
      {
        id: "61e3f9f2ee45e9a72e1518d8",
        type: "Comment",
        userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
        ipAddress: "192.168.1.1",
        topicId: "x1",
        tenant: "Zoomit",
        topicName: "x1",
        content: "last son",
        childrenCount: 2,
        likesCount: 0,
        createdAt: "2022-01-16T10:56:50.0351433Z",
        modifiedAt: "2022-01-16T10:56:50.0351433Z",
        labels: [],
        status: ["Published"],
        parentId: "61e3f936ee45e9a72e1518d7",
        score: 0,
      },
      {
        id: "61e3fa12ee45e9a72e1518d9",
        type: "Comment",
        userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
        ipAddress: "192.168.1.1",
        topicId: "x1",
        tenant: "Zoomit",
        topicName: "x1",
        content: "last son of son",
        childrenCount: 1,
        likesCount: 0,
        createdAt: "2022-01-16T10:57:22.7606729Z",
        modifiedAt: "2022-01-16T10:57:22.7606729Z",
        labels: [],
        status: ["Published"],
        parentId: "61e3f9f2ee45e9a72e1518d8",
        score: 0,
      },
      {
        id: "61e3f91dee45e9a72e1518d5",
        type: "Comment",
        userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
        ipAddress: "192.168.1.1",
        topicId: "x1",
        tenant: "Zoomit",
        topicName: "x1",
        content: "son of son of son",
        childrenCount: 5,
        likesCount: 0,
        createdAt: "2022-01-16T10:53:17.0162738Z",
        modifiedAt: "2022-01-16T10:53:17.0162738Z",
        labels: [],
        status: ["Published"],
        parentId: "61e3f90dee45e9a72e1518d4",
        score: 0,
      },
      {
        id: "61e3f90dee45e9a72e1518d4",
        type: "Comment",
        userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
        ipAddress: "192.168.1.1",
        topicId: "x1",
        tenant: "Zoomit",
        topicName: "x1",
        content: "son of son",
        childrenCount: 6,
        likesCount: 0,
        createdAt: "2022-01-16T10:53:01.2111885Z",
        modifiedAt: "2022-01-16T10:53:01.2111885Z",
        labels: [],
        status: ["Published"],
        parentId: "61e3f8feee45e9a72e1518d3",
        score: 0,
      },
      {
        id: "61e3f928ee45e9a72e1518d6",
        type: "Comment",
        userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
        ipAddress: "192.168.1.1",
        topicId: "x1",
        tenant: "Zoomit",
        topicName: "x1",
        content: "son of son of son of son",
        childrenCount: 4,
        likesCount: 0,
        createdAt: "2022-01-16T10:53:28.9005837Z",
        modifiedAt: "2022-01-16T10:53:28.9005837Z",
        labels: [],
        status: ["Published"],
        parentId: "61e3f91dee45e9a72e1518d5",
        score: 0,
      },
      {
        id: "61e3f936ee45e9a72e1518d7",
        type: "Comment",
        userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
        ipAddress: "192.168.1.1",
        topicId: "x1",
        tenant: "Zoomit",
        topicName: "x1",
        content: "son of son of son of son of son",
        childrenCount: 3,
        likesCount: 0,
        createdAt: "2022-01-16T10:53:42.6156859Z",
        modifiedAt: "2022-01-16T10:53:42.6156859Z",
        labels: [],
        status: ["Published"],
        parentId: "61e3f928ee45e9a72e1518d6",
        score: 0,
      },
    ],
    score: 0,
    answers: [],
  },
  {
    id: "61dea375f31df847bfbf4f54",
    type: "Comment",
    userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
    ipAddress: "192.168.1.1",
    topicId: "x1",
    tenant: "Zoomit",
    content: "ee",
    childrenCount: 0,
    likesCount: 0,
    createdAt: "2022-01-12T09:46:29.8876362Z",
    modifiedAt: "2022-01-12T09:46:29.8876362Z",
    labels: [],
    status: ["Published"],
    user: [],
    commentChildren: [],
    score: 0,
    answers: [],
  },
  {
    id: "61dea328a15c6750d47e3fe2",
    type: "Comment",
    userId: "2DEE0468-8B5D-4059-9F37-87B24525436C",
    ipAddress: "192.168.1.1",
    topicId: "x1",
    tenant: "Zoomit",
    content: "hey",
    childrenCount: 0,
    likesCount: 0,
    createdAt: "2022-01-12T09:45:12.3984784Z",
    modifiedAt: "2022-01-12T09:45:12.3984784Z",
    labels: [],
    status: ["Published"],
    user: [],
    commentChildren: [],
    score: 0,
    answers: [],
  },
];
