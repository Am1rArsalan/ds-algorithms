import React from "react";

function Error({ name, error }) {
  return (
    <span data-testid={`error-${name}`} className="error">
      {error}
    </span>
  );
}

export default Error;
