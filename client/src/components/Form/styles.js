import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'

export default makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0,0,0,0.2)'
    // boxShadow: 'none',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  textStyle: {
    color: 'white', 
    fontFamily: 'Montserrat',
  },
  textMargin: {
    marginTop: 10,
  },
}));


export const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
    },
    '&.Mui-focused': {
      color: 'white'
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'white',
    // },
    // '& .MuiInput-underline:before': {
    //   borderBottomColor: 'white',
    // },
    // '& .MuiInput-underline:hover::before': {
    //   borderBottomColor: 'white',
    // },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);