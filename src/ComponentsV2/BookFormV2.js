import React, { useState } from "react";
import styled from "styled-components";
import ErrorPopupV2 from "./ErrorPopupV2";
import { COLUMN_NAMES } from "../App";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0 0 10px #505050;
    border-radius: 10px;
    background-color: #E8E8E8;
    margin-top: 2em;
    width: 500px;
    height: 275px;
    font-family: 'Baloo Bhaijaan 2';
    padding: 10px 0;

    @media (max-width: 700px) {
        width: 300px;
    }
`

const Container = styled.div`
    padding-left: 0.5em;
    padding-top: 0.5em;
`

const Input = styled.input`
    width: 98%;  //482px;
    padding: 8px 5px;
    border-radius: 5px;
    border: 0;
    font-family: 'Baloo Bhaijaan 2';
`

const Button = styled.button`
    width: 100px;
    margin-left: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.7em;
    padding: 5px;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    color: white;
    background-color: purple;
    padding: 8px 0;
`

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
            {!isValid && <ErrorPopupV2 return={returnToForm}/>}
            {isValid && <Form onSubmit={submitHandler}>
                <Container>
                    <label htmlFor='username'>Book Title</label><br />
                    <Input onChange={setBookHandler} value={book} type='text' id='username'/>
                </Container>
                <Container>
                    <label htmlFor='age'>Author</label><br />
                    <Input onChange={setAuthorHandler} value={author} type='text' id='age'/>
                </Container>
                <Button type='submit'>Add Book</Button>
            </Form>}
        </>
    )
}

export default BookFormV2;