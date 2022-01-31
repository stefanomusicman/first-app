import React, { useState } from "react";
import BookCard from "../BooksToRead/BookCard";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const CurrentBooksBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 6px black;
    border-radius: 10px;
    background-color: #E8E8E8;
    margin-top: 2em;
    width: 500px;
    height: 225px;
    padding: 10px 0;
`

export const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90%
`

const Header = styled.h2`
    font-family: 'Baloo Bhaijaan 2';
    height: 10%;
`



const CurrentlyReading = () => {

    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [{ isOver }, dropRef] = useDrop({
        accept: 'book',
        drop: (item) => setCurrentlyReading((currentlyReading) => !currentlyReading.includes(item) ? [...currentlyReading, item] : currentlyReading),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    const deleteBook = (bookId) => {
        setCurrentlyReading((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    }

    return(
        <CurrentBooksBox>
            <Header>Currently Reading</Header>
            <BooksContainer ref={dropRef}>
                {currentlyReading.map((book) => <BookCard id={book.id} key={book.id} name={book.name} author={book.author} onDelete={deleteBook}/>)}
                {currentlyReading.length === 0 && <h3>Nothing to Read :(</h3>}
                {console.log(isOver)}
            </BooksContainer>

        </CurrentBooksBox>
    )
}

export default CurrentlyReading;