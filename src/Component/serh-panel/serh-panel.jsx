import React from 'react' ;
import s from '../textarea/textarea.module.scss'
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
// import font from 'url(https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap)';

const useStyles = makeStyles((theme) => ({
  '@font-face': {
    fontFamily: 'Comfortaa',
    src: 'url(https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Comfortaa&display=swap)'
  },

  formControl: {
    fontFamily: 'Comfortaa',
    margin: theme.spacing(1),
    minWidth: 120,

    label:{

    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



  const SearchPanel = ({visibleElement, onLabelChange, visibility}) =>  {

    const classes = useStyles();

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