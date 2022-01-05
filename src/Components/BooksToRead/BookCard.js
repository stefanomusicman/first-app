import React from "react";
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

    // &:hover {
    //     cursor: pointer;
    //     transform: scale(0.95);
    // }
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

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Book = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
`

const UserCard = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id )
    }
    
    return (
        <CardContainer>
            <Book>
                <>{`${props.name} - ${props.author}`}</>
            </Book>
            <Form>
                <label htmlFor="current">Completed</label>
                <input id="current" type='checkbox' />
            </Form>
            <ButtonContainer><BsTrashFill style={{width: '1.5em', height: '1.5em'}} onClick={deleteHandler} /></ButtonContainer>
        </CardContainer>   
    )
}

export default UserCard;