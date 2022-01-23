import React from "react";
import "./Button.css";

function Button({ children, ...props }) {
  return (
    <button data-testid="submit-btn" className="btn" {...props}>
      {children}
    </button>
  );
}

export default Button;
