import React, { forwardRef } from "react";

function TextInput({ name, label, value = "", ...props }, ref) {
  return (
    <input
      data-testid={`input-${name}`}
      value={value}
      name={name}
      placeholder={label}
      ref={ref}
      {...props}
    />
  );
}

export default forwardRef(TextInput);
