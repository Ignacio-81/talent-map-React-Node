import { useEffect } from 'react'
import { useSelector } from 'react-redux';

//Material
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//Card Material
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import nulle from '../images/nulle.png'
//Components
import PersonalDataGrid from './PersonalDataGrid.js';
//Data & Contants
import { URL_TUTORIAL } from '../Utils/consts.js';

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

export default function InitialPersonalData(props) {
    const classes = useStyles();
    const { data, setRequest, request } = props;

    const loading = useSelector(state => state.personalData.loading);

    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            setRequest({
                ...request,
                "personalData": {
                    "id": data && data.legajo ? data.legajo : null,
                    "nombre": data && data.nombre ? data.nombre : null,
                    "apellido": data && data.apellido ? data.apellido : null,
                    "legajo": data && data.legajo ? data.legajo : null,
                    "fechaDeIngreso": data && data.fechaDeIngreso ? data.fechaDeIngreso : null,
                    "puesto": data && data.puesto ? data.puesto : null,
                    "seniority": data && data.seniority ? data.seniority : null,
                    "cv": data && data.cv ? data.cv : null,
                    "idEstudioMaximoAlcanzado": data && data.idEstudioMaximoAlcanzado != null ? data.idEstudioMaximoAlcanzado : null,
                    "idNivelDeIngles": data && data.idNivelDeIngles != null ? data.idNivelDeIngles : null,
                    "idNivelInglesBritanico": data && data.idNivelInglesBritanico != null ? data.idNivelInglesBritanico : null,
                    "idNivelMetAgiles": data && data.idNivelMetAgiles != null ? data.idNivelMetAgiles : null,
                    "certificadoIngles": data && data.certificadoIngles != null ? data.certificadoIngles : null,
                }
            })
        }
    }, [data])
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent='space-evenly'
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
                                href={URL_TUTORIAL}>
                                TUTORIAL
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <PersonalDataGrid
                        data={data}
                        loading={loading}
                        setRequest={setRequest}
                        request={request}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
