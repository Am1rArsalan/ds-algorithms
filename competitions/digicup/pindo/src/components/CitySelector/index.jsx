import React, { useState } from "react";
import Modal from "react-modal";
import classnames from "classnames";
import CitySelectorItem from "./CitySelectorItem";
import { cities } from "../../data/cities";

function CitySelector({ onChange, value, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onClickHandler = (id) => {
    onChange(id);
    closeModal();
  };

  return (
    <>
      <div
        data-testid="city-modal"
        className={classnames("city-selector", className)}
        onClick={openModal}
      >
        {value ? cities[value] : "انتخاب شهر"}
      </div>
      <Modal
        className="modal"
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        <div className="modal__content">
          {Object.entries(cities).map(([key, value]) => (
            <CitySelectorItem
              key={key}
              name={value}
              id={key}
              onClick={onClickHandler}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}

export default CitySelector;
