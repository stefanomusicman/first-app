import React from "react";
import styled from 'styled-components';
import { useDrop } from "react-dnd";

const BooksBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 6px black;
    border-radius: 10px;
    background-color: #E8E8E8;
    margin-top: 2em;
    width: 500px;
    height: 275px;
    font-family: 'Baloo Bhaijaan 2';
    padding: 10px 0;
`

const Header = styled.h2`
font-family: 'Baloo Bhaijaan 2';
`


const ContainerV2 = ({children, title}) => {

    const [{canDrop, isOver}, drop] = useDrop({
        accept:'book',
        drop: () => ({name: 'some book'}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    })

    console.log('options', {canDrop, isOver});

    return(
        <BooksBox ref={drop}>    
            <Header>{title}</Header>        
            {children}
        </BooksBox>
    )
}

export default ContainerV2;