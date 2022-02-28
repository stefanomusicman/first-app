import React, { useState } from "react";
import ErrorPopup from '../Components/ErrorPopup/ErrorPopup';
import { COLUMN_NAMES } from "../App";
import './BookFormV2.css';

const BookFormV2 = (props) => {

    const { BOOKS_TO_READ } = COLUMN_NAMES
 
    const [book, setBook] = useState('');
    const [author, setAuthor] = useState('');
    const [isValid, setIsValid] = useState(true);

    const returnToForm = () => {
        setIsValid(true);
    }

    const setBookHandler = (event) => {
        setBook(event.target.value);
    }

    const setAuthorHandler = (event) => {
        setAuthor(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = {
            name: book,
            author: author,
            column: BOOKS_TO_READ,
            id: Math.random().toString()
        } 

        if(book.trim().length === 0 || author.trim().length === 0) {
            setIsValid(false);
            return;
        }
        if(typeof book === 'number') {
            setIsValid(false);
            return;
        }
        if(typeof age === 'number') {
            setIsValid(false);
            return;
        }

        props.formTransfer(formData)

        setBook('');
        setAuthor('');

    }

    return (
        <>
            {!isValid && <ErrorPopup return={returnToForm}/>}
            {isValid && <form onSubmit={submitHandler}>
                <div className='user-container'>
                    <label htmlFor='username'>Book Title</label><br />
                    <input onChange={setBookHandler} value={book} type='text' id='username'/>
                </div>
                <div className='age-container'>
                    <label htmlFor='age'>Author</label><br />
                    <input onChange={setAuthorHandler} value={author} type='text' id='age'/>
                </div>
                <button className='form-button' type='submit'>Add Book</button>
            </form>}
        </>
    )
}

export default BookFormV2;