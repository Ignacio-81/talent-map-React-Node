import React from 'react'
import MainBar  from './MainBar.js';
import InitialPersonalData from './InitialPersonalData.js'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    content: {
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'column',
        margin: 5,
        marginTop: 70,
        backgroundColor: '#ececec',
    }
})

export default function Formulario() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
            <MainBar/>
        <main className={classes.content}>
            <InitialPersonalData/>
        </main>
    </div>
  )
}
