import React, { useContext, useEffect } from "react";
import { DragContext } from "../Context/DNDContext";
import styled from 'styled-components';
import { BsTrashFill } from 'react-icons/bs';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 475px;
    background-color: whitesmoke;
    font-family: 'Baloo Bhaijaan 2';
    color: black;
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
    background: #DDE3FD;
    transition: transform 300ms;

    &:hover {
        cursor: move;
        transform: scale(0.95);
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    transition: transform 300ms;

    &:hover {
        cursor: pointer;
        transform: scale(1.3);
    }
`

export const Book = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    font-size: 1em;
`




const UserCard = (props) => {

    const [cardData, setCardData] = useContext(DragContext)

    const deleteHandler = () => {
        props.onDelete(props.id )
    }
    
    const onDragStart = (event, props) => {
        console.log('dragstart:', props);
        console.log(event.dataTransfer);
        event.dataTransfer.setData('props', JSON.stringify(props));
        setCardData(props); // Synchronization
    }

    // use effect
    useEffect(() => {
        if(cardData === {}) {
            
        }
    }, [cardData])

    console.log("rerender", cardData);


    return (
        <CardContainer draggable='true' onDragStart={(e) => {onDragStart(e, props)}}>
            <Book>
                <>{`${props.name} - ${props.author}`}</>
            </Book>
            <ButtonContainer><BsTrashFill style={{width: '1.2em', height: '1.2em'}} onClick={deleteHandler} /></ButtonContainer>
        </CardContainer>
    )
}

export default UserCard; 