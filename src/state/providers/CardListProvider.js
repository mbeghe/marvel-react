import { CardListContext } from '../contexts/CardListContext';
import React, { useState } from 'react';

// Working on Context API and React Hooks
const CardListProvider = props => {
    const [state, setState] = useState({
        list: [{
            name: 'Spiderman',
            power: 'Spider web'
        },
        {
            name: 'Wolverine',
            power: 'Claws'
        },
        {
            name: 'Catwoman',
            power: 'Claws'
        }]
    });

    return (
        <CardListContext.Provider
            value={{
                data: state,
                setFav: {}
            }}
        >
            {props.children}
        </CardListContext.Provider>
    )
}

export default CardListProvider;