import React, { useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { BooksContainer } from "../CurrentlyReading/CurrentlyReading";
import BookCard from "../BooksToRead/BookCard";

const CompletedBooksBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 6px black;
    border-radius: 10px;
    background-color: #E8E8E8;
    margin-top: 2em;
    width: 500px;
    height: 275px;
    font-family: 'Baloo Bhaijaan 2';
    padding: 10px 0;
`

const Header = styled.h2`
font-family: 'Baloo Bhaijaan 2';
`


const CompletedBooks = () => {

    const [completedBooks, setCompletedBooks] = useState([]);
    const [{ isOver }, dropRef] = useDrop({
        accept: 'book',
        drop: (item) => setCompletedBooks((completedBooks) => !completedBooks.includes(item) ? [...completedBooks, item] : completedBooks),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        }),
        end: (item) => {
            console.log("end from completed books");
                item.column = 'Completed' 
        } 
    })

    const deleteBook = (bookId) => {
        setCompletedBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    }

    // const isFirstContainer = (book) => {
    //     console.log("Column", book.column, book.column === 'Completed');
    //     return book.column ==='Completed'
    // };


    return(
        <CompletedBooksBox >            
            <Header>Completed Books</Header>
            <BooksContainer ref={dropRef}>
                {completedBooks.length === 0 && <h3>Nothing has been completed :(</h3>}
                {completedBooks.map((book) => <BookCard id={book.id} key={book.id} name={book.name} author={book.author} onDelete={deleteBook} column={book.column}/>)}
                {/* console.log(isOver) */}
                {console.log('completed books', completedBooks)}
            </BooksContainer>
        </CompletedBooksBox>
    )
}

export default CompletedBooks;