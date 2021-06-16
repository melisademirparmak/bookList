import React from 'react';
import BookList from './BookList';
import myData from '../contexts/BookContext';
class App extends React.Component {
  render() {
    return (
      <div>
        <myData>
          <BookList />
        </myData>
      </div>
    );
  }
}

export default App;
