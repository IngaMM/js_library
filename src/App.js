import React from "react";
import "./App.css";
import BookTable from "./BookTable";
import AddNewBookButton from "./AddNewBookButton";
import BookForm from "./BookForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    let oldBooks = [];
    if (!localStorage.getItem("books")) {
      oldBooks = [
        {
          title: "Into the Wild",
          author: "Jon Krakauer",
          pages: 500,
          read: true
        },
        {
          title: "The Lord of the Rings",
          author: "JRR Tolkien",
          pages: 1000,
          read: false
        }
      ];
    } else {
      oldBooks = JSON.parse(localStorage.getItem("books"));
    }

    this.state = {
      books: oldBooks,
      input: {
        title: "",
        author: "",
        pages: 1,
        read: true
      },
      showingForm: false
    };
    this.handleClickReadButton = this.handleClickReadButton.bind(this);
    this.handleClickRemoveButton = this.handleClickRemoveButton.bind(this);
    this.handleChangedInputForm = this.handleChangedInputForm.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleClickReadButton = index => {
    this.setState(state => {
      const books = state.books.map((book, j) => {
        if (j === index) {
          book.read = !book.read;
          return book;
        } else {
          return book;
        }
      });
      return {
        books
      };
    }, this.saveToLocalStorage);
  };

  handleClickRemoveButton = index => {
    this.setState(state => {
      const books = state.books.filter((book, j) => {
        return j !== index;
      });
      return {
        books
      };
    }, this.saveToLocalStorage);
  };

  showForm = () => {
    this.setState(state => {
      return {
        showingForm: true
      };
    });
  };

  handleChangedInputForm = (name, value) => {
    this.setState(state => {
      const input = state.input;
      input[name] = value;
      if (name === "read") {
        input[name] = value === "true" ? true : false;
      }
      return {
        input
      };
    });
  };

  addNewBook = event => {
    event.preventDefault(); // Do not reload!
    this.setState(state => {
      const books = state.books.concat(state.input);
      return {
        books,
        input: {
          title: "",
          author: "",
          pages: 1,
          read: true
        },
        showingForm: false
      };
    }, this.saveToLocalStorage);
  };

  saveToLocalStorage = () => {
    localStorage.setItem("books", JSON.stringify(this.state.books));
  };

  render() {
    return (
      <div className="App">
        <h1> Books in the library </h1>
        <BookTable
          books={this.state.books}
          onClickReadButton={this.handleClickReadButton}
          onClickRemoveButton={this.handleClickRemoveButton}
        />
        {!this.state.showingForm && (
          <AddNewBookButton onClick={this.showForm} />
        )}
        {this.state.showingForm && (
          <BookForm
            title={this.state.input.title}
            author={this.state.input.author}
            pages={this.state.input.pages}
            read={this.state.input.read}
            onChange={this.handleChangedInputForm}
            handleSubmit={this.addNewBook}
          />
        )}
      </div>
    );
  }
}

export default App;
