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
    children: [],
    parentId: "2",
  },
  {
    id: "2.1.1",
    content: "This is a comment",
    children: [],
    parentId: "2.1",
  },
  {
    id: "2.1.1.1",
    content: "This is a comment",
    children: [],
    parentId: "2.1.1",
  },

  {
    id: "2.1.1.1.1",
    content: "This is a comment",
    children: [],
    parentId: "2.1.1.1",
  },

  {
    id: "2.1.1.1.1.1",
    content: "This is a comment",
    children: [],
    parentId: "2.1.1.1.1",
  },

  {
    id: "2.1.1.1.1.1.1",
    content: "This is a comment",
    children: [],
    parentId: "2.1.1.1.1.1",
  },
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
];

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
        id: "2.1",
        content: "This is a comment",
        children: [
          {
            id: "2.1.1",
            content: "This is a comment",
            children: [
              {
                id: "2.1.1.1",
                content: "This is a comment",
                children: [
                  {
                    id: "2.1.1.1.1",
                    content: "This is a comment",
                    children: [
                      {
                        id: "2.1.1.1.1.1",
                        content: "This is a comment",
                        children: [
                          {
                            id: "2.1.1.1.1.1.1",
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
      {
        id: "2.2",
        content: "This is a comment",
        children: [],
      },
      {
        id: "2.3",
        content: "This is a comment",
        children: [],
      },
      {
        id: "2.4",
        content: "This is a comment",
        children: [],
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
];
