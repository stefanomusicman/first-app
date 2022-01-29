import React, { createContext, useState } from "react";

export const DragContext = createContext();

export const DNDContext = (props) => {
    

    // {completed: boolean , cardData}
    const [cardData, setCardData] = useState({});

    return(
        <DragContext.Provider value={[cardData, setCardData]}>
            {props.children}
        </DragContext.Provider>
    )
}

