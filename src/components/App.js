import React from "react";
import BookList from "./BookList";

class App extends React.Component {

  
  render() {
    return (
      <div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
