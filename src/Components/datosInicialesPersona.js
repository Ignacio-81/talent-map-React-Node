import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomSelect from './CustomSelect.js'
import { nivel, nivelInglesBritanico, estudios } from '../Utils/data.js'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import nulle from '../images/nulle.png'

import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 60,
    },
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
    card: {
        display: 'grid',
        margin: theme.spacing(2),
        width: 250,
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
    },
    media: {
        width: 150,
        height: 200,
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
    }
}));

export default function DatosInicialesPersona() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >


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
                <Grid container item xs>

                    {/* <Grid container item xs={12}> */}
                    <Grid className={classes.textField}>
                        <Typography className={classes.label} variant="h6" >LEGAJO</Typography>

                        <TextField id="legajo" fullWidth />

                        {/* </Grid> */}
                    </Grid>
                    <Grid className={classes.textField}>
                        <Typography className={classes.label} variant="h6" >FECHA DE INGRESO</Typography>
                        <TextField id="fechaDeIngreso" fullWidth />
                    </Grid>
                    <Grid className={classes.textField}>
                        <Typography className={classes.label} variant="h6" >PUESTO</Typography>
                        <TextField id="puesto" fullWidth />
                    </Grid>
                    <Grid className={classes.textField}>
                        <Typography className={classes.label} variant="h6" >SENIORITY</Typography>
                        <TextField id="seniority" fullWidth />
                    </Grid>
                    <Grid container>
                        <Typography className={classes.label} variant="h6" >Estudio Máximo Alcanzado</Typography>
                        <Grid xs={3} className={classes.linkButton}>
                            <CustomSelect
                                label='Estudios'
                                objects={estudios}
                            />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Typography className={classes.label} variant="h6" >CV Actualizado</Typography>
                        <Grid >

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
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.label2} variant="h6" >IDIOMAS</Typography>
                    </Grid>
                    <Grid container direction="row" spacing={2} xs={12}>
                        <Grid item xs={4}>
                        <Typography className={classes.label} variant="h6" >Nivel de Ingles</Typography>
                        </Grid>

                                
                            <Grid item xs={2}>
                                <CustomSelect
                                    label='Nivel de Ingles'
                                    objects={nivel}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <CustomSelect
                                    label='Nivel Ingles Britanico'
                                    objects={nivelInglesBritanico}
                                />
                            </Grid>
                            <Grid item >
                                <Button  size="small" variant="contained"
                                    target="_blank" rel="noopener noreferrer"
                                    href='https://www.cambridgeenglish.org/es/test-your-english/general-english/'>
                                    TEST
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography className={classes.label} variant="body1" >Evidencia del Resultado</Typography>
                            </Grid>
  
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.label2} variant="h6" >METODOLOGÍAS ÁGILES</Typography>
                    </Grid>
                    <Grid container >
                        <Typography className={classes.label} variant="h6" >Metodologías Ágiles</Typography>
                        <Grid item xs={3} className={classes.linkButton}>
                        <CustomSelect
                            label='Nivel Metodologías Ágiles'
                            objects={nivel}
                        />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
