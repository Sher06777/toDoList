import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const ClearCart = ({ data, setData }) => {
  const clearCart = () => {
    const newData = data.filter((item) => !item.deleted);
    setData(newData);

    const newLocalStorageData = JSON.parse(
      localStorage.getItem("todo-list")
    ).filter((item) => !item.deleted);
    localStorage.setItem("todo-list", JSON.stringify(newLocalStorageData));
  };

  return (
    <button className="cartBtn" onClick={clearCart}>
      {" "}
      <FontAwesomeIcon className="icon" icon={faTrashCan} style={{ color: "red" }} />
      Clear Cart
    </button>
  );
};

export default ClearCart;
