import React from 'react';
import { AppBar, Toolbar, makeStyles, Grid } from '@material-ui/core'
import logo from '../image/marvel-logo.jpg'
import SearchInput from './SearchInput';

const useStyles = makeStyles(theme => ({
    appbar: {
        backgroundColor: theme.palette.common.white
    },
    logoGrid: {
        textAlign: 'center'
    },
    logo: {
        maxWidth: "50%",
    }
}));

function SearchBar (){
    const classes = useStyles();

    return(
        <AppBar 
            position="static" 
            className={classes.appbar}
        >
            <Toolbar>
                <Grid container>
                    <Grid item xs={2} lg={2} container>
                        <Grid item className={classes.logoGrid}>
                            <img src={logo} alt="logo" className={classes.logo}/>
                        </Grid>
                    </Grid>
                    <Grid item xs lg container alignItems="center">
                        <Grid item xs={12}>
                            <SearchInput />
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default SearchBar;

