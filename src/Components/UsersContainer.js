import React from "react";
import UserCard from "./UserCard";
import './UsersContainer.css';

const UsersContainer = (props) => {

    return (
        <div className='users-container'>
            {props.data.map((user) => <UserCard key={user.id} name={user.name} age={user.age} />)}
        </div>
    )
}

export default UsersContainer;