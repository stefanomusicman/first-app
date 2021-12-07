import React from "react";
import './ErrorPopup.css';

const ErrorPopup = (props) => {
    return (
        <div className='backdrop'>
        <div className='error-container'>
            <header className='header'>
                <h2>Error</h2>
            </header>
            <div className='messages'>
                <p>Please make sure to fill in Both fields.</p>
                <p>**Age must be a number greater than 0**</p>
            </div>
            <footer className='footer'>
                <button onClick={props.return} type='button'>Close</button>
            </footer>
        </div>
        </div>)
}

export default ErrorPopup;