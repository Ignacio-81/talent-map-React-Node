import {useState} from 'react'

import CustomSelect from './CustomSelect.js'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { nivel, nivelInglesBritanicoTxt, estudios } from '../Utils/data.js'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import UploadButton from '../Components/UploadButton.js'

import { txtPersonalData, URL_TEST_INGLES } from '../Utils/consts.js'

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


export default function PersonalDataGrid(props) {
    const classes = useStyles();

    const { data, error, loading } = props;
    const [textValues, setTextValues] = useState('');
    const handleTextChange = (index, value) => {
        const updatedValues = [...textValues];
        updatedValues[index] = value;
        setTextValues(updatedValues);
      };
    return (
        //Container general 
        <>
            {error ?
                <Grid >
                    < Typography style={{ backgroundColor: "red", textAlign: 'center' }} variant="h3" >ERRROR </Typography>
                </Grid >
                :
                loading ?
                    <Grid item xs={9}>
                        <Typography style={{ backgroundColor: "green", textAlign: 'center' }} variant="h3" >Cargando... </Typography>
                    </Grid>
                    : null}

            {!data ?
                <Typography style={{ backgroundColor: "green", textAlign: 'center' }} variant="h3" >No hay Datos... </Typography>
                :
                <>
                    <Grid container>
                        <Grid item container={true} direction="row" alignItems="flex-end" >
                            {/* LABEL TEXT */}
                            <Grid item>
                                {txtPersonalData.slice(0, 6).map(txt => (
                                    <Typography key={txt} className={classes.label} variant="h6" >{txt}</Typography>
                                ))}
                            </Grid>
                            {/* PERSONAL INFORMATION */}
                            <Grid xs item container={true} direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                            {
                                Object.values(data).slice(2,6).map( (txt,index) =>
                                <TextField key={Object.keys(data)[index]} 
                                value={textValues[index]} 
                                defaultValue={txt}
                                fullWidth 
                                onChange = {(e) => handleTextChange(index, e.target.value)}
                                />
                            )}
                                <Grid xs={3} item container={true} direction="row" justifyContent="center" >
                                    <CustomSelect
                                        label='Estudios'
                                        objects={estudios}
                                        value={data.estudioMaximoAlcanzado ? data.estudioMaximoAlcanzado.id : null}
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
                                        value={data.nivelDeIngles ? data.nivelDeIngles.id : null}
                                        typographySize='body2'
                                    />
                                </Grid>
                                <Grid item xs>
                                    <CustomSelect
                                        label='Nivel Ingles Britanico'
                                        objects={nivelInglesBritanicoTxt}
                                        value={data.nivelInglesBritanico ? data.nivelInglesBritanico.id : null}
                                        typographySize='body2'
                                    />
                                </Grid>
                                <Grid item xs style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button size="small" variant="contained"
                                        target="_blank" rel="noopener noreferrer"
                                        href={URL_TEST_INGLES}>
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
                                justifyContent="flex-start"
                                alignItems="center">
                                <Typography className={classes.label} variant="h6" >{txtPersonalData[9]}</Typography>
                                <Grid item xs={3}>
                                    <CustomSelect
                                        label={txtPersonalData[9]}
                                        objects={nivel}
                                        value={data.nivelMetAgiles ? data.nivelMetAgiles.id : null}
                                        typographySize='body2'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>}

        </>
    )
}
