import React, { useState, useEffect } from 'react';
import BookForm from './Components/BookForm/BookForm';
import BooksToReadContainer from './Components/BooksToRead/BooksToReadContainer';

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
    <>
      <BookForm formTransfer={dataTransferHandler}/>
      {books.length > 0 && <BooksToReadContainer onDeleteUser={deleteUser} data={books} />}
    </>
  );
}

export default App;

