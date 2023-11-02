import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import nulle from '../images/nulle.png'

import PersonalDataGrid from './PersonalDataGrid.js';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ececec',
        borderRadius: 10,
        boxShadow: '0 4px 8px 0 rgba(37, 38, 94, 0.1)',
        marginRight: '1vw',
    },
    card: {
        display: 'grid',
        margin: theme.spacing(1),
        width: 250,
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
    },
    media: {
        width: 150,
        height: 200,
    },

}));

export default function InitialPersonalData() {
    const classes = useStyles();
    return (
        <div /* className={classes.root} */>
            <Grid
                container
                direction="row"
                justify='space-evenly'
                alignItems="center"
                spacing={2}
                className={classes.root}
            >

                <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={nulle}
                            title="Null-e"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" size="medium" color="primary"
                            target="_blank" rel="noopener noreferrer"
                            href='https://drive.google.com/file/d/1kkQW0hgXFjng7rZSl7UbP5_sFf1emhFi/view?_hsmi=254813860&_hsenc=p2ANqtz--p0zZEa7qi8yhrV6nGHgTgfJ5WcmKvVtQhLEXPsevrxHCkNQSdr7SlkYuj8ONHbGZOxJfPNN1EXGgjM8Ul8qhft3wz9w'>
                            TUTORIAL
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            <Grid item xs={9}> 
                <PersonalDataGrid/>
            </Grid>
            </Grid>
        </div>
    )
}
