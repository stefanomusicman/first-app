import React from "react";
import styled from "styled-components";

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`

const ErrorContainer = styled.div`
    position: fixed;
    top: 10vh;
    left: 25%;
    width: 50%;
    z-index: 100;
    overflow: hidden;

    @media (max-width: 700px) {
        width: 80%;
        left: 10%;
    }
`

const Header = styled.header`
    display: flex;
    background-color: purple;
    color: black;
    border-radius: 5px 5px 0px 0px;
    height: 75px;
    align-items: center;
`

const H2 = styled.h2`
    margin-left: 10px;
    color: white;
    font-size: 2em;
`

const Messages = styled.div`
    background-color: white;
    padding: 15px;
`

const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    background-color: white;
    border-radius: 0 0 5px 5px;
`

const Button = styled.button`
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 2px;
    color: white;
    background-color: purple;
`

const ErrorPopupV2 = (props) => {
    return (
        <BackDrop>
            <ErrorContainer>
                <Header>
                    <H2>Error</H2>
                </Header>
                <Messages>
                    <p>Please make sure to fill in Both fields.</p>
                </Messages>
                <Footer>
                    <Button onClick={props.return} type='button'>Close</Button>
                </Footer>
            </ErrorContainer>
        </BackDrop>
    )
}

export default ErrorPopupV2;