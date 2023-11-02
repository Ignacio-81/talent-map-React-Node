import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    
    select: {
        padding: '1px 1px 1px 1px',
        borderRadius: '15px',
        minWidth: '160px',
        paddingLeft: '5px',
        marginBottom: '2px',
        border: /* prop => prop.error ? 'solid 1px red' : */ 'solid 2px rgba(202, 202, 202)',
        backgroundColor: '#ffffff',
        '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: "0px solid",
        },
        '&.MuiSelect-select:focus': {
            borderRadius: "15px",
            backgroundColor: "white",
        },
        '&&.MuiInput-underline:before': {
            content: 'none',
        },
        '&&.MuiInput-underline:after': {
            borderBottom: '#505050',
        },
    },
})

export default function CustomSelect(props) {
  const {label, objects, typographySize} = props;
  const [selection, setSelection] = useState(-1);
  const classes = useStyles();

  const handleChange = (event) => {
    setSelection(event.target.value)
  };

  return (
    <FormControl style={{minWidth: '100%'}}>
      <Select
        labelId={label}
        value={selection}
        label={label}
        onChange={handleChange}
        displayEmpty
        className={classes.select} 
        autoWidth
      >

        <MenuItem value= {-1}>
        <Typography variant={typographySize}>
          <em>{label}</em>
          </Typography>
        </MenuItem>
        {objects.map(({id,data}) =>(
            <MenuItem key={id} value={id}>
                <Typography variant={typographySize}>
                    {data}
                </Typography>
            </MenuItem>
        ))}

      </Select>
    </FormControl>
  );
}