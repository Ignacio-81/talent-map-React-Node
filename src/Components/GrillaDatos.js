import React from 'react'
import CustomSelect from './CustomSelect.js'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { nivel, nivelInglesBritanico, estudios } from '../Utils/data.js'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

import {txtPersonalData}from '../Utils/consts.js'

const useStyles = makeStyles((theme) => ({
    label: {
        width: 260,
        /* padding: theme.spacing(2), */
        color: theme.palette.text.secondary,
    },
    label2: {
        /* padding: theme.spacing(2), */
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.secondary,
        textAlign: 'center',
    },
    linkButton: {
        display: 'flex',
        textAlign: 'center',
        justifyItems: 'center',
        justifyContent: 'space-between',
    },
    textField: {
        display: 'flex',
        width: '100%',
    },
}));

export default function GrillaDatos() {
    const classes = useStyles();
    return (

        <Grid container >
            <Grid>
                {txtPersonalData.slice(0, 6).map(txt => (
                   <Typography className={classes.label} variant="h6" >{txt}</Typography> 
                ))}
            </Grid>
            <Grid xs>
                {txtPersonalData.slice(0, 4).map(txt => (
                   <TextField id="txt" fullWidth />
                ))}
                <Grid xs>
                    <CustomSelect
                        label='Estudios'
                        objects={estudios}
                    />
                </Grid>
                <input
                    accept="*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" size="small" color="default" component="span" startIcon={<CloudUploadIcon />}>
                        Subi tu CV
                    </Button>
                </label>
            </Grid>
            <Grid container >
                <Grid item xs={12}>
                    <Typography className={classes.label2} variant="h6" >{txtPersonalData[6]}</Typography>
                </Grid>

                <Grid item container={true} direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Typography className={classes.label} variant="h6" >{txtPersonalData[7]}</Typography>
                    <Grid item xs>
                        <CustomSelect
                            label='Nivel de Ingles'
                            objects={nivel}
                        />
                    </Grid>
                    <Grid item xs>
                        <CustomSelect
                            label='Nivel Ingles Britanico'
                            objects={nivelInglesBritanico}
                        />
                    </Grid>
                    <Grid item xs>
                        <Button size="small" variant="contained"
                            target="_blank" rel="noopener noreferrer"
                            href='https://www.cambridgeenglish.org/es/test-your-english/general-english/'>
                            TEST
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.label} variant="body1" >Evidencia del Resultado</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.label2} variant="h6" >{txtPersonalData[8]}</Typography>
                </Grid>
                <Typography className={classes.label} variant="h6" >{txtPersonalData[9]}</Typography>
                

                    <Grid item xs={3} className={classes.linkButton}>
                        <CustomSelect
                            label='Nivel Metodologías Ágiles'
                            objects={nivel}
                        />
                    </Grid>
               

            </Grid>
        </Grid>

    )
}
