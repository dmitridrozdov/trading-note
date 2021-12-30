import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  textStyle: {
    fontFamily: 'Montserrat',
    fontSize: '12px',
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