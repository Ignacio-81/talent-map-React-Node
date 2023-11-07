import { useEffect } from 'react';

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
    const { mainSkills } = props
    const classes = useStyles();
    const dispatch = useDispatch();
    //Get information on component Load
    useEffect(() => {
        const getPersonalSkillsInfo = () => dispatch(getPersonalSkills());
        getPersonalSkillsInfo();
    }, [])

    //Get State
    const personaSkills = useSelector(state => state.personalData.personaSkills);
    const errorSkillsData = useSelector(state => state.personalData.errorSkillsData);
    const loading = useSelector(state => state.personalData.loading);

    return (
        <div className={classes.box}>
            {/* //Barra devisión Competencias */}
            <DividerBar />
            {loading ?
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
                            />
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    )
}
