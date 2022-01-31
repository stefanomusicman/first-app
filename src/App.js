import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import BookForm from './Components/BookForm/BookForm';
import BooksToReadContainer from './Components/BooksToRead/BooksToReadContainer';
import CurrentlyReading from './Components/CurrentlyReading/CurrentlyReading';
import CompletedBooks from './Components/CompletedBooks/CompletedBooks';
import { DNDContext } from './Components/Context/DNDContext';

// const getSessionOrDefault = (key, defaultValue) => {
//   const stored = sessionStorage.getItem(key);
//   if(stored === null) {
//     return defaultValue;
//   }
//   return JSON.parse(stored);
// }

function App() {

  // const [books, setBooks] = useState(getSessionOrDefault('bookInfo', []));
  // useEffect(() => {
  //   sessionStorage.setItem('bookInfo', JSON.stringify(books))
  // }, [books]);

  // const dataTransferHandler = (data) => {
  //   setBooks(prevBooks => [data, ...prevBooks]);
  // };

  // const deleteBook = (bookId) => {
  //   setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  // }

  return (
    <DndProvider backend={HTML5Backend}>
      <DNDContext>
        <div className='container'>
          <div className='column1'>
            <BookForm />
            <BooksToReadContainer />
          </div>
          <div className='column2'>
            <CurrentlyReading />
            <CompletedBooks />
          </div>
        </div>
      </DNDContext>
    </DndProvider>
  );
}

export default App;

