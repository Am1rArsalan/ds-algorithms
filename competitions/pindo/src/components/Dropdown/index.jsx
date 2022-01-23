import React, { forwardRef } from "react";

function Dropdown({ label, options, ...props }, ref) {
  return (
    <select data-testid={`select-${props.name}`} {...props} ref={ref}>
      <option>یک مورد انتخاب کنید</option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default forwardRef(Dropdown);
