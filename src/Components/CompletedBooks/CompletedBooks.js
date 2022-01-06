import React from "react";
import styled from "styled-components";

const CompletedBooks = () => {

    const CompletedBooksBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px black;
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

    return(
        <CompletedBooksBox>
            <Header>Completed Books</Header>
            <h3>Nothing has been completed :(</h3>
        </CompletedBooksBox>
    )
}

export default CompletedBooks;