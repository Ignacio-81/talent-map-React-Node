import React from 'react'
import CustomSelect from './CustomSelect.js'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { nivel, nivelInglesBritanico, estudios } from '../Utils/data.js'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import UploadButton from '../Components/UploadButton.js'

import { txtPersonalData } from '../Utils/consts.js'

const useStyles = makeStyles((theme) => ({
    label: {
        width: 260,
        /* padding: theme.spacing(2), */
        color: theme.palette.textColor.text1,
    },
    label2: {
        /* padding: theme.spacing(2), */
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.textColor.text2,
        textAlign: 'center',
        margin: '2px',
    },

}));

export default function PersonalDataGrid() {
    const classes = useStyles();
    return (
        //Container general 
        <Grid container>

            <Grid item container={true} direction="row" alignItems="flex-end" >
                <Grid item direction="column" justify="flex-start"
                    alignItems="flex-start">
                    {txtPersonalData.slice(0, 6).map(txt => (
                        <Typography className={classes.label} variant="h6" >{txt}</Typography>
                    ))}
                </Grid>
                <Grid xs item container={true} direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    >
                    {txtPersonalData.slice(0, 4).map(txt => (
                        <TextField id={txt} fullWidth />
                    ))}
                    <Grid xs={3} item container={true} direction="row" justify="center" >
                        <CustomSelect
                            label='Estudios'
                            objects={estudios}
                            typographySize='body2'
                        />
                    
                        <UploadButton label='Subi tu CV' />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container >
                {/* IDIOMAS */}
                <Grid item xs={12}>
                    <Typography className={classes.label2} variant="h6" >{txtPersonalData[6]}</Typography>
                </Grid>

                <Grid item container={true} direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Typography className={classes.label} variant="h6" >{txtPersonalData[7]}</Typography>
                    <Grid item xs>
                        <CustomSelect
                            label={txtPersonalData[7]}
                            objects={nivel}
                            typographySize='body2'
                        />
                    </Grid>
                    <Grid item xs>
                        <CustomSelect
                            label='Nivel Ingles Britanico'
                            objects={nivelInglesBritanico}
                            typographySize='body2'
                        />
                    </Grid>
                    <Grid item xs style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button size="small" variant="contained"
                            target="_blank" rel="noopener noreferrer"
                            href='https://www.cambridgeenglish.org/es/test-your-english/general-english/'>
                            TEST
                        </Button>
                    </Grid>
                    <Grid item xs style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <UploadButton label='Adjuntar' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container >
                {/* METODOLOGIAS AGILES */}
                <Grid item xs={12}>
                    <Typography className={classes.label2} variant="h6" >{txtPersonalData[8]}</Typography>
                </Grid>
                <Grid item container={true} direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Typography className={classes.label} variant="h6" >{txtPersonalData[9]}</Typography>
                    <Grid item xs={3}>
                        <CustomSelect
                            label={txtPersonalData[9]}
                            objects={nivel}
                            typographySize='body2'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}
