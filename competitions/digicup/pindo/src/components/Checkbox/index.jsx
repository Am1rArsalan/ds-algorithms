import React, { forwardRef } from "react";

function Checkbox({ label, className, ...props }, ref) {
  return (
    <label className="checkbox">
      <input
        data-testid={`checkbox-${props.name}`}
        type="checkbox"
        {...props}
        ref={ref}
      />
      <span>{label}</span>
    </label>
  );
}

export default forwardRef(Checkbox);
