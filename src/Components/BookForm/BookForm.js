import React, { useState } from "react";
import './BookForm.css';
import ErrorPopup from "../ErrorPopup/ErrorPopup";

const UserForm = (props) => {

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

        props.formTransfer(formData);

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

export default UserForm;