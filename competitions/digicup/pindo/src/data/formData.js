export const formData = [
  {
    type: "text",
    required: false,
    name: "productName",
    label: "نام کالا",
  },
  {
    type: "dropdown",
    name: "productStatus",
    label: "وضعیت کالا",
    options: [
      { title: "نو", value: 1 },
      { title: "در حد نو", value: 2 },
      { title: "دست دوم", value: 3 },
      { title: "خراب", value: 4 },
    ],
  },
  {
    type: "textarea",
    name: "productIssues",
    label: "مشکلات کالا",
    dependency: {
      show: { name: "productStatus", value: 4 },
      required: { name: "productStatus", value: 4 },
    },
  },
  {
    type: "checkbox",
    name: "delivery",
    label: "از سیستم دلیوری استفاده خواهم کرد",
  },
  {
    type: "city",
    name: "cityId",
    label: "محل آگهی",
    dependency: {
      required: { name: "delivery", value: true },
    },
  },
];
