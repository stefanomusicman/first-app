import React, { useState, useEffect } from 'react';
import './App.css';
import { DNDContext } from './Components/Context/DNDContext';
import BookForm from './Components/BookForm/BookForm';
import BooksToReadContainer from './Components/BooksToRead/BooksToReadContainer';
import CurrentlyReading from './Components/CurrentlyReading/CurrentlyReading';
import CompletedBooks from './Components/CompletedBooks/CompletedBooks';

const getSessionOrDefault = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if(stored === null) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

function App() {

  const [books, setBooks] = useState(getSessionOrDefault('bookInfo', []));
  useEffect(() => {
    sessionStorage.setItem('bookInfo', JSON.stringify(books))
  }, [books]);

  const dataTransferHandler = (data) => {
    setBooks(prevBooks => [data, ...prevBooks]);
  };

  const deleteUser = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  }

  return (
    <DNDContext>
      <div className='container'>
        <div className='column1'>
          <BookForm formTransfer={dataTransferHandler}/>
          <BooksToReadContainer onDeleteUser={deleteUser} data={books} />
        </div>
        <div className='column2'>
          <CurrentlyReading />
          <CompletedBooks />
        </div>
      </div>
    </DNDContext>
  );
}

export default App;

