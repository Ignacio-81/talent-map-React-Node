import React from 'react'
import BarraPrincipal  from './barraPrincipal.js';
import DatosInicialesPersona from './datosInicialesPersona.js'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    content: {
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#c7c7c7',
    }
})

export default function Formulario() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
            <BarraPrincipal/>
        <main className={classes.content}>
            <DatosInicialesPersona/>
        </main>
    </div>
  )
}
