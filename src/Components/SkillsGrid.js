import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    const { data, skill, error } = props;

    const [textValues, setTextValues] = useState('');
    const handleTextChange = (index, value) => {
        const updatedValues = [...textValues];
        updatedValues[index] = value;
        setTextValues(updatedValues);
    };
    return (
        <Grid container
            direction="row"
            justifyContent='space-evenly'
            alignItems="center"
            spacing={1}>
            <Grid item xs={2} className={classes.placeholder}></Grid>
            <Grid item xs={10} >
                {error ?
                    <Grid >
                        <CustomErrorAlert />
                    </Grid >
                    :
                    !data ?
                        <CustomLabels noData={true} />
                        :
                        Object.values(data).map((sistema, index) => (

                            <Grid item xs={12} style={{ display: 'flex' }} key={Object.keys(data)[index] + skill} >
                                <Grid item xs={3} >
                                    {index === (Object.keys(data).length - 1) ?
                                        <TextField fullWidth placeholder="Comentarios"
                                            key={Object.keys(data) + index + skill}
                                            className={classes.input}
                                            value={textValues[index]}
                                            defaultValue={sistema.sistemaOp != null ? sistema.sistemaOp : ""}
                                            onChange={(e) => handleTextChange(index, e.target.value)}
                                        />
                                        :
                                        <CustomSelect
                                            key={Object.keys(data) + index + skill}
                                            label=''
                                            value={sistema.sistemaOp && sistema.sistemaOp.id ? sistema.sistemaOp.id : null}
                                            objects={sistemasOperativos}
                                            typographySize='body2'
                                        />}

                                </Grid>

                                <Grid item xs={2}>
                                    <CustomSelect
                                        key={Object.keys(data) + index + skill}
                                        label=''
                                        value={sistema.nivel ? sistema.nivel.id : null}
                                        objects={nivel}
                                        typographySize='body2'
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <CustomSelect
                                        key={Object.keys(data) + index + skill}
                                        label=''
                                        value={sistema.tiempo ? sistema.tiempo.id : null}
                                        objects={tiempo}
                                        typographySize='body2'
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField fullWidth placeholder="Comentarios"
                                        key={Object.keys(data) + index + skill}
                                        type='text'
                                        value={sistema.comentarios != null ? sistema.comentarios : ""}
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <UploadButton
                                        key={Object.keys(data) + index + skill}
                                        label='Adjuntar' />
                                </Grid>
                            </Grid>
                        ))
                }
            </Grid>
        </Grid>

    );
}
