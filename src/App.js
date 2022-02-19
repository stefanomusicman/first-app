// import React from 'react';
// import './App.css';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import BookForm from './Components/BookForm/BookForm';
// import BooksToReadContainer from './Components/BooksToRead/BooksToReadContainer';
// import CurrentlyReading from './Components/CurrentlyReading/CurrentlyReading';
// import CompletedBooks from './Components/CompletedBooks/CompletedBooks';
// import { DNDContext } from './Components/Context/DNDContext';

// import { GeneralContainer } from './Components/GeneralContainer';

// const getSessionOrDefault = (key, defaultValue) => {
//   const stored = sessionStorage.getItem(key);
//   if(stored === null) {
//     return defaultValue;
//   }
//   return JSON.parse(stored);
// }

// function App() {

//   const [books, setBooks] = useState(getSessionOrDefault('bookInfo', []));
//   useEffect(() => {
//     sessionStorage.setItem('bookInfo', JSON.stringify(books))
//   }, [books]);

//   const dataTransferHandler = (data) => {
//     setBooks(prevBooks => [data, ...prevBooks]);
//   };

//   const deleteBook = (bookId) => {
//     setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
//   }


//   return (
//     <DndProvider backend={HTML5Backend}>
//       <DNDContext>
//         <div className='container'>
//           <div className='column1'>
//             <BookForm />
//             <BooksToReadContainer />
//           </div>
//           <div className='column2'>
//             <CurrentlyReading />
//             <CompletedBooks />
//             <GeneralContainer title='Currently Reading'>
//               {null}
//             </GeneralContainer>
//             <GeneralContainer title='Completed Books'>
//               {null}
//             </GeneralContainer>
//           </div>
//         </div>
//       </DNDContext>
//     </DndProvider>
//   );
// }

// export default App;

/* ---- Version 2 ---- */

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BookFormV2 from './ComponentsV2/BookFormV2';
import ContainerV2 from './ComponentsV2/ContainerV2';

function App() {

  const [books, setBooks] = useState([]);

  const formHandler = (book) => {
    setBooks([book, ...books])
  }
  console.log(books);

  return(
    <>
    <BookFormV2 formTransfer={formHandler}/>
    <DndProvider backend={HTML5Backend}>
      <ContainerV2 title='Books to Read'/>
      <ContainerV2 title='Currently Reading'/>
    </DndProvider>
    </>
  )
}

export default App;
