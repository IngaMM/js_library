import React from "react";
import "./BookEntry.css";
import ReadButton from "./ReadButton";
import RemoveButton from "./RemoveButton";

function BookEntry(props) {
  const read = props.book.read ? "yes" : "no";
  return (
    <tr>
      <td>{props.book.title}</td>
      <td>{props.book.author}</td>
      <td>{props.book.pages}</td>
      <td>
        {read} <ReadButton onClick={props.onClickReadButton} />
      </td>
      <td>
        <RemoveButton onClick={props.onClickRemoveButton} />
      </td>
    </tr>
  );
}

export default BookEntry;
