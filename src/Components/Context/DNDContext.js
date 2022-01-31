import React, { createContext, useState } from "react";

export const DragContext = createContext();

export const DNDContext = (props) => {
    

    // {completed: boolean , cardData}
    const [books, setBooks] = useState([]);

    return(
        <DragContext.Provider value={[books, setBooks]}>
            {props.children}
        </DragContext.Provider>
    )
}

