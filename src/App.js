import React, { useState } from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BookCardV2 from './ComponentsV2/BookCardV2';

import BookFormV2 from './ComponentsV2/BookFormV2';
import ContainerV2 from './ComponentsV2/ContainerV2';

export const COLUMN_NAMES = {
  BOOKS_TO_READ: 'Books to Read',
  CURRENTLY_READING: 'Currently Reading',
  COMPLETED: 'Completed Books'
}

const Primary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  text-align: center;
  color: white;
  font-family: 'Baloo Bhaijaan 2';
  font-size: 50px;
  margin: auto;
  padding-top: 20px;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2em;
`

const InstrBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`

const Instructions = styled.p`
  text-align: center;
  color: white;
  font-family: 'Baloo Bhaijaan 2';
  font-size: 30px;
`

function App() {

  const { BOOKS_TO_READ, CURRENTLY_READING, COMPLETED } = COLUMN_NAMES
  const [books, setBooks] = useState([]);

  const formHandler = (book) => {
    setBooks([book, ...books])
  }

  const deleteBook = (bookId) => {
    setBooks(prevBooks => prevBooks.filter((book) => book.id !== bookId))
  }

  const returnBooksForColumn = (columnName) => {
    return books
      .filter((item) => item.column === columnName)
      .map((item) => <BookCardV2 name={item.name} key={item.id} id={item.id} author={item.author} setBooks={setBooks} onDelete={deleteBook}/>)
  }

  return(
    <Primary>
      <DndProvider backend={HTML5Backend}>
        <Title>Book Tracker</Title>
        <MainContainer>
          <ColumnOne>
            <BookFormV2 formTransfer={formHandler}/>
            <ContainerV2 title={BOOKS_TO_READ}>
              {returnBooksForColumn(BOOKS_TO_READ)}
            </ContainerV2>
          </ColumnOne>
          <ColumnTwo className='column2'>
            <ContainerV2 title={CURRENTLY_READING}>
              {returnBooksForColumn(CURRENTLY_READING)}
            </ContainerV2>
            <ContainerV2 title={COMPLETED}>
              {returnBooksForColumn(COMPLETED)}
            </ContainerV2>
          </ColumnTwo>
        </MainContainer>
        <InstrBox>
          <Instructions>Keep track of all the books you want to read! Fill out the form and then simply drag and drop the books in the container that best describes your progress!</Instructions>
        </InstrBox>
      </DndProvider>
    </Primary>
  )
}

export default App;
