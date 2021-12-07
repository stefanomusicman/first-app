import React, { useState } from "react";
import './UserForm.css';
import ErrorPopup from "./ErrorPopup";

const UserForm = (props) => {

    const [user, setUser] = useState('');
    const [age, setAge] = useState('');
    const [isValid, setIsValid] = useState(true);

    const returnToForm = () => {
        setIsValid(true);
    }

    const setUserHandler = (event) => {
        setUser(event.target.value);
    }

    const setAgeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = {
            name: user,
            age: age,
            id: Math.random().toString()
        } 

        if(user.trim().length === 0 || age.trim().length === 0) {
            setIsValid(false);
            return;
        }
        if(+age < 1) {
            setIsValid(false);
            return;
        }
        if(typeof user === 'number') {
            setIsValid(false);
            return;
        }

        props.formTransfer(formData);

        setUser('');
        setAge('');

    }

    return (
        <>
            {!isValid && <ErrorPopup return={returnToForm}/>}
            {isValid && <form onSubmit={submitHandler} className='form-container'>
                <div className='user-container'>
                    <label htmlFor='username'>Username</label><br />
                    <input onChange={setUserHandler} value={user} type='text' id='username'/>
                </div>
                <div className='age-container'>
                    <label htmlFor='age'>Age (Years)</label><br />
                    <input onChange={setAgeHandler} value={age} type='number' id='age'/>
                </div>
                <button className='form-button' type='submit'>Add User</button>
            </form>}
        </>
    )
}

export default UserForm;