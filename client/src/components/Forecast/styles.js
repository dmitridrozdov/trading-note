import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

export default makeStyles((theme) => ({
  textStyle: {
    fontFamily: 'Varela Round',
    fontSize: '14px',
  },

  textMargin: {
    marginTop: 10,
  },

  btnForecast: {
    marginTop: 30,
    maxWidth: '100px', minWidth: '100px',
    fontFamily: 'Varela Round',
    fontSize: '10px',
    color: 'white',
    backgroundColor: '#03968f',
    // border: '1px solid #ed2939',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: '#2fbdb6',
      color: 'white',
      // border: '1px solid darkred',
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
      fontFamily: 'Varela Round',
    },
    '&.Mui-focused': {
      color: 'lightgrey',
      fontFamily: 'Varela Round',
    },
    '& label.Mui-focused': {
      color: 'lightgrey',
      fontFamily: 'Varela Round',
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