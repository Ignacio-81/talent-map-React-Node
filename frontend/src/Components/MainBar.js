import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
//Redux
import { useDispatch } from 'react-redux';
import { updatePersonaInformation } from '../redux/actions/personalDataActions.js'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        height: '60px',
        display: 'flex',
        alignItems: 'center',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    text: {
        flexGrow: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 10,
        fontSize: 40
    },
}));

export default function MainBar(props) {
    const classes = useStyles();
    const { nombre, apellido, request } = props;
    const dispatch = useDispatch();
    return (
        <div >
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.text} >{`${nombre} ${apellido}`}</Typography>
                    <Button variant="contained"
                        size="large"
                        className={classes.menuButton}
                        startIcon={<SaveIcon />}
                        onClick={() => dispatch(updatePersonaInformation(request))}
                        >GUARDAR</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

