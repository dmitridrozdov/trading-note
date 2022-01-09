import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

export default makeStyles((theme) => ({
  textStyle: {
    fontFamily: 'Montserrat',
    fontSize: '12px',
  },

  textMargin: {
    marginTop: 10,
  },

  btnForecast: {
    marginTop: 25,
    
    fontFamily: 'Montserrat',
    fontSize: '10px',
    color: '#ed2939',
    border: '1px solid #ed2939',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'white',
      color: 'darkred',
      border: '1px solid darkred',
    },
  },

  span: {
    marginRight: 10,
  },

}));

export const NoteTextField = withStyles({
  root: {
    '& label': {
      color: 'lightgrey',
      fontFamily: 'Montserrat',
    },
    '&.Mui-focused': {
      color: 'lightgrey',
      fontFamily: 'Montserrat',
    },
    '& label.Mui-focused': {
      color: 'lightgrey',
      fontFamily: 'Montserrat',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#f0efed', // Semi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#f0efed', // Solid underline on hover
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f0efed', // Solid underline on focus
    },
  },
})(TextField);