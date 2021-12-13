import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 475px;
    background-color: whitesmoke;
    font-family: 'Baloo Bhaijaan 2';
    color: black;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
    background: #DDE3FD;
`

const UserCard = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id)
    }
    
    return (
        <CardContainer onClick={deleteHandler}>
            <div>{`${props.name} (${props.age} years old)`}</div>
        </CardContainer>   
    )
}

export default UserCard;