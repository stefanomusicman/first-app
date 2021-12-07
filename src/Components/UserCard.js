import React from "react";
import './UserCard.css';

const UserCard = (props) => {
    return (
        <div className='card-container__main'>
            <div className='card-container'>
                <div>{`${props.name} (${props.age} years old)`}</div>
            </div>
        </div>    
    )
}

export default UserCard;