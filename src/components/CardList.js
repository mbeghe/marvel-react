import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { CardListContext } from '../state/contexts/CardListContext';
import DetailCard from './DetailCard';

const CardList = (props) => {
    const { Consumer } = CardListContext;
  
    return (
        <Grid container spacing={1}>
            <Consumer>
                {context => (
                    context.data.list.map((heroe, ix) => {
                        return (
                            <Grid item  xs={2} key={ix}>
                                <DetailCard heroe={heroe}/>
                            </Grid>
                        )
                    })
                )}
            </Consumer>
        </Grid>
    );
  };

export default CardList;
