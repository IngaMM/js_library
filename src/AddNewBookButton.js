import React from "react";
import "./AddNewBookButton.css";

function AddNewBookButton(props) {
  return (
    <button id="addNewBook" onClick={props.onClick}>
      Add a new Book
    </button>
  );
}

export default AddNewBookButton;
