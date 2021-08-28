import {makeStyles} from "@material-ui/core";
import background from './img/flower-4865379.png'


export const useStyles = makeStyles({
  app: {
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(39deg, #FFEFBA, #ffffff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '100%',
    maxWidth: 800,
    maxHeight: '95vh',
    backgroundImage: `url(${background})`,
    backgroundSize: '100%',
    boxShadow: '7px 8px 2px 1px rgb(225,216,209)',
    margin: '0 10px',
    padding: '35px 0 25px 0',
  },

})