import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPersonalData } from '../redux/actions/personalDataActions.js'
//Material
import { makeStyles } from '@material-ui/core/styles';
//Components
import MainBar from './MainBar.js';
import InitialPersonalData from './InitialPersonalData.js'
import SkillsBox from './SkillsBox.js';
//Constants
import { mainSkills } from '../Utils/consts.js'

const useStyles = makeStyles({
    root: {
        display: 'flex',

        marginLeft: '2vw',
        marginRight: '2vw',
    },
    content: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 70,
    }
})


export default function Form() {
    const classes = useStyles();
    const dispatch = useDispatch();
    //Get information on component Load
    useEffect(() => {
        const getPersonalInformation = () => dispatch(getPersonalData());
        getPersonalInformation();
    }, [])

    //Get State
    const personalInformation = useSelector(state => state.personalData.personalData);
    const loading = useSelector(state => state.personalData.loading);

    return (
        <div className={classes.root}>
            {/* //Barra de Navegación principal */}
            <MainBar
                nombre={personalInformation.data && Object.keys(personalInformation.data).length ? personalInformation.data.nombre : ''}
                apellido={personalInformation.data && Object.keys(personalInformation.data).length ? personalInformation.data.apellido : ''}
            />

            <main className={classes.content}>
                {/* //Informacion personal */}
                <InitialPersonalData
                    data={personalInformation.data && Object.keys(personalInformation.data).length ? personalInformation.data : null}
                    /* error={errorPersonalData} */
                    loading={loading}
                />
                {/* //Caja de competencias */}
                <SkillsBox
                    mainSkills={mainSkills}
                />
            </main>
        </div>
    )
}
