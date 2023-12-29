import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CustomSelect from './CustomSelect.js'
import TextField from '@material-ui/core/Input';

import { sistemasOperativos, nivel, tiempo } from '../Utils/data.js'
//Components
import CustomErrorAlert from './CustomErrorAlert.js';
import UploadButton from '../Components/UploadButton.js'
import CustomLabels from './CustomLabels.js'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    placeholder: {
        backgroundColor: theme.palette.primary.main,
        height: '100%',
        borderRadius: 5,
    },
    input: {
        backgroundColor: "white",
        marginLeft: "2px",
        height: "100%",
        borderRadius: 5,
    }
}));

export default function SkillsGrid(props) {
    const classes = useStyles();
    const { data, skill, error, request, setRequest } = props;

    const [textValues, setTextValues] = useState('');
    const [selectSysValues, setselecSystValues] = useState([]);
    const [selectLevValues, setselectLevValues] = useState([]);
    const [selectTimeValues, setselectTimeValues] = useState([]);
    const lists = useSelector(state => state.listsData.listsData);
    const errorLists = useSelector(state => state.listsData.errorListsData)
    
    const handleTextChange = (index, value, field) => {
        const newRequest = request
        const updatedValues = [...textValues];
        if (field && field == 'Otro') {
            newRequest.skills.otro.sistemaOp = value
            updatedValues[0] = value;
        } else {
            index === (Object.keys(request.skills).length - 1)
                ? newRequest.skills.otro.comentarios = value
                : newRequest.skills[`sistema0${index + 1}`].comentarios = value
            updatedValues[index + 1] = value;
        }
        setTextValues(updatedValues);
    };
    const handleSelectChange = (index, value, field) => {
        const newRequest = request
        let updatedValues
        switch (field) {
            case "OpSystem":
                newRequest.skills[`sistema0${index + 1}`].idSistemaOp = value
                updatedValues = [...selectSysValues];
                updatedValues[index] = value;
                setselecSystValues(updatedValues);
                break;
            case "Level":
                newRequest.skills[`sistema0${index + 1}`].idNivel = value
                updatedValues = [...selectLevValues];
                updatedValues[index] = value;
                setselectLevValues(updatedValues);
                break;
            case "Time":
                newRequest.skills[`sistema0${index + 1}`].idTiempo = value
                updatedValues = [...selectTimeValues];
                updatedValues[index] = value;
                setselectTimeValues(updatedValues);
                break;
        }
        setRequest(newRequest)
    };

    return (
        <Grid container
            direction="row"
            justifyContent='space-evenly'
            alignItems="center"
            spacing={1}>
            <Grid item xs={2} className={classes.placeholder}></Grid>
            <Grid item xs={10} >
                {(error || errorLists) ?
                    <Grid >
                        <CustomErrorAlert />
                    </Grid >
                    :
                    (!data || !lists) ?
                        <CustomLabels noData={true} />
                        :
                        Object.values(request.skills).map((sistema, index) => (

                            <Grid item xs={12} style={{ display: 'flex' }} key={Object.keys(request.skills)[index] + skill} >
                                <Grid item xs={3} >
                                    {index === (Object.keys(request.skills).length - 1) ?
                                        <TextField fullWidth placeholder="Comentarios"
                                            key={Object.keys(request.skills)[index]}
                                            className={classes.input}
                                            value={textValues[0]}
                                            defaultValue={sistema.sistemaOp != null ? sistema.sistemaOp : ""}
                                            onChange={(e) => handleTextChange(index, e.target.value, "Otro")}
                                        />
                                        :
                                        <CustomSelect
                                            key={Object.keys(request.skills)[index]}
                                            label='Sistema Operativo'
                                            val={selectSysValues[index] ?? sistema.idSistemaOp ?? -1}
                                            objects={lists.sistemasOperativos}
                                            typographySize='body2'
                                            handleChangeSelect={(e) => handleSelectChange(index, e.target.value, "OpSystem")}
                                        />}

                                </Grid>

                                <Grid item xs={2}>
                                    <CustomSelect
                                        key={Object.keys(request.skills) + index + skill}
                                        label='Nivel-Experiencia'
                                        val={selectLevValues[index] ?? sistema.idNivel ?? -1}
                                        objects={lists.nivel}
                                        typographySize='body2'
                                        handleChangeSelect={(e) => handleSelectChange(index, e.target.value, "Level")}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <CustomSelect
                                        key={Object.keys(request.skills) + index + skill}
                                        label='Tiempo experiencia'
                                        val={selectTimeValues[index] ?? sistema.idTiempo ?? -1}
                                        objects={lists.tiempo}
                                        typographySize='body2'
                                        handleChangeSelect={(e) => handleSelectChange(index, e.target.value, "Time")}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField fullWidth placeholder="Comentarios"
                                        key={Object.keys(request.skills) + index + skill}
                                        type='text'
                                        defaultValue={sistema.comentarios ?? ""}
                                        value={textValues[index+1]}
                                        className={classes.input}
                                        onChange={(e) => handleTextChange(index, e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <UploadButton
                                        key={Object.keys(request.skills) + index + skill}
                                        label='Adjuntar' />
                                </Grid>
                            </Grid>
                        ))
                }
            </Grid>
        </Grid>

    );
}
