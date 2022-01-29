import React, { useState, useContext } from "react";
import styled from "styled-components";
import { DragContext } from "../Context/DNDContext";

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

const Header = styled.h2`
    font-family: 'Baloo Bhaijaan 2';
`
const onDrageLeave = (event) => {
    console.log('drag over');
    console.log(event.dataTransfer);
    event.preventDefault();

} 



const CurrentlyReading = () => {

    const [cards, setCards] = useState([]);;

    const [cardData, setCardData] = useContext(DragContext);


    const onDrageLeave = (event) => {
        console.log('drag over');
        console.log("Carddata", cardData);
        if(cardData !== {} && cardData !== null) {
            setCards([cardData, ...cards]);
            setCardData({});
        }
        event.preventDefault();
    } 

    console.log("cards", cards);

    return(
        <CurrentBooksBox onDragLeave={(e) => {onDrageLeave(e)}} >
            <Header>Currently Reading</Header>
            {cards.length === 0 && <h3>Nothing to Read :(</h3>}
            <div>
                {cards.map(book => <div>{book.name}</div>)}
            </div>

        </CurrentBooksBox>
    )
}

export default CurrentlyReading;