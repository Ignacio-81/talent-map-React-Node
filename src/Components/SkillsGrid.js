import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomSelect from './CustomSelect.js'
import Input from '@material-ui/core/Input';

import { sistemasOperativos} from '../Utils/data.js'
import UploadButton from '../Components/UploadButton.js'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow : 1,
    },
    placeholder: {
        backgroundColor: theme.palette.primary.main,
        height: '100%',
        borderRadius: 5,
    },
    input:{
        backgroundColor: "white",
        marginLeft: "2px",
        height : "100%",
        borderRadius: 5,
    }
}));

export default function SkillsGrid() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <CustomSelect
                        label=''
                        objects={sistemasOperativos}
                        typographySize='body2'
                    />
                </Grid>
                <Grid item xs={2}>
                <CustomSelect
                        label=''
                        objects={sistemasOperativos}
                        typographySize='body2'
                    />
                </Grid>
                <Grid item xs={2}>
                <CustomSelect
                        label=''
                        objects={sistemasOperativos}
                        typographySize='body2'
                    />
                </Grid>
                <Grid item xs={3}>
                    <Input fullWidth placeholder="Comentarios" className={classes.input}/>
                </Grid>
                <Grid item xs={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <UploadButton label='Adjuntar'/>
                </Grid>
            </React.Fragment>
        );
    }

    return (
            <Grid container                 
            direction="row"
            justify='space-evenly'
            alignItems="center"
            spacing={1}>
                <Grid item xs={2} className={classes.placeholder}></Grid>
                <Grid item xs={10} justify='spacce-evenly' >
                    <Grid item xs={12} spacing={1} style={{display:'flex'}}>
                        <FormRow />
                    </Grid>
                    <Grid item xs={12} spacing={1} style={{display:'flex'}}>
                        <FormRow />
                    </Grid>
                    <Grid item xs={12} spacing={1} style={{display:'flex'}}>
                        <FormRow />
                    </Grid>
                </Grid>
            </Grid>
       
    );
}
