import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
    },
    label2: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.textColor.text2,
        textAlign: 'center',
        padding: '5px',
        
    },
    label3: {
        backgroundColor: 'transparent',
        color: theme.palette.textColor.text1,
        textAlign: 'center',
        padding: '20px'
    },
}));


export default function DividerBar() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Typography className={classes.label2} variant="h5" >COMPETENCIAS</Typography>
            <Typography className={classes.label3} variant="body2" >(INDICAR EL NIVEL DE CONOCIMIENTO Y EL TIEMPO QUE LLEVÁS UTILIZÁNDOLA).</Typography>
        </Grid>
    )
}
