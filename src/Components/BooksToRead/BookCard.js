import React from "react";
import styled from 'styled-components';
import { useDrag } from "react-dnd";
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




const BookCard = (props) => {


/*
    const changeItemColumn = (currentItem, columnName) => {
        setItems((prevState) => {

        })
    }

    end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if(dropResult && dropResult.name === "Column 1") {
        
        }
    }*/


    const [{ isDragging }, dragRef] = useDrag({
        type: 'book',
        item: { name: props.name, id: props.id, author: props.author },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult && dropResult.column === "Books to Read") {
                
            }
        }
 
    })

    const deleteHandler = () => {
        props.onDelete(props.id )
    }


    return (
        <CardContainer ref={dragRef} >    
            <Book>
                <>{`${props.name} - ${props.author}`}</>
                {/*console.log(isDragging, props.name)*/}
            </Book>
            <ButtonContainer><BsTrashFill style={{width: '1.2em', height: '1.2em'}} onClick={deleteHandler} /></ButtonContainer>
        </CardContainer>
    )
}

export default BookCard; 