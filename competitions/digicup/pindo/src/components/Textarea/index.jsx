import React, { forwardRef } from "react";

function Textarea({ label, ...props }, ref) {
  return (
    <textarea
      data-testid={`textarea-${props.name}`}
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder={label}
      {...props}
      ref={ref}
    />
  );
}

export default forwardRef(Textarea);
