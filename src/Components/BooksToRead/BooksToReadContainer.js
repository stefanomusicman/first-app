import React from "react";
import BookCard from "./BookCard";
import styled from "styled-components";

const UsersBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    background-color: #E8E8E8;
    margin-top: 2em;
    /* border: 2px solid black; */
    border-radius: 10px;
    box-shadow: 0 0 10px black;
`

const Header = styled.h2`
    font-family: 'Baloo Bhaijaan 2';
`

const UsersContainer = (props) => {

    return (
        <UsersBox>
            <Header>Books To Read!</Header>
            {props.data.map((book) => <BookCard onDelete={props.onDeleteUser} id={book.id} key={book.id} name={book.name} author={book.author} />)}
        </UsersBox>
    )
}

export default UsersContainer;