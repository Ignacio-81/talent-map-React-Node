import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    label: {
        width: 260,
        color: theme.palette.textColor.text1,
    },
    label2: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.textColor.text2,
        textAlign: 'center',
        margin: '2px',
    },

}));

export default function CustomLabels(props) {
    const classes = useStyles();
    const { text, titulo, noData } = props
    return (
        <div>
            {!noData ?
                <Typography key={text} className={titulo ? classes.label2 : classes.label} variant="h6" >{text}</Typography>
                :
                <Typography style={{ backgroundColor: "white", textAlign: 'center' }} variant="h4" >No hay Datos... </Typography>
            }
        </div>
    )
}
