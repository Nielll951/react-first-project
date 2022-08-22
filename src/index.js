import React from 'react';
import ReactDom from 'react-dom';

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close everly element
// formatting
// Nested Components, React Tools

// CSS
import './index.css';

import {books} from './books'
import Book from './Book';
import {greeting} from './testing/testing';

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  )      
}

ReactDom.render(<BookList />,document.getElementById('root'));