import React from 'react';
import Book from './Book';
import { BookContext } from '../contexts/BookContext'; //because we can't get it by default {}
import '../css/style.css';

class BookList extends React.Component {
  render() {
    return (
      <BookContext.Consumer>
        {(value) => {
          //value= this.state
          return (
            <section className="page-section bg-light" id="portfolio">
              <div className="container">
                <div className="text-center">
                  <h2 className="section-heading text-uppercase">BookFolio</h2>
                  <h3 className="section-subheading text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                </div>
                <div className="row">
                  {value.books.map((book, i) => {
                    return <Book book={book} key={i} />;
                  })}
                  ;
                </div>
              </div>
            </section>
          );
        }}
      </BookContext.Consumer>
    );
  }
}

export default BookList;
