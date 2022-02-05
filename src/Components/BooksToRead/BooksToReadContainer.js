import React, { useContext, useState } from "react";
import { DragContext } from "../Context/DNDContext";
// import { useDrop } from "react-dnd";
import BookCard from "./BookCard";
import styled from "styled-components";

export const BooksBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 275px;
    background-color: #E8E8E8;
    margin-top: 2em;
    border-radius: 10px;
    box-shadow: 0 0 6px black;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: silver;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5% 5% 5%;
    }
`

const Header = styled.h2`
    font-family: 'Baloo Bhaijaan 2';
`


const BooksToReadContainer = () => {

    const [books, setBooks] = useContext(DragContext);

    // const [{ isOver }, dropRef] = useDrop({
    //     accept: 'book',
    //     drop: (item) => setBooks((books) => !books.includes(item.name) ? [...books, item] : books),
    //     collect: (monitor) => ({
    //         isOver: monitor.isOver()
    //     })
    // })

   

    const isFirstContainer = (book) => {
        console.log("Column", book.column, book.column === 'Books to read');
        return book.column ==='Books to read'};

    const deleteBook = (bookId) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    }

    return (
        <BooksBox >
            <Header>Books To Read!</Header>
            
            {books.map((book) => isFirstContainer(book) && <BookCard onDelete={deleteBook} id={book.id} key={book.id} name={book.name} author={book.author} />)}
            {books.length === 0 && <h3>Nothing To Read :(</h3>}
            {/* {console.log(isOver)} */}
            {console.log(books)}
        </BooksBox>
    )
}

export default BooksToReadContainer;