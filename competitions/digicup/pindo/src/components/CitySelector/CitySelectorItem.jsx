import React from "react";

function CitySelectorItem({ id, name, onClick }) {
  const onClickHandler = () => onClick(id);
  return (
    <div
      data-testid={`city-modal-${id}`}
      className="city-selector-item"
      onClick={onClickHandler}
    >
      {name}
    </div>
  );
}

export default CitySelectorItem;
