import React from 'react';
import { Paper, Grid } from '@material-ui/core';

const heroes = [{
    name: 'Spiderman',
    power: 'Spider Web'
    },
    {
        name: 'Wolverine',
        power: 'Claws'
}];

function CardList(){
    return(
        <Grid container spacing={1}>
            {heroes.map((heroe , ix) => {
                return(
                    <Grid item xs={12} sm={6} lg={2} key={ix}>
                        <Paper elevation={2}>
                            {heroe.name}
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default CardList;