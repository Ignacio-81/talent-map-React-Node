import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1300,
        color: '#fff',
    } 
}));
const CustomLoading = props => {
    const { loading } = props
    const classes = useStyles();
    return (
        <Backdrop open={loading} className={classes.backdrop} >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
export default CustomLoading;