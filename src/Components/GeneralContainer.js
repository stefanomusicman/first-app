import React from "react";
import { useDrop } from "react-dnd";
import { BooksBox } from "./BooksToRead/BooksToReadContainer";

export const GeneralContainer = ({children, title}) => {

    const [{ isOver }, dropRef] = useDrop({
        accept: 'book',
        drop: () => ({name: 'book name'}),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return(
        <BooksBox ref={dropRef}>
            {title}
            {children}
            {console.log(isOver)}
        </BooksBox>
    )
}
