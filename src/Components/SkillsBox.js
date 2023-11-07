import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPersonalSkills } from '../redux/actions/personalDataActions.js'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SkillsGrid from './SkillsGrid.js'
import DividerBar from './DividerBar.js';

const useStyles = makeStyles((theme) => ({
    box: {
        display:'flex',
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
    const { mainSkills, skills, period, description, link } = props
    const classes = useStyles();
    const dispatch = useDispatch();
    //Get information on component Load
    useEffect(() => {
        const getPersonalSkillsInfo = () => dispatch(getPersonalSkills());
        getPersonalSkillsInfo();
    }, [])

    //Get State
    const personaSkills = useSelector(state => state.personalData.personaSkills);
    const error = useSelector(state => state.error);
    const loading = useSelector(state => state.loading);
/*     useEffect(()=>{
        console.log('skillsbox log :'+ personaSkills)
        
        if (personaSkills && personaSkills.data && Object.keys(personaSkills.data).length > 0){
            console.log(personaSkills.data.sistema01 )
            console.log(personaSkills.data.sistema01.nivel.id)
        }
    },[personaSkills]) */
    return (
            <div className={classes.box}>
            {console.log(personaSkills.data)}
            
                <DividerBar/>
                {mainSkills.map(skill => (
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
                            <SkillsGrid key={skill}
                                data={personaSkills.data && Object.keys(personaSkills.data).length ? personaSkills.data : null }
                                skill={skill}
                            />
                        </AccordionDetails>
                    </Accordion>
                ))}
                
            </div>
    )
}
