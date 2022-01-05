import React from "react";
import styled from "styled-components";

const CurrentBooksBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
    background-color: #E8E8E8;
    margin-top: 2em;
    width: 500px;
    height: 225px;
    font-family: 'Baloo Bhaijaan 2';
    padding: 10px 0;
`

const CurrentlyReading = () => {
    return(
        <CurrentBooksBox>
            <h2>Currently Reading</h2>
            <p>Nothing to Read :(</p>
        </CurrentBooksBox>
    )
}

export default CurrentlyReading;