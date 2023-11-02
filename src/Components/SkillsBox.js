import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SkillsGrid from './SkillsGrid.js'

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
    return (
            <div className={classes.box}>
                {mainSkills.map(skill => (
                    <Accordion className={classes.heading}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.headingtxt}>{skill}</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <SkillsGrid />
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
    )
}
