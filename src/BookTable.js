import React from "react";
import "./BookTable.css";
import BookEntry from "./BookEntry";

function BookTable(props) {
  let rows = [];
  for (let i = 0; i < props.books.length; i++) {
    rows.push(
      <BookEntry
        onClickReadButton={() => {
          props.onClickReadButton(i);
        }}
        onClickRemoveButton={() => {
          props.onClickRemoveButton(i);
        }}
        key={i}
        book={props.books[i]}
      />
    );
  }

  return (
    <div className="BookTable">
      <table id="booklist">
        <thead>
          <tr className="tableHeader">
            <td>Title</td>
            <td>Author</td>
            <td>Number of pages</td>
            <td>Read?</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default BookTable;
