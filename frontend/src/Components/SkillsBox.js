import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPersonalSkills } from '../redux/actions/personalDataActions.js'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//Components
import SkillsGrid from './SkillsGrid.js'
import DividerBar from './DividerBar.js';
import CustomLoading from './CustomLoading.js'

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '1vw',
    },
    section: {
        borderRadius: 15,
    },
    heading: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 5,
    },
    headingtxt: {
        color: theme.palette.textColor.text2,
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },

}));

export default function SkillsBox(props) {
    const { mainSkills, setRequest, request } = props
    const classes = useStyles();
    const dispatch = useDispatch();
    const [getInfo, setGetInfo] = useState(false)
    //Get information on component Load
    useEffect(() => {
        dispatch(getPersonalSkills());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //Get State
    const personaSkills = useSelector(state => state.personalData.personaSkills);
    const errorSkillsData = useSelector(state => state.personalData.errorSkillsData);
    const loading = useSelector(state => state.personalData.loading);
    const loadingLists = useSelector(state => state.listsData.loading)

    useEffect(() => {
        if (personaSkills.data && Object.keys(personaSkills.data).length > 0) {
            setRequest({
                ...request,
                "skills": {
                    "sistema01": {
                        "idSistemaOp": personaSkills.data && personaSkills.data.sistema01.sistemaOp != null ? personaSkills.data.sistema01.sistemaOp.id : null,
                        "idNivel": personaSkills.data && personaSkills.data.sistema01.nivel != null ? personaSkills.data && personaSkills.data.sistema01.nivel.id : null,
                        "idTiempo": personaSkills.data && personaSkills.data.sistema01.tiempo != null ? personaSkills.data && personaSkills.data.sistema01.tiempo.id : null,
                        "comentarios": personaSkills.data && personaSkills.data.sistema01.comentarios != null ? personaSkills.data && personaSkills.data.sistema01.comentarios : null,
                    },
                    "sistema02": {
                        "idSistemaOp": personaSkills.data && personaSkills.data.sistema02.sistemaOp != null ? personaSkills.data.sistema02.sistemaOp.id : null,
                        "idNivel": personaSkills.data && personaSkills.data.sistema02.nivel != null ? personaSkills.data && personaSkills.data.sistema02.nivel.id : null,
                        "idTiempo": personaSkills.data && personaSkills.data.sistema02.tiempo != null ? personaSkills.data && personaSkills.data.sistema02.tiempo.id : null,
                        "comentarios": personaSkills.data && personaSkills.data.sistema02.comentarios != null ? personaSkills.data && personaSkills.data.sistema02.comentarios : null,
                    },
                    "otro": {
                        "sistemaOp": personaSkills.data && personaSkills.data.otro.sistemaOp != null ? personaSkills.data.otro.sistemaOp : null,
                        "idNivel": personaSkills.data && personaSkills.data.otro.nivel != null ? personaSkills.data && personaSkills.data.otro.nivel.id : null,
                        "idNivel": personaSkills.data && personaSkills.data.otro.tiempo != null ? personaSkills.data && personaSkills.data.otro.tiempo.id : null,
                        "comentarios": personaSkills.data && personaSkills.data.otro.comentarios != null ? personaSkills.data && personaSkills.data.otro.comentarios : null,
                    },
                },
            })
            setGetInfo(true)        
        }
    }, [personaSkills])


    return (
        <div className={classes.box}>
            {/* //Barra devisión Competencias */}
            <DividerBar />
            {(loading || !getInfo || loadingLists) ?
                <CustomLoading loading={loading} />
                :
                mainSkills.map(skill => (
                    <Accordion key={skill} className={classes.heading}>
                        <AccordionSummary
                            key={skill}
                            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                            aria-controls="panel1a-content"
                            id={skill}
                        >
                            <Typography key={skill} className={classes.headingtxt}>{skill}</Typography>
                        </AccordionSummary>
                        <AccordionDetails key={skill} >
                            {/* //Grilla interna de cada competencia */}
                            <SkillsGrid key={skill}
                                data={personaSkills.data && Object.keys(personaSkills.data).length ? personaSkills.data : null}
                                skill={skill}
                                error={errorSkillsData}
                                request={request.skills && Object.keys(request.skills).length ? request : null}
                                setRequest={setRequest}
                            />
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    )
}
