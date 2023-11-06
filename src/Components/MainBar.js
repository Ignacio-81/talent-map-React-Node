import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
		height: '60px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
    menuButton: {
      marginRight: theme.spacing(2),
    },
    text: {
        textAlign: 'middle',
        fontWeight: 'bold',
        letterSpacing: 10,
        fontSize: 40
    },
  }));

export default function MainBar(props) {
    const classes = useStyles();
    const {nombre, apellido} = props;
    return (
          <AppBar>
            <Toolbar className={classes.toolbar}>
              <Typography className={classes.text} >{`${nombre} ${apellido}`}</Typography>
            </Toolbar>
          </AppBar>
    );
  }

