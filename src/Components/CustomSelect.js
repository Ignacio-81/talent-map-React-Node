'use client'
import {useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function CustomSelect(props) {
  const {label, objects} = props;
  const [province, setProvince] = useState(-1);

  const handleChange = (event) => {
    setProvince(event.target.value)
  };

  return (
    <FormControl style={{minWidth: '100%'}}>
      <Select
        labelId={label}
        value={province}
        label={label}
        onChange={handleChange}
        disableUnderline 
      >

        <MenuItem value= {-1}>
          <em>{label}</em>
        </MenuItem>
        {objects.map(({id,data}) =>(
            <MenuItem key={id} value={id}>{data}</MenuItem>
        ))}

      </Select>
    </FormControl>
  );
}