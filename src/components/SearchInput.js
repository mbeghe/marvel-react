import React from 'react';
import { OutlinedInput, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function SearchInput (){
    return(
        <OutlinedInput
            fullWidth
            placeholder="Search heroe or villain..."
            startAdornment={
                <InputAdornment>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            }
            endAdornment={
            <InputAdornment>
                    <IconButton>
                        <StarBorderIcon />
                    </IconButton>
                </InputAdornment>
            }
        ></OutlinedInput>
    );
}

export default SearchInput;