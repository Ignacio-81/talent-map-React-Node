import { useState, useEffect } from 'react';
import { getPersonalData, savePersonalDataError } from '../redux/actions/personalDataActions.js'
import { getListsData} from '../redux/actions/listsDataActions.js'
import { useSelector, useDispatch } from 'react-redux';
//Material
import { makeStyles } from '@material-ui/core/styles';
//Components
import MainBar from './MainBar.js';
import InitialPersonalData from './InitialPersonalData.js'
import SkillsBox from './SkillsBox.js';
//SweetAlert
import Swal from 'sweetalert2'
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
    const [request, setRequest] = useState({id:1}) //For this Demo id is hardcoded 
    const dispatch = useDispatch();
    const showSwal = () => {
        Swal.fire({
            icon: "error",
            title: "Error al guardar los datos",
            text: "Por favor pruebe nuevamente",
        })
      }
    //Get information on component Load
    useEffect(() => {
        dispatch(getListsData());
        dispatch(getPersonalData());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Get State
    const personalInformation = useSelector(state => state.personalData.personalData);
    const saveError = useSelector(state => state.personalData.errorPersonalDataSave)

    useEffect(() => {
        if (saveError){
            showSwal()
            dispatch(savePersonalDataError(false))
        }
    }, [saveError])

    return (
        <div className={classes.root}>
            {/* //Barra de Navegación principal */}
            <MainBar
                nombre={personalInformation.data && Object.keys(personalInformation.data).length ? personalInformation.data.nombre : ''}
                apellido={personalInformation.data && Object.keys(personalInformation.data).length ? personalInformation.data.apellido : ''}
                request={request}
            />

            <main className={classes.content}>
                {/* //Informacion personal */}
                <InitialPersonalData
                    data={personalInformation.data && Object.keys(personalInformation.data).length ? personalInformation.data : null}
                    setRequest={setRequest}
                    request={request}
                />
                {/* //Caja de competencias */}
                <SkillsBox
                    mainSkills={mainSkills}
                    setRequest={setRequest}
                    request={request}
                />
            </main>
        </div>
    )
}
