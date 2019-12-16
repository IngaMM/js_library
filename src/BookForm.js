import React from "react";
import "./BookForm.css";

function BookForm(props) {
  return (
    <form onSubmit={e => props.handleSubmit(e)}>
      <h2>New Book</h2>
      <div className="formContainer">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={props.title}
          required
          onChange={e => props.onChange("title", e.target.value)}
        ></input>
      </div>
      <div className="formContainer">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={props.author}
          required
          onChange={e => props.onChange("author", e.target.value)}
        ></input>
      </div>
      <div className="formContainer">
        <label htmlFor="pages">Number of pages</label>
        <input
          type="number"
          step="1"
          id="pages"
          value={props.pages}
          min="1"
          required
          onChange={e => props.onChange("pages", e.target.value)}
        ></input>
      </div>
      <div>
        <p> Have you read the book ? </p>
        <label htmlFor="read_true">Yes</label>
        <input
          type="radio"
          id="read_true"
          value="true"
          onChange={e => props.onChange("read", e.target.value)}
          checked={props.read === true}
        />
        <label htmlFor="read_false">No</label>
        <input
          type="radio"
          id="read_false"
          value="false"
          onChange={e => props.onChange("read", e.target.value)}
          checked={props.read === false}
        />
      </div>
      <button type="submit" id="addNewBook2">
        Add the new Book
      </button>
    </form>
  );
}

export default BookForm;
