import React from "react";
import styled from 'styled-components';
import { useDrag } from "react-dnd";
import { BsTrashFill } from 'react-icons/bs';
import { COLUMN_NAMES } from "../App";

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

    @media (max-width: 700px) {
        width: 280px;
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


const BookCardV2 = ({name, id, author, setBooks, onDelete}) => {

    const changeItemColumn = (currentItem, columnName) => {
        setBooks((prevState) => {
            return prevState.map(e => {
                return {
                    ...e,
                    column: e.name === currentItem.name ? columnName : e.column,
                }
            })
        })
    }

    const [, dragRef] = useDrag({
        type: 'book',
        item: { name: name, id: id, author: author },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();

            if(dropResult) {
                const {name} = dropResult;
                const { BOOKS_TO_READ, CURRENTLY_READING, COMPLETED } = COLUMN_NAMES;
                switch (name) {
                    case CURRENTLY_READING:
                        changeItemColumn(item, CURRENTLY_READING);
                        break;
                    case COMPLETED:
                        changeItemColumn(item, COMPLETED);
                        break;
                    case BOOKS_TO_READ:
                        changeItemColumn(item, BOOKS_TO_READ);
                        break;
                    default:
                        break;
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }), 
    })

    const deleteHandler = () => {
        onDelete(id)
    }

    return (
        <CardContainer ref={dragRef} >    
            <Book>
                {`${name} - ${author}`}
            </Book>
            <ButtonContainer><BsTrashFill style={{width: '1.2em', height: '1.2em'}} onClick={deleteHandler}/></ButtonContainer>
        </CardContainer>
    )
}

export default BookCardV2; 