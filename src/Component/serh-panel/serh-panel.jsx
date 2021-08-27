import React from 'react' ;
import s from '../textarea/textarea.module.scss'
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



  const SearchPanel = ({visibleElement, onLabelChange, visibility}) =>  {

    const classes = useStyles();
    // const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      visibleElement(event.target.value);
    };

  return (
      <div className={s.panel}>
          <input placeholder={"search"}
                 onChange={onLabelChange}/>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={visibility}
            onChange={handleChange}>
            <MenuItem value={'All'}>all</MenuItem>
            <MenuItem value={'Active'}>active</MenuItem>
            <MenuItem value={'Done'}>done</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
}

export default SearchPanel