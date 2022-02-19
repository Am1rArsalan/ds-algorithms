export const initialList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: null,
            },
          },
        },
      },
    },
  },
};

export const partiallyReversedList = {
  value: 1,
  next: {
    value: 5,
    next: {
      value: 4,
      next: {
        value: 3,
        next: {
          value: 2,
          next: {
            value: 6,
            next: {
              value: 7,
              next: null,
            },
          },
        },
      },
    },
  },
};

export const partiallyReversedList2 = {
  value: 5,
  next: {
    value: 4,
    next: {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: {
            value: 6,
            next: {
              value: 7,
              next: null,
            },
          },
        },
      },
    },
  },
};

export const listAfterAddingOneItem = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: {
                value: 8,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};

export const reversedList = {
  value: 7,
  next: {
    value: 6,
    next: {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: null,
            },
          },
        },
      },
    },
  },
};
