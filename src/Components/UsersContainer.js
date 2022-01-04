import React from "react";
import UserCard from "./UserCard";
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

const UsersContainer = (props) => {

    return (
        <UsersBox>
            {props.data.map((user) => <UserCard onDelete={props.onDeleteUser} id={user.id} key={user.id} name={user.name} age={user.age} />)}
        </UsersBox>
    )
}

export default UsersContainer;