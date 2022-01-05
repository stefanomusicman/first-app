import React from "react";
import BookCard from "./BookCard";
import styled from "styled-components";

const UsersBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 275px;
    background-color: #E8E8E8;
    margin-top: 2em;
    /* border: 2px solid black; */
    border-radius: 10px;
    box-shadow: 0 0 10px black;
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

const UsersContainer = (props) => {

    return (
        <UsersBox>
            <Header>Books To Read!</Header>
            {props.data.map((book) => <BookCard onDelete={props.onDeleteUser} id={book.id} key={book.id} name={book.name} author={book.author} />)}
            {props.data.length === 0 && <h3>Nothing To Read :(</h3>}
        </UsersBox>
    )
}

export default UsersContainer;