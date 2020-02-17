import React from 'react';
import { Card, CardHeader, CardContent, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const DetailCard = (props) => {

    return (
        <Card>
            <CardHeader
                action={
                    <IconButton>
                        <StarBorderIcon/>
                    </IconButton>
                }
            >

            </CardHeader>
            <CardContent>
                <p>{props.heroe.name}</p>
            </CardContent>
        </Card>
    );
}

export default DetailCard;