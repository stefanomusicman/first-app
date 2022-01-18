import React from "react";
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
    // font-family: 'Baloo Bhaijaan 2';
    padding: 10px 0;
`

const Header = styled.h2`
    font-family: 'Baloo Bhaijaan 2';
`

const CurrentlyReading = () => {
    return(
        <CurrentBooksBox>
            <Header>Currently Reading</Header>
            <h3>Nothing to Read :(</h3>
        </CurrentBooksBox>
    )
}

export default CurrentlyReading;