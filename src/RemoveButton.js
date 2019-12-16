import React from "react";
import "./RemoveButton.css";

function RemoveButton(props) {
  return <button onClick={props.onClick}>Remove this book</button>;
}

export default RemoveButton;
